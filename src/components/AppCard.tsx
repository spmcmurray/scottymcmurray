import Link from 'next/link'
import styles from './AppCard.module.css'

interface AppCardProps {
  title: string
  description: string
  platform: 'iOS' | 'Web'
  href: string
  gradient: string
}

export default function AppCard({ title, description, platform, href, gradient }: AppCardProps) {
  return (
    <Link href={href} className={styles.card}>
      <div className={styles.cardGradient} style={{ background: gradient }}></div>
      <div className={styles.cardContent}>
        <div className={styles.platformBadge}>{platform}</div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <div className={styles.cardArrow}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </Link>
  )
}
