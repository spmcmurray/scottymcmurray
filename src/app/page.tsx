import styles from './page.module.css'
import AppCard from '@/components/AppCard'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={`${styles.heroTitle} animate-in`}>
              Simple apps for a <span className={styles.highlight}>simpler life</span>
            </h1>
            <p className={`${styles.heroSubtitle} animate-in animate-in-delay-1`}>
              I'm <strong>Scott McMurray</strong>, a self-taught developer from Ohio building a portfolio of apps that add value to people's lives, without the addictive algorithms of big tech. 
              Husband, father, and creator of simple, thoughtful applications.
            </p>
            <div className={`${styles.heroActions} animate-in animate-in-delay-2`}>
              <a href="#apps" className={styles.ctaPrimary}>Explore My Apps</a>
              <a href="#about" className={styles.ctaSecondary}>Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section id="apps" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>My Applications</h2>
            <p className={styles.sectionDescription}>
              Each app is designed with intention—whether it's removing complexity to help you focus, or adding a spark of joy to make your day more fun.
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
                Based in <strong>Ohio</strong>, I'm a self-taught developer with a unique perspective on building software. 
                As a husband and father, I understand the value of time—and the importance of building things that create real value.
              </p>
              <p className={styles.aboutText}>
                My approach combines <strong>business thinking with technical execution</strong>. I see problems through 
                the lens of user needs and practical value, not just technical solutions. I build apps that people 
                actually want to use, whether it's a fitness tool, a learning platform, or a fun game.
              </p>
              <p className={styles.aboutText}>
                I embrace <strong>AI-first development practices</strong>, leveraging modern tools to build 
                faster and smarter. This allows me to focus on creating profitable apps that solve real problems.
              </p>
            </div>

            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>3</div>
                <div className={styles.statLabel}>Apps in Portfolio</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>100%</div>
                <div className={styles.statLabel}>Self-Taught</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>1</div>
                <div className={styles.statLabel}>Mission</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Get in Touch</h2>
            <p className={styles.ctaText}>
              Questions about my apps? Want to connect? Feel free to reach out.
            </p>
            <a href="/support" className={styles.ctaPrimary}>Contact Me</a>
          </div>
        </div>
      </section>
    </>
  )
}
