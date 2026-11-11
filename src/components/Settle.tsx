'use client'

import { useEffect } from 'react'

const SELECTOR = '.ag .stat, .ag .cap, .ag .note, .ag .panel, .ag .guide'

/** Glass cards ease in with scale and opacity. Reduced motion keeps a fade only. */
export default function Settle() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const nodes = document.querySelectorAll<HTMLElement>(SELECTOR)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-settled')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -4% 0px' }
    )

    nodes.forEach((node) => {
      const rect = node.getBoundingClientRect()
      const inView = rect.top < window.innerHeight * 0.92 && rect.bottom > 0
      node.classList.add(reduce ? 'settle-fade' : 'settle')
      if (inView) node.classList.add('is-settled')
      else observer.observe(node)
    })

    return () => observer.disconnect()
  }, [])

  return null
}
