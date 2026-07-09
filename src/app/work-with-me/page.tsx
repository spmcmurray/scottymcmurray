import styles from "./work-with-me.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work With Me - Custom Web Development & AI Solutions for Small Business",
  description: "Partner with an experienced developer to build custom websites, applications, and AI solutions for your small business. Get modern technology that drives real results.",
  keywords: [
    "custom web development",
    "small business websites",
    "AI integration services",
    "custom application development",
    "business technology consultant",
    "freelance web developer"
  ],
  openGraph: {
    title: "Work With Me - Transform Your Business with Modern Technology",
    description: "Custom websites, apps, and AI solutions built specifically for your small business needs",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "/work-with-me",
  },
};

export default function WorkWithMePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Scotty McMurray Web Development",
    "description": "Custom web development, applications, and AI integration services for small businesses",
    "serviceType": [
      "Web Development",
      "Custom Application Development",
      "AI Integration",
      "Website Design",
      "Technology Consulting"
    ],
    "priceRange": "$$"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className={styles.container}>
        <section className={styles.hero}>
          <h1>Transform Your Business with Modern Technology</h1>
          <p className={styles.subtitle}>
            Websites • Custom Apps • AI Integration
          </p>
          <p className={styles.value}>
            Built for small businesses that want to compete in the digital age
          </p>
          <a href="#contact" className={styles.ctaButton}>
            Get a Free Consultation
          </a>
        </section>

        <section className={styles.services}>
          <h2>What I Build</h2>
          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard}>
              <h3>🌐 Website Design & Development</h3>
              <p>
                Modern, mobile-friendly websites that convert visitors into customers. 
                Fast-loading, SEO-optimized, and built to reflect your unique brand identity.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3>⚡ Custom Applications</h3>
              <p>
                Tailored software solutions that streamline your operations and engage customers. 
                From inventory management to customer portals—built exactly for your needs.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3>🤖 AI Integration</h3>
              <p>
                Leverage AI to automate repetitive tasks, personalize customer experiences, 
                and unlock data-driven insights that help you make smarter decisions.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.benefits}>
          <h2>Why Work With Me</h2>
          <ul className={styles.benefitsList}>
            <li>
              <strong>Direct Communication:</strong> No agencies or middlemen. You work directly with the developer building your solution.
            </li>
            <li>
              <strong>Custom-Built Solutions:</strong> Every project is tailored to your specific business needs and goals.
            </li>
            <li>
              <strong>Modern Technology:</strong> Built with the latest tools and best practices to ensure performance and scalability.
            </li>
            <li>
              <strong>Ongoing Support:</strong> I'm here to help your business grow and adapt as your technology needs evolve.
            </li>
            <li>
              <strong>Transparent Process:</strong> Regular updates, clear communication, and no surprises on timeline or budget.
            </li>
          </ul>
        </section>

        <section className={styles.process}>
          <h2>How It Works</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3>Free Strategy Call</h3>
              <p>We discuss your goals, challenges, and what success looks like for your business.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>Custom Proposal</h3>
              <p>I outline exactly what you need, why, and how it will impact your bottom line.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>Build & Iterate</h3>
              <p>You stay in the loop with regular updates, feedback opportunities, and continuous improvement.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <h3>Launch & Grow</h3>
              <p>Go live with your new solution. I provide ongoing support to ensure continued success.</p>
            </div>
          </div>
        </section>

        <section className={styles.contact} id="contact">
          <h2>Ready to Get Started?</h2>
          <p>
            Let's talk about how modern technology can help your business stand out, 
            streamline operations, and drive growth. The first consultation is completely free.
          </p>
          <a href="mailto:scottymcmurray@gmail.com" className={styles.ctaButton}>
            Schedule Your Free Call
          </a>
        </section>
      </main>
    </>
  );
}
