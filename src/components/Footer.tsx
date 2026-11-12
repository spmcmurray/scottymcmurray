import Link from 'next/link'
import { signOff } from '@/content/home'
import styles from './Footer.module.css'

const columns = [
  {
    title: 'Apps',
    links: [
      { label: 'TENFOLD', href: '/apps/app1' },
      { label: 'RADICAL RUSH', href: '/apps/app3' },
      { label: 'Clubhouse Golf', href: '/apps/app5' },
    ],
  },
  {
    title: 'Writing',
    links: [{ label: 'AI Analyst Agent', href: '/guides/ai-analyst-agent' }],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Support', href: '/support' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Email', href: 'mailto:scottymcmurray@gmail.com' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/scottymcmurray/', external: true },
      { label: 'GitHub', href: 'https://github.com/spmcmurray', external: true },
    ],
  },
] as const

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brand}>
          <Link href="/" className="wordmark">
            <span className="mk" aria-hidden="true">SM</span>
            <span>Scott McMurray</span>
          </Link>
          <p>Simple apps for a simpler life</p>
        </div>
        {columns.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <h2>{column.title}</h2>
            {column.links.map((link) =>
              link.href.startsWith('/') ? (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  {...('external' in link && link.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  {link.label}
                </a>
              )
            )}
          </nav>
        ))}
      </div>
      <div className={styles.bottom}>
        <p>© {year} Scott McMurray. All rights reserved.</p>
        <p className={styles.signoff}>{signOff}</p>
      </div>
    </footer>
  )
}
