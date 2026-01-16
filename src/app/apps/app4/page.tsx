import { Metadata } from 'next'
import styles from '../app.module.css'

export const metadata: Metadata = {
  title: 'Nexus AI - Scott McMurray',
  description: 'Unified LLM interface for seamless interaction with multiple AI models.',
}

export default function AppFourPage() {
  return (
    <div className={styles.appPage}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={`${styles.badge} animate-in`}>Web App</div>
            <h1 className={`${styles.title} animate-in animate-in-delay-1`}>Nexus AI</h1>
            <p className={`${styles.subtitle} animate-in animate-in-delay-2`}>
              A unified interface for interacting with multiple large language models.
              Switch between different AI models seamlessly in one clean, powerful interface.
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
                src="/nexusai_screenshot.png" 
                alt="Nexus AI web app screenshot"
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
              <h3>Multiple LLM Support</h3>
              <p>Access ChatGPT, Claude, Gemini, and Grok—all from a single unified interface.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔄</div>
              <h3>Seamless Switching</h3>
              <p>Switch between different AI models instantly to compare responses and find the best solution.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💬</div>
              <h3>Unified Chat Interface</h3>
              <p>One clean, intuitive chat interface for all your AI interactions. No context switching needed.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🌐</div>
              <h3>Web-Based</h3>
              <p>Access your AI conversations from any device with a browser. No installation required.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚡</div>
              <h3>Fast & Responsive</h3>
              <p>Built with modern web technologies for a smooth, lag-free experience.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎯</div>
              <h3>Streamlined Workflow</h3>
              <p>Save time by managing all your AI interactions in one place instead of juggling multiple platforms.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.ctaSection}`}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Ready to unify your AI workflow?</h2>
          <p className={styles.ctaDescription}>
            Start using multiple AI models from one powerful interface
          </p>
          <a href="https://getnexus.us" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
            Try Nexus AI Now
          </a>
        </div>
      </section>
    </div>
  )
}
