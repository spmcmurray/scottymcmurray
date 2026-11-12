import { Metadata } from 'next'
import { LineIcon } from '@/components/Icons'
import styles from '../app.module.css'

export const metadata: Metadata = {
  title: 'TENFOLD - Scott McMurray',
  description: 'A ten-minute, no-equipment workout for iPhone, with training plans, streaks and a Strength Score.',
}

export default function AppOnePage() {
  return (
    <div className={`${styles.appPage} inner-wash`}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <img
              src="/afterglow/icon-tenfold.png"
              alt="TENFOLD app icon: a white 10 on a teal and sand gradient"
              className={`${styles.appIcon} animate-in`}
              width={72}
              height={72}
            />
            <div className={`${styles.badge} animate-in`}>iOS App</div>
            <h1 className={`${styles.title} animate-in animate-in-delay-1`}>TENFOLD</h1>
            <p className={`${styles.subtitle} animate-in animate-in-delay-2`}>
              A workout that takes ten minutes and needs no equipment. Warm up, then upper body,
              lower body and core, in your living room or a hotel room.
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
            <div className={styles.phoneFrame}>
              <img 
                src="/TENFOLD_Screenshot.jpg" 
                alt="TENFOLD workout screen: Jump Step Jump in the warmup, with an exercise demo, countdown timer and pause button"
                className={styles.appScreenshot}
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
              <div className={styles.featureIcon}><LineIcon name="timer" /></div>
              <h3>Ten minutes</h3>
              <p>Warmup, upper body, lower body and core, timed so the whole thing fits before your shower.</p>
            </div>
            <div className={styles.featureCard} data-rise data-lift>
              <div className={styles.featureIcon}><LineIcon name="home" /></div>
              <h3>No equipment</h3>
              <p>Bodyweight only, so you can do it anywhere you have a few feet of floor.</p>
            </div>
            <div className={styles.featureCard} data-rise data-lift>
              <div className={styles.featureIcon}><LineIcon name="clipboard" /></div>
              <h3>Training plans</h3>
              <p>Follow a plan week by week, and add the days to your calendar so they don’t slip.</p>
            </div>
            <div className={styles.featureCard} data-rise data-lift>
              <div className={styles.featureIcon}><LineIcon name="chart" /></div>
              <h3>Strength Score</h3>
              <p>Run a quick benchmark now and then and watch your Strength Score move.</p>
            </div>
            <div className={styles.featureCard} data-rise data-lift>
              <div className={styles.featureIcon}><LineIcon name="zap" /></div>
              <h3>Streaks and history</h3>
              <p>See what you’ve done, which days you missed, and a small celebration when you finish a plan week.</p>
            </div>
            <div className={styles.featureCard} data-rise data-lift>
              <div className={styles.featureIcon}><LineIcon name="person" /></div>
              <h3>Apple Health</h3>
              <p>Finished workouts can be saved to Apple Health. TENFOLD never reads your Health records.</p>
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
