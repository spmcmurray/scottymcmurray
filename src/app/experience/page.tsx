import type { Metadata } from 'next'
import styles from './experience.module.css'
import { LineIcon } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Experience - Scott McMurray',
  description:
    '10+ years at ClarkDietrich, a $1.7B manufacturer: eight years leading enterprise sales, then BI and AI platform work, including a seat on the CEO-sponsored AI Adoption Team.',
  keywords: [
    'Scott McMurray',
    'ClarkDietrich',
    'business intelligence',
    'AI adoption',
    'Microsoft Fabric',
    'Power BI',
    'manufacturing data',
    'sales leadership',
  ],
  openGraph: {
    title: 'Experience - Scott McMurray',
    description:
      'Eight years leading enterprise sales, then hands-on BI and AI platform work at a $1.7B manufacturer.',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: '/experience',
  },
}

const roles = [
  {
    title: 'Business Intelligence Lead',
    dates: 'June 2026 – Present',
    icon: 'chart' as const,
    bullets: [
      'Modernizing enterprise analytics and forecasting on Microsoft Fabric — lakehouse architecture, star schemas, and semantic models serving Finance, Operations, Sales, S&OP, and HR.',
      'Serve on the CEO-sponsored AI Adoption Team: identify and validate AI use cases by embedding with business teams, evaluate tooling (Azure OpenAI, Claude, agentic coding tools), and lead enablement and change management for company-wide rollout.',
    ],
  },
  {
    title: 'Business Intelligence Analyst II',
    dates: 'April 2025 – June 2026',
    icon: 'bot' as const,
    bullets: [
      'Built an internal no-code forecasting tool: a full machine learning platform with a Python backend and user-friendly front end enabling non-technical users to train models, generate predictions, and track accuracy over time.',
      'Developed predictive models for sales forecasting and inventory management using Azure Machine Learning and Power BI; designed and maintained the executive reporting used daily across five business functions.',
    ],
  },
  {
    title: 'Account Executive Team Lead',
    dates: 'December 2019 – March 2025',
    icon: 'target' as const,
    bullets: [
      'Led the inside sales team serving Northeast and Mid-Atlantic regions while managing comprehensive account relationships — sales metrics, pricing, and contract negotiations; consistently achieved monthly and annual sales targets.',
    ],
  },
  {
    title: 'Account Executive',
    dates: 'November 2016 – December 2019',
    icon: 'clipboard' as const,
    bullets: [
      'Managed all aspects of inside sales for assigned accounts: relationship building, pricing administration, large commercial project negotiation, and cross-functional coordination with manufacturing, engineering, and shipping.',
    ],
  },
] as const

const skillGroups = [
  {
    title: 'AI / LLM',
    items: [
      'OpenAI API, Anthropic API',
      'Prompt design, model routing/selection',
      'Retrieval-augmented generation',
      'AI-first development (Claude Code, GitHub Copilot)',
      'Azure OpenAI, Azure Machine Learning',
    ],
  },
  {
    title: 'Data Platform',
    items: [
      'Microsoft Fabric (lakehouse, Dataflows, pipelines)',
      'Power BI, semantic models',
      'Star schema design, DAX, SQL',
      'Predictive modeling',
    ],
  },
  {
    title: 'Engineering',
    items: ['Python', 'TypeScript / JavaScript', 'React Native, Expo', 'Firebase, REST APIs', 'Git / GitHub'],
  },
  {
    title: 'Customer & Program',
    items: [
      'Workflow mapping, use case validation',
      'Executive communication',
      'Enablement workshops',
      'Change management',
    ],
  },
] as const

export default function ExperiencePage() {
  return (
    <main className={`${styles.container} inner-wash`}>
      <section className={styles.hero}>
        <h1>Professional Experience</h1>
        <p className={styles.subtitle}>
          10+ years at ClarkDietrich, a $1.7B manufacturer and North America&rsquo;s largest producer of
          cold-formed steel framing: eight years leading enterprise accounts and a regional sales team,
          then hands-on BI and AI platform work, including a seat on the CEO-sponsored AI Adoption Team.
        </p>
        <p className={styles.value}>Fluent with both C-level sponsors and technical teams, having been on both sides.</p>
      </section>

      <section className={styles.thesis} data-rise>
        <h2>Sales and Data, Together</h2>
        <p>
          Most data and AI people have never owned a number or carried a relationship. Most salespeople have
          never built the system that reports on their own performance. I&rsquo;ve done both — eight years
          managing enterprise accounts and leading a sales team, then building BI platforms and leading AI
          adoption from the inside. That combination is what makes complex stakeholder relationships easier to
          manage: I can sit with a VP of Sales and talk pipeline, then sit with an engineer and talk schema
          design, in the same day.
        </p>
      </section>

      <section className={styles.timeline}>
        <h2 data-rise>ClarkDietrich</h2>
        <div className={styles.roles}>
          {roles.map((role) => (
            <article className={styles.role} key={role.title} data-rise data-lift>
              <div className={styles.roleHead}>
                <h3 className={styles.roleTitle}>
                  <LineIcon name={role.icon} /> {role.title}
                </h3>
                <span className={styles.roleDates}>{role.dates}</span>
              </div>
              <p className={styles.roleCompany}>
                ClarkDietrich — Warren, Ohio — $1.7B manufacturer
              </p>
              <ul className={styles.roleList}>
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className={styles.earlier}>
          Earlier: Marketing Coordinator (promoted from Intern), Cogistix LLC — ERP software implementation
          (SYSPRO, Acumatica) — April 2015 – September 2016
        </p>
      </section>

      <section className={styles.skills}>
        <h2 data-rise>Technical Skills</h2>
        <div className={styles.skillGrid}>
          {skillGroups.map((group) => (
            <div className={styles.skillCard} key={group.title} data-rise data-lift>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.education}>
        <h2 data-rise>Education</h2>
        <div className={styles.eduGrid}>
          <div className={styles.eduCard} data-rise>
            <h3>Graduate Certificate, Data Analytics</h3>
            <p>Youngstown State University — 2023</p>
          </div>
          <div className={styles.eduCard} data-rise>
            <h3>B.S. Business Administration, Marketing</h3>
            <p>Youngstown State University — GPA 3.81 — 2016</p>
          </div>
        </div>
      </section>

      <section className={styles.contact} data-rise>
        <h2>Let&rsquo;s Talk</h2>
        <p>
          Interested in bringing this combination of sales fluency and hands-on BI/AI delivery to your
          business? I&rsquo;d love to hear what you&rsquo;re working on.
        </p>
        <div className={styles.ctaRow}>
          <a href="/work-with-me" className={styles.ctaButton}>
            See How I Can Help
          </a>
          <a
            href="https://www.linkedin.com/in/scottymcmurray/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButtonGhost}
          >
            Connect on LinkedIn
          </a>
        </div>
      </section>
    </main>
  )
}
