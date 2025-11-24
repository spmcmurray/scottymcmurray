import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.section}>
            <h3 className={styles.heading}>Scott McMurray</h3>
            <p className={styles.tagline}>Simple apps for a simpler life</p>
            <p className={styles.location}>Ohio, USA</p>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Apps</h4>
            <nav className={styles.links}>
              <Link href="/apps/app1" className={styles.link}>TENFOLD</Link>
              <Link href="/apps/app2" className={styles.link}>Church Explorer</Link>
              <Link href="/apps/app3" className={styles.link}>RADICAL RUSH</Link>
            </nav>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Legal</h4>
            <nav className={styles.links}>
              <Link href="/privacy" className={styles.link}>Privacy Policy</Link>
              <Link href="/terms" className={styles.link}>Terms of Service</Link>
              <Link href="/support" className={styles.link}>Support</Link>
            </nav>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Connect</h4>
            <nav className={styles.links}>
              <a href="mailto:scottymcmurray@gmail.com" className={styles.link}>Email</a>
              <a href="https://github.com/spmcmurray" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
            </nav>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Scott McMurray. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
