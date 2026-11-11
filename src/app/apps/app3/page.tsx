import { Metadata } from 'next'
import styles from '../app.module.css'

export const metadata: Metadata = {
  title: 'RADICAL RUSH - Scott McMurray',
  description: 'A Bop-It style reaction game for iPhone. Six gestures, one mistake, global leaderboards.',
}

export default function AppThreePage() {
  return (
    <div className={`${styles.appPage} inner-wash`}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={`${styles.badge} animate-in`}>iOS Game</div>
            <h1 className={`${styles.title} animate-in animate-in-delay-1`}>RADICAL RUSH</h1>
            <p className={`${styles.subtitle} animate-in animate-in-delay-2`}>
              A Bop-It style reaction game for iPhone. Tap, hold, or swipe the way the screen tells you.
              Miss one and the run is over.
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
            <div className={styles.phoneMockup}>
              <img 
                src="/RADICALRUSH_Screenshot.jpg" 
                alt="RADICAL RUSH game screenshot showing gesture controls"
                className={styles.appScreenshot}
              />
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
              <p>Classic speeds up until you slip. Zen lets you play without the pressure. Six gestures: tap, hold, and swipe up, down, left or right.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚡</div>
              <h3>One mistake ends it</h3>
              <p>The tempo keeps climbing, so every round ends a little differently.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏆</div>
              <h3>Apple GameCenter</h3>
              <p>Global leaderboards and achievements through Game Center, so you can see how you stack up.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📱</div>
              <h3>Haptics</h3>
              <p>You feel every hit and every warning in your hand, so you can play without staring.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>✨</div>
              <h3>Looks the part</h3>
              <p>Bold colors, quick transitions and a few floating particles.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎮</div>
              <h3>Built with Expo</h3>
              <p>React Native and TypeScript under the hood.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.supportSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Need Help?</h2>
          <p className={styles.supportText}>
            Something not working, or an idea for it? Send me a note and I’ll reply myself.
          </p>
          <a href="/support" className={styles.supportButton}>Contact Support</a>
        </div>
      </section>
    </div>
  )
}
