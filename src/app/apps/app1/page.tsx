import { Metadata } from 'next'
import styles from '../app.module.css'

export const metadata: Metadata = {
  title: 'App One - Scott McMurray',
  description: 'A beautiful iOS application designed to simplify your daily routine.',
}

export default function AppOnePage() {
  return (
    <div className={styles.appPage}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={`${styles.badge} animate-in`}>iOS App</div>
            <h1 className={`${styles.title} animate-in animate-in-delay-1`}>TENFOLD</h1>
            <p className={`${styles.subtitle} animate-in animate-in-delay-2`}>
              Cross-platform workout app built with Expo and TypeScript. 
              10-minute workouts, no equipment needed—just quick, effective exercises you can do anywhere.
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
              <div className={styles.phoneScreen}></div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Features</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⏱️</div>
              <h3>Just 10 Minutes</h3>
              <p>Quick, effective workouts designed to fit into any schedule. No more excuses.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏠</div>
              <h3>No Equipment Needed</h3>
              <p>All exercises use just your bodyweight. Work out anywhere, anytime.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📱</div>
              <h3>Cross-Platform</h3>
              <p>Built with Expo for iOS, Android, and web. File-based routing with Expo Router.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📊</div>
              <h3>Track Progress</h3>
              <p>See your workout streak and stay motivated with simple progress tracking.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚙️</div>
              <h3>Modern Tech Stack</h3>
              <p>TypeScript, React Native, and Xcode Cloud CI/CD for streamlined deployment.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💪</div>
              <h3>All Fitness Levels</h3>
              <p>Workouts are designed for everyone, whether you're just starting or staying active.</p>
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
