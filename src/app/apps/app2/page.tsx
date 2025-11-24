import { Metadata } from 'next'
import styles from '../app.module.css'

export const metadata: Metadata = {
  title: 'Church Explorer - Scott McMurray',
  description: 'AI-powered microlearning for Christian church history and theology.',
}

export default function AppTwoPage() {
  return (
    <div className={styles.appPage}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={`${styles.badge} animate-in`}>Web App</div>
            <h1 className={`${styles.title} animate-in animate-in-delay-1`}>Church Explorer</h1>
            <p className={`${styles.subtitle} animate-in animate-in-delay-2`}>
              Learn Christian church history and theology in bite-sized lessons powered by AI.
              Deepen your faith through daily microlearning that fits your schedule.
            </p>
            <div className={`${styles.buttons} animate-in animate-in-delay-3`}>
              <a href="https://churchexplorer.org" target="_blank" rel="noopener noreferrer" className={styles.downloadButton}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1.66667 10H18.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 1.66667C12.0844 3.94863 13.269 6.91003 13.3333 10C13.269 13.09 12.0844 16.0514 10 18.3333C7.91561 16.0514 6.73104 13.09 6.66667 10C6.73104 6.91003 7.91561 3.94863 10 1.66667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Visit churchexplorer.org
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
                <div className={styles.browserUrl}>churchexplorer.org</div>
              </div>
              <img 
                src="/churchexplorer_screenshot.png" 
                alt="Church Explorer web app screenshot"
                className={styles.browserScreenshot}
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
              <div className={styles.featureIcon}>🤖</div>
              <h3>AI-Powered Learning</h3>
              <p>Interactive lessons that adapt to your questions and curiosity using advanced AI.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⏰</div>
              <h3>Microlearning Format</h3>
              <p>Short, focused lessons that fit into your daily routine. Learn in just a few minutes.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📚</div>
              <h3>Church History & Theology</h3>
              <p>Explore centuries of Christian tradition, from early church to modern movements.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💬</div>
              <h3>Ask Questions</h3>
              <p>Curious about something? Ask questions and get thoughtful, informed responses.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📖</div>
              <h3>Biblical Context</h3>
              <p>Learn how theology developed alongside scripture and historical events.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🌱</div>
              <h3>Grow Your Faith</h3>
              <p>Build a deeper understanding of Christian beliefs and practices over time.</p>
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
