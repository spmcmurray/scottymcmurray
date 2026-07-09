import styles from "./work-with-me.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Data & AI Consulting for Manufacturing Businesses",
  description: "Data and AI consulting for mid-market manufacturers: BI reporting, ML forecasting, AI adoption strategy and implementation, and custom AI tooling.",
  keywords: [
    "data consultant",
    "AI consultant",
    "BI consulting",
    "manufacturing AI",
    "ML forecasting",
    "AI adoption strategy",
    "AI adoption implementation",
    "business intelligence consultant"
  ],
  openGraph: {
    title: "Services - Data & AI Consulting for Manufacturing Businesses",
    description: "BI reporting, ML forecasting, and AI adoption systems built for complex manufacturing operations",
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
    "name": "Scott McMurray Data & AI Consulting",
    "description": "BI reporting, ML forecasting, and AI adoption strategy and implementation for complex manufacturing businesses",
    "serviceType": [
      "Business Intelligence Consulting",
      "Machine Learning Forecasting",
      "AI Adoption Strategy",
      "AI Adoption Implementation",
      "Custom Software Development"
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
          <h1>Data & AI Consulting for Complex Manufacturing Businesses</h1>
          <p className={styles.subtitle}>
            BI Systems • ML Forecasting • AI Adoption
          </p>
          <p className={styles.value}>
            Built for mid-market manufacturers who can't yet justify a full-time data hire
          </p>
          <a href="#contact" className={styles.ctaButton}>
            Get a Free Consultation
          </a>
        </section>

        <section className={styles.services} id="services">
          <h2>What I Offer</h2>
          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard}>
              <h3>📊 BI & Reporting Systems</h3>
              <p>
                Dashboards and reporting pipelines built for how manufacturing operations actually
                run — not generic templates bolted onto your ERP.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3>📈 ML Forecasting & Prediction</h3>
              <p>
                Demand, inventory, or production forecasting models designed for adoption,
                not just accuracy on paper.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3>🧭 AI Adoption Strategy</h3>
              <p>
                A practical playbook for rolling out AI tools to teams that have never used
                them — including the change management most consultants skip.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3>⚙️ AI Adoption Implementation</h3>
              <p>
                Hands-on rollout: training teams, embedding tools into daily workflows, and
                making sure adoption actually sticks after the kickoff meeting ends.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3>🤖 No-Code/Low-Code AI Tooling</h3>
              <p>
                AI-powered internal tools your team can actually maintain, without hiring
                a dedicated engineering staff.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.benefits}>
          <h2>Why Work With Me</h2>
          <ul className={styles.benefitsList}>
            <li>
              <strong>I Build, Not Just Advise:</strong> I design the solution and build it myself — forecasting models, dashboards, and AI tools — end to end, not a slide deck handed to your team.
            </li>
            <li>
              <strong>Hands-On Manufacturing Experience:</strong> I've worked inside complex manufacturing operations, so I understand production constraints, not just spreadsheets.
            </li>
            <li>
              <strong>Adoption-First Approach:</strong> A system nobody uses isn't a win. I design for the people who'll actually touch it every day.
            </li>
            <li>
              <strong>Direct Communication:</strong> No agencies or middlemen. You work directly with the person building your solution.
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
              <p>We discuss your data, your goals, and where AI or BI could actually move the needle.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>Custom Proposal</h3>
              <p>I outline exactly what you need, why it matters, and how it impacts your operations.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>Build & Iterate</h3>
              <p>You stay in the loop with regular updates and feedback as the system takes shape.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <h3>Launch & Adopt</h3>
              <p>Go live, with hands-on support to make sure your team actually adopts it — not just installs it.</p>
            </div>
          </div>
        </section>

        <section className={styles.contact} id="contact">
          <h2>Ready to Turn Data Into Decisions?</h2>
          <p>
            Let's talk about how BI and AI can drive real results for your manufacturing business.
            The first consultation is completely free.
          </p>
          <a href="mailto:scottymcmurray@gmail.com" className={styles.ctaButton}>
            Schedule Your Free Call
          </a>
        </section>
      </main>
    </>
  );
}
