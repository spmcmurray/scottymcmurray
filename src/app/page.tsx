import styles from './page.module.css'
import AppCard from '@/components/AppCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Scott McMurray - Data & AI Consultant for Manufacturing',
  description: 'Data and AI consultant helping complex manufacturing businesses build BI reporting, ML forecasting, and AI adoption systems that operations teams actually use.',
  keywords: [
    'data consultant',
    'AI consultant',
    'BI consulting',
    'manufacturing AI',
    'ML forecasting',
    'AI adoption',
    'Scott McMurray'
  ],
  openGraph: {
    title: 'Scott McMurray - Data & AI Consultant for Manufacturing',
    description: 'I help complex manufacturing businesses turn scattered data into production BI and AI systems.',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={`${styles.heroTitle} animate-in`}>
              Data & AI consulting for <span className={styles.highlight}>complex manufacturing</span> businesses
            </h1>
            <p className={`${styles.heroSubtitle} animate-in animate-in-delay-1`}>
              I'm <strong>Scott McMurray</strong>. I bring hands-on BI and AI experience from complex manufacturing operations to businesses that can't yet justify a full-time hire for it.
            </p>
            <div className={`${styles.heroActions} animate-in animate-in-delay-2`}>
              <a href="/work-with-me" className={styles.ctaPrimary}>View Services</a>
              <a href="#apps" className={styles.ctaSecondary}>See My Work</a>
            </div>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section id="apps" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Proof of Work</h2>
            <p className={styles.sectionDescription}>
              Evidence I ship production software independently, start to finish — including an AI-powered product.
            </p>
          </div>

          <div className={styles.appsGrid}>
            <AppCard
              title="TENFOLD"
              description="Cross-platform workout app. 10-minute bodyweight exercises built with Expo and TypeScript."
              platform="iOS"
              href="/apps/app1"
              gradient="linear-gradient(135deg, #ff6b35 0%, #f4a261 100%)"
            />
            <AppCard
              title="Church Explorer"
              description="AI-powered microlearning for Christian church history and theology. Deepen your faith daily."
              platform="Web"
              href="/apps/app2"
              gradient="linear-gradient(135deg, #2a9d8f 0%, #264653 100%)"
            />
            <AppCard
              title="RADICAL RUSH"
              description="Insanely fun reaction game with six gesture types. One-mistake intensity built with React Native and Expo."
              platform="iOS"
              href="/apps/app3"
              gradient="linear-gradient(135deg, #e76f51 0%, #e9c46a 100%)"
            />
            <AppCard
              title="Nexus AI"
              description="Unified LLM interface for seamless interaction with multiple AI models. Switch between ChatGPT, Claude, Gemini, and Grok."
              platform="Web"
              href="/apps/app4"
              gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutContent}>
              <h2 className={styles.sectionTitle}>About Me</h2>
              <p className={styles.aboutText}>
                I'm a <strong>data and AI consultant</strong> with hands-on experience building BI reporting and
                machine learning systems inside complex manufacturing operations. I specialize in closing the gap
                between "we have the data but no insight" and production systems that operations teams actually use.
              </p>
              <p className={styles.aboutText}>
                I'm not a strategy consultant who hands you a slide deck and leaves, and I'm not a dev shop that
                builds without understanding your business. I design the solution and <strong>build it myself</strong> —
                forecasting models, adoption-ready dashboards, and AI tooling — end to end.
              </p>
              <p className={styles.aboutText}>
                I also build software independently. Nexus AI, TENFOLD, and Church Explorer are proof I ship
                production apps solo, start to finish — the same hands-on approach I bring to every engagement.
              </p>
            </div>

            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>4</div>
                <div className={styles.statLabel}>Apps Shipped Independently</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>5</div>
                <div className={styles.statLabel}>Service Areas</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>100%</div>
                <div className={styles.statLabel}>Self-Taught</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Turn Data Into Decisions?</h2>
            <p className={styles.ctaText}>
              Let's talk about how BI and AI can drive real results for your manufacturing business.
            </p>
            <a href="/work-with-me" className={styles.ctaPrimary}>Get in Touch</a>
          </div>
        </div>
      </section>
    </>
  )
}
