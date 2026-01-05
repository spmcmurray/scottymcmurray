import styles from "./landing.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Small Business Web Development & AI Solutions | Trumbull, Mahoning, Columbiana Counties",
  description: "Custom websites, apps, and AI integration for small businesses in Northeast Ohio. Local web developer serving Trumbull, Mahoning, and Columbiana Counties. Free consultation.",
  keywords: [
    "web development Trumbull County",
    "small business websites Mahoning County",
    "AI integration Columbiana County",
    "custom apps Northeast Ohio",
    "local web developer Ohio",
    "business technology solutions"
  ],
  openGraph: {
    title: "Grow Your Small Business with Modern Tech",
    description: "Custom websites, apps, and AI solutions for local businesses in Trumbull, Mahoning, and Columbiana Counties",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "/landing",
  },
};

export default function LandingPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Scotty McMurray Web Development",
    "description": "Custom web development, applications, and AI integration services for small businesses",
    "areaServed": [
      {
        "@type": "City",
        "name": "Trumbull County",
        "containedInPlace": {
          "@type": "State",
          "name": "Ohio"
        }
      },
      {
        "@type": "City",
        "name": "Mahoning County",
        "containedInPlace": {
          "@type": "State",
          "name": "Ohio"
        }
      },
      {
        "@type": "City",
        "name": "Columbiana County",
        "containedInPlace": {
          "@type": "State",
          "name": "Ohio"
        }
      }
    ],
    "serviceType": [
      "Web Development",
      "Custom Application Development",
      "AI Integration",
      "Website Design"
    ],
    "priceRange": "$$"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className={styles.landingContainer}>
        <section className={styles.hero}>
          <h1>Grow Your Small Business with Modern Tech</h1>
          <p className={styles.subtitle}>
            Websites • Custom Apps • AI Integration
          </p>
          <p className={styles.localFocus}>
            Serving Trumbull, Mahoning, and Columbiana Counties
          </p>
          <a href="#contact" className={styles.ctaButton}>
            Get a Free Consultation
          </a>
        </section>
        <section className={styles.services}>
        <h2>What I Offer</h2>
        <ul>
          <li>
            <strong>Website Design & Development:</strong> Modern, mobile-friendly sites that make your business stand out.
          </li>
          <li>
            <strong>Custom Apps:</strong> Streamline your workflow and engage customers with tailored solutions.
          </li>
          <li>
            <strong>AI Integration:</strong> Automate tasks, gain insights, and boost productivity with the latest AI tools.
          </li>
        </ul>
      </section>
      <section className={styles.localSection}>
        <h2>Local Expertise</h2>
        <p>
          I work directly with businesses in <span className={styles.county}>Trumbull</span>, <span className={styles.county}>Mahoning</span>, and <span className={styles.county}>Columbiana</span> counties. Get personal service from someone who understands your market.
        </p>
      </section>
      <section className={styles.contact} id="contact">
        <h2>Ready to Get Started?</h2>
        <p>
          Let's talk about how technology can help your business grow. Contact me for a free, no-pressure consultation.
        </p>
        <a href="mailto:youremail@example.com" className={styles.ctaButton}>
          Email Me
        </a>
      </section>
      </main>
    </>
  );
}
