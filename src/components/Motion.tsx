'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'

const REVEAL = [
  '.ag .feat',
  '.ag .sec-h',
  '.ag .plate',
  '.ag .statement',
  '.ag .three > div',
  '.ag .stat',
  '.ag .panel',
  '.ag .guide',
  '.ag .note',
  '.ag .contact',
  '[data-rise]',
].join(',')

/**
 * Scroll reveals and page fades. Nothing is hidden until this runs, and
 * anything already on screen is left alone, so the first paint (including
 * the hero photo) does not wait on JavaScript.
 */
export default function Motion() {
  const pathname = usePathname()
  const router = useRouter()
  const first = useRef(true)
  const pending = useRef<(() => void) | null>(null)
  const usedViewTransition = useRef(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let observer: IntersectionObserver | null = null

    if (pending.current) {
      const finish = pending.current
      pending.current = null
      requestAnimationFrame(() => finish())
    }

    if (!first.current && !usedViewTransition.current && !reduce) {
      const main = document.getElementById('main')
      if (main) {
        main.classList.remove('page-fade')
        void main.offsetWidth
        main.classList.add('page-fade')
      }
    }
    usedViewTransition.current = false
    first.current = false

    if (!reduce) {
      const nodes = Array.from(document.querySelectorAll<HTMLElement>(REVEAL))
      const groups = new Map<HTMLElement, HTMLElement[]>()
      nodes.forEach((node) => {
        const parent = node.parentElement
        if (!parent) return
        const list = groups.get(parent) ?? []
        list.push(node)
        groups.set(parent, list)
      })
      groups.forEach((list) => {
        if (list.length < 2) return
        let top = Infinity
        let bottom = -Infinity
        list.forEach((node) => {
          const rect = node.getBoundingClientRect()
          if (rect.top < top) top = rect.top
          if (rect.bottom > bottom) bottom = rect.bottom
        })
        if (bottom - top > window.innerHeight * 1.25) return
        list.forEach((node, index) => node.style.setProperty('--d', `${Math.min(index, 7) * 50}ms`))
      })

      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue
            entry.target.classList.add('is-in')
            observer?.unobserve(entry.target)
          }
        },
        { threshold: 0.16, rootMargin: '0px 0px -6% 0px' }
      )

      nodes.forEach((node) => {
        const rect = node.getBoundingClientRect()
        const onScreen = rect.top < window.innerHeight * 0.92 && rect.bottom > 0
        if (onScreen) return
        node.classList.add('rise')
        observer?.observe(node)
      })
    }

    return () => observer?.disconnect()
  }, [pathname])

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const startViewTransition = (document as Document & {
      startViewTransition?: (update: () => void | Promise<void>) => { finished: Promise<void> }
    }).startViewTransition
    // View transitions snapshot the whole page. On touch browsers (iOS Safari
    // especially) that fights the collapsing toolbar and the fixed header, so
    // phones get the plain page fade instead.
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const canTransition = typeof startViewTransition === 'function' && finePointer

    const onClick = (event: MouseEvent) => {
      if (reduce || !canTransition || pending.current) return
      if (event.defaultPrevented || event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const anchor = (event.target as Element | null)?.closest?.('a')
      if (!anchor) return
      if (anchor.target && anchor.target !== '_self') return
      if (anchor.hasAttribute('download')) return
      const raw = anchor.getAttribute('href')
      if (!raw || raw.startsWith('#') || raw.startsWith('mailto:') || raw.startsWith('tel:')) return
      let url: URL
      try {
        url = new URL(anchor.href, window.location.href)
      } catch {
        return
      }
      if (url.origin !== window.location.origin) return
      const samePage = url.pathname === window.location.pathname && url.search === window.location.search
      if (samePage) return

      event.preventDefault()
      event.stopPropagation()
      const next = `${url.pathname}${url.search}${url.hash}`
      usedViewTransition.current = true
      const timeout = window.setTimeout(() => {
        pending.current?.()
        pending.current = null
      }, 700)
      startViewTransition?.call(document, () => {
        return new Promise<void>((resolve) => {
          pending.current = () => {
            window.clearTimeout(timeout)
            resolve()
          }
          router.push(next)
        })
      })
    }

    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [router])

  return null
}
