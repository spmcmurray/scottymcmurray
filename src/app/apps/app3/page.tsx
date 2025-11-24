import { Metadata } from 'next'
import styles from '../app.module.css'

export const metadata: Metadata = {
  title: 'RADICAL RUSH - Scott McMurray',
  description: 'A fast-paced Bop-It style gesture game with global leaderboards.',
}

export default function AppThreePage() {
  return (
    <div className={styles.appPage}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={`${styles.badge} animate-in`}>iOS Game</div>
            <h1 className={`${styles.title} animate-in animate-in-delay-1`}>RADICAL RUSH</h1>
            <p className={`${styles.subtitle} animate-in animate-in-delay-2`}>
              An insanely fun reaction game built with React Native and Expo.
              Master six gesture types with one-mistake intensity—tap, hold, and swipe your way to the top!
            </p>
            <div className={`${styles.buttons} animate-in animate-in-delay-3`}>
              <a href="#" className={styles.downloadButton}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M14.1667 1.66663H5.83333C4.91286 1.66663 4.16667 2.41282 4.16667 3.33329V16.6666C4.16667 17.5871 4.91286 18.3333 5.83333 18.3333H14.1667C15.0871 18.3333 15.8333 17.5871 15.8333 16.6666V3.33329C15.8333 2.41282 15.0871 1.66663 14.1667 1.66663Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <path d="M10 15H10.0083" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
                Download on App Store
              </a>
              <a href="#features" className={styles.learnButton}>Learn More</a>
            </div>
          </div>
          <div className={`${styles.heroImage} animate-in animate-in-delay-2`}>
            <div className={styles.browserMockup}>
              <div className={styles.browserChrome}>
                <div className={styles.browserDots}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className={styles.browserContent}></div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Features</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎯</div>
              <h3>Classic & Zen Modes</h3>
              <p>Fast-paced Classic mode or relaxed Zen mode. Six gesture types: tap, hold, swipe up, down, left, right.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚡</div>
              <h3>One-Mistake Intensity</h3>
              <p>One mistake ends the run. Accelerating tempo keeps you sharp and focused.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏆</div>
              <h3>Apple GameCenter</h3>
              <p>Global leaderboards and achievements via GameCenter integration. Compete worldwide!</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📱</div>
              <h3>Haptic Feedback</h3>
              <p>Feel every correct move and alert with responsive haptic feedback.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>✨</div>
              <h3>Beautiful UI</h3>
              <p>Motion R branding, smooth transitions, and floating particle effects.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎮</div>
              <h3>Built with React Native</h3>
              <p>Cross-platform development using Expo, TypeScript, and modern mobile best practices.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.supportSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Need Help?</h2>
          <p className={styles.supportText}>
            I'm here to help with any questions or issues you might have.
          </p>
          <a href="/support" className={styles.supportButton}>Contact Support</a>
        </div>
      </section>
    </div>
  )
}
