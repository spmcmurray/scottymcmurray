import { Metadata } from 'next'
import { LineIcon } from '@/components/Icons'
import styles from '../app.module.css'

export const metadata: Metadata = {
  title: 'Church Explorer - Scott McMurray',
  description: 'Short lessons on Christian church history and theology, with AI to answer your questions.',
}

export default function AppTwoPage() {
  return (
    <div className={`${styles.appPage} inner-wash`}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={`${styles.badge} animate-in`}>Web App</div>
            <h1 className={`${styles.title} animate-in animate-in-delay-1`}>Church Explorer</h1>
            <p className={`${styles.subtitle} animate-in animate-in-delay-2`}>
              Short lessons on Christian church history and theology, powered by AI.
              Each one takes a few minutes, so it fits in a lunch break.
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
          <h2 className={styles.sectionTitle} data-rise>Features</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard} data-rise data-lift>
              <div className={styles.featureIcon}><LineIcon name="bot" /></div>
              <h3>Lessons that answer back</h3>
              <p>Get stuck on something and ask. The lesson picks up from your question.</p>
            </div>
            <div className={styles.featureCard} data-rise data-lift>
              <div className={styles.featureIcon}><LineIcon name="clock" /></div>
              <h3>A few minutes at a time</h3>
              <p>One topic per lesson, so you can finish it before your coffee gets cold.</p>
            </div>
            <div className={styles.featureCard} data-rise data-lift>
              <div className={styles.featureIcon}><LineIcon name="books" /></div>
              <h3>Church History & Theology</h3>
              <p>From the early church through the Reformation and into the present day.</p>
            </div>
            <div className={styles.featureCard} data-rise data-lift>
              <div className={styles.featureIcon}><LineIcon name="message" /></div>
              <h3>Ask anything</h3>
              <p>Wondering why a council met, or what a word meant back then? Just ask.</p>
            </div>
            <div className={styles.featureCard} data-rise data-lift>
              <div className={styles.featureIcon}><LineIcon name="book" /></div>
              <h3>Scripture in context</h3>
              <p>See how doctrine took shape alongside scripture and the events around it.</p>
            </div>
            <div className={styles.featureCard} data-rise data-lift>
              <div className={styles.featureIcon}><LineIcon name="sprout" /></div>
              <h3>It adds up</h3>
              <p>A little each day gets you a much better picture of what Christians believe and why.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.supportSection} data-rise>
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
