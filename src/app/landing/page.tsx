import { Metadata } from 'next'
import styles from "./landing.module.css";

export const metadata: Metadata = {
  title: 'AI-Powered Apps & Websites for Ohio Local Businesses | Scott McMurray',
  description: 'Custom AI-powered websites and applications for small businesses in Trumbull, Mahoning & Columbiana Counties. Local Ohio developer specializing in modern web development, custom apps, and AI integration.',
  keywords: [
    'Ohio web developer',
    'local business websites',
    'AI integration services',
    'custom app development',
    'Trumbull County web design',
    'Mahoning County developer',
    'Columbiana County apps',
    'small business technology',
    'Northeast Ohio developer',
    'AI-powered business solutions',
    'custom web applications',
    'local software developer',
  ],
  authors: [{ name: 'Scott McMurray' }],
  openGraph: {
    title: 'AI-Powered Apps & Websites for Local Businesses | Scott McMurray',
    description: 'Custom digital solutions designed to grow your business. Local Ohio developer serving Trumbull, Mahoning & Columbiana Counties with AI-powered websites and custom applications.',
    url: 'https://scottymcmurray.com/landing',
    siteName: 'Scott McMurray',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: 'https://scottymcmurray.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Scott McMurray - AI-Powered Business Solutions',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Powered Apps & Websites for Local Businesses',
    description: 'Custom digital solutions for small businesses in Northeast Ohio. Modern web development, custom apps, and AI integration.',
  },
  alternates: {
    canonical: 'https://scottymcmurray.com/landing',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function LandingPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://scottymcmurray.com/#localbusiness",
        "name": "Scott McMurray - Web & App Development",
        "image": "https://scottymcmurray.com/og-image.jpg",
        "url": "https://scottymcmurray.com/landing",
        "telephone": "",
        "email": "scottymcmurray@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "OH",
          "addressCountry": "US",
          "areaServed": [
            {
              "@type": "City",
              "name": "Trumbull County"
            },
            {
              "@type": "City",
              "name": "Mahoning County"
            },
            {
              "@type": "City",
              "name": "Columbiana County"
            }
          ]
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "41.0955",
          "longitude": "-80.6495"
        },
        "priceRange": "$$",
        "description": "Custom AI-powered websites and applications for small businesses in Northeast Ohio. Local developer specializing in modern web development, custom apps, and AI integration.",
        "sameAs": [
          "https://scottymcmurray.com"
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://scottymcmurray.com/#service",
        "serviceType": "Web Development & AI Integration",
        "provider": {
          "@id": "https://scottymcmurray.com/#localbusiness"
        },
        "areaServed": {
          "@type": "State",
          "name": "Ohio"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Digital Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Modern Website Development",
                "description": "Mobile-first, fast-loading sites that convert visitors into customers. SEO-optimized and built to reflect your brand."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Application Development",
                "description": "Tailored apps that streamline your operations, engage customers, and solve your specific business challenges."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI Integration Services",
                "description": "Automate workflows, personalize customer experiences, and unlock insights with AI that works for your business."
              }
            }
          ]
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://scottymcmurray.com/landing#webpage",
        "url": "https://scottymcmurray.com/landing",
        "name": "AI-Powered Apps & Websites for Ohio Local Businesses",
        "description": "Custom AI-powered websites and applications for small businesses in Trumbull, Mahoning & Columbiana Counties. Local Ohio developer specializing in modern web development, custom apps, and AI integration.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://scottymcmurray.com/#website",
          "url": "https://scottymcmurray.com",
          "name": "Scott McMurray"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
              <svg className={styles.solutionIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              <h3>Modern Websites</h3>
              <p>
                Mobile-first, fast-loading sites that convert visitors into customers. 
                SEO-optimized and built to reflect your brand.
              </p>
            </div>
            <div className={styles.solutionCard}>
              <svg className={styles.solutionIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
              </svg>
              <h3>Custom Applications</h3>
              <p>
                Tailored apps that streamline your operations, engage customers, and solve your specific business challenges.
              </p>
            </div>
            <div className={styles.solutionCard}>
              <svg className={styles.solutionIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15 10 23 12 15 14 12 22 9 14 1 12 9 10 12 2"/>
                <path d="M5 3L7 7" opacity="0.6"/>
                <path d="M19 3L17 7" opacity="0.6"/>
                <path d="M5 21L7 17" opacity="0.6"/>
                <path d="M19 21L17 17" opacity="0.6"/>
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
