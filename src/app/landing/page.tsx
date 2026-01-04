import styles from "./landing.module.css";

export default function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              AI-Powered Apps & Websites for <span className={styles.highlight}>Your Local Business</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Custom digital solutions designed to grow your business. 
              Built locally. Powered by AI. Focused on <strong>real results</strong>.
            </p>
            <div className={styles.heroActions}>
              <a href="#contact" className={styles.ctaPrimary}>
                Get a Free Strategy Call
              </a>
              <a href="#solutions" className={styles.ctaSecondary}>
                See What's Possible
              </a>
            </div>
            <p className={styles.localBadge}>
              Serving Trumbull, Mahoning & Columbiana Counties
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>What I Build</h2>
            <p className={styles.sectionDescription}>
              Every business is unique. Your digital solution should be too. Here's what I create:
            </p>
          </div>

          <div className={styles.solutionsGrid}>
            <div className={styles.solutionCard}>
              <svg className={styles.solutionIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                <path d="M12 6v6m0 0v6" strokeWidth="2" strokeLinecap="round"/>
                <path d="M6 12h6m0 0h6" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <h3>Modern Websites</h3>
              <p>
                Mobile-first, fast-loading sites that convert visitors into customers. 
                SEO-optimized and built to reflect your brand.
              </p>
            </div>
            <div className={styles.solutionCard}>
              <svg className={styles.solutionIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2"/>
                <path d="M3 9h18M9 3v18" strokeWidth="2"/>
              </svg>
              <h3>Custom Applications</h3>
              <p>
                Tailored apps that streamline your operations, engage customers, and solve your specific business challenges.
              </p>
            </div>
            <div className={styles.solutionCard}>
              <svg className={styles.solutionIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" opacity="0.2"/>
              </svg>
              <h3>AI Integration</h3>
              <p>
                Automate workflows, personalize customer experiences, and unlock insights. 
                AI that works for your business, not against it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefits}>
        <div className={styles.container}>
          <div className={styles.benefitsContent}>
            <h2>Why Choose a Local Developer?</h2>
            <div className={styles.benefitsList}>
              <div className={styles.benefitItem}>
                <span className={styles.benefitNumber}>✓</span>
                <div>
                  <h4>Direct Communication</h4>
                  <p>No agencies. No middlemen. You talk directly with the person building your solution.</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitNumber}>✓</span>
                <div>
                  <h4>Understanding Your Market</h4>
                  <p>I know the local business landscape. What works for big cities may not work for your community—I get that.</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitNumber}>✓</span>
                <div>
                  <h4>Ongoing Support</h4>
                  <p>Your success is my success. I stick around to help your business grow with technology.</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitNumber}>✓</span>
                <div>
                  <h4>AI-First Approach</h4>
                  <p>Built with modern practices and cutting-edge tools to deliver more value faster.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={styles.process}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>How It Works</h2>
          </div>

          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h4>Free Strategy Call</h4>
              <p>We discuss your goals, challenges, and what success looks like for your business.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h4>Custom Proposal</h4>
              <p>I outline exactly what you need, why, and how it'll impact your bottom line.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h4>Build & Iterate</h4>
              <p>You stay in the loop. Regular updates, feedback loops, and continuous improvement.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <h4>Launch & Grow</h4>
              <p>Go live and watch your business transform. Ongoing support keeps you ahead.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.contact} id="contact">
        <div className={styles.container}>
          <div className={styles.contactContent}>
            <h2>Ready to Transform Your Business?</h2>
            <p>
              Let's talk about how custom technology and AI can help you stand out, 
              streamline operations, and drive growth. The first consultation is free.
            </p>
            <div className={styles.contactActions}>
              <a href="mailto:scottymcmurray@gmail.com" className={styles.ctaPrimary}>
                Schedule Your Free Call
              </a>
            </div>
            <p className={styles.contactMeta}>
              Serving small businesses throughout the region. Proven track record in AI, custom apps, and web development.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
