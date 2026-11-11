import { Metadata } from 'next'
import styles from '../app.module.css'

export const metadata: Metadata = {
  title: 'Nexus AI - Scott McMurray',
  description: 'ChatGPT, Claude, Gemini and Grok in one chat window.',
}

export default function AppFourPage() {
  return (
    <div className={`${styles.appPage} inner-wash`}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={`${styles.badge} animate-in`}>Web App</div>
            <h1 className={`${styles.title} animate-in animate-in-delay-1`}>Nexus AI</h1>
            <p className={`${styles.subtitle} animate-in animate-in-delay-2`}>
              ChatGPT, Claude, Gemini and Grok in one chat window.
              Ask the same question to each and see who answers it best.
            </p>
            <div className={`${styles.buttons} animate-in animate-in-delay-3`}>
              <a href="https://getnexus.us" target="_blank" rel="noopener noreferrer" className={styles.downloadButton}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1.66667 10H18.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 1.66667C12.0844 3.94863 13.269 6.91003 13.3333 10C13.269 13.09 12.0844 16.0514 10 18.3333C7.91561 16.0514 6.73104 13.09 6.66667 10C6.73104 6.91003 7.91561 3.94863 10 1.66667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Visit getnexus.us
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
                <div className={styles.browserUrl}>getnexus.us</div>
              </div>
              <img 
                src="/afterglow/nexus-chat.jpg" 
                alt="Nexus AI chat answering a question about quantum physics. The account sidebar is not shown."
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
              <h3>Four models</h3>
              <p>ChatGPT, Claude, Gemini and Grok, side by side in one place.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔄</div>
              <h3>Switch mid-chat</h3>
              <p>Not happy with an answer? Try another model without starting over.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💬</div>
              <h3>One window</h3>
              <p>The same layout every time, whichever model you’re talking to.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🌐</div>
              <h3>Web-Based</h3>
              <p>Open it in any browser, on your phone or your laptop. Nothing to install.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚡</div>
              <h3>Quick</h3>
              <p>It loads fast and stays out of the way while you type.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎯</div>
              <h3>Fewer tabs</h3>
              <p>Stop bouncing between four sites to compare answers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.ctaSection}`}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Tired of juggling four AI tabs?</h2>
          <p className={styles.ctaDescription}>
            Try them all from one window.
          </p>
          <a href="https://getnexus.us" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
            Open Nexus AI
          </a>
        </div>
      </section>
    </div>
  )
}
