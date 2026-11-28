import type { Metadata } from 'next'
import styles from './experience.module.css'
import { LineIcon } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Experience - Scott McMurray',
  description:
    'How a sales background turned into building BI and agentic AI platforms inside complex manufacturing operations — in my own words.',
  keywords: [
    'Scott McMurray',
    'business intelligence',
    'agentic analytics',
    'semantic layer',
    'AI adoption',
    'Microsoft Fabric',
    'Power BI',
    'manufacturing data',
  ],
  openGraph: {
    title: 'Experience - Scott McMurray',
    description:
      'How a sales background turned into building BI and agentic AI platforms inside complex manufacturing operations.',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: '/experience',
  },
}

const timeline = [
  { title: 'Business Intelligence Lead', dates: 'June 2026 – Present', icon: 'chart' as const },
  { title: 'Business Intelligence Analyst II', dates: 'April 2025 – June 2026', icon: 'bot' as const },
  { title: 'Account Executive Team Lead', dates: 'December 2019 – March 2025', icon: 'target' as const },
  { title: 'Account Executive', dates: 'November 2016 – December 2019', icon: 'clipboard' as const },
] as const

const tools = [
  'Power BI',
  'Microsoft Fabric',
  'SQL Server Management Studio',
  'Azure Machine Learning',
  'DAX & star schema design',
  'Python',
  'OpenAI & Anthropic APIs',
  'Claude Code & MCP',
  'React Native & Expo',
  'TypeScript',
] as const

export default function ExperiencePage() {
  return (
    <main className={`${styles.container} inner-wash`}>
      <section className={styles.hero}>
        <h1>How I Got Here</h1>
        <p className={styles.subtitle}>
          I didn&rsquo;t set out to become a data and AI person — I was just curious about how the
          business actually worked, and that curiosity never really stopped.
        </p>
        <p className={styles.quote}>
          &ldquo;I&rsquo;m somebody who just figures things out, even when I haven&rsquo;t done it
          before. I&rsquo;m a natural, creative builder.&rdquo;
        </p>
      </section>

      <section className={styles.story} data-rise>
        <h2>From Sales to Systems</h2>
        <p>
          I got into data and AI because I was naturally curious about how the business worked and
          what actually made it successful — not because it was part of some plan. That curiosity
          turned into self-study: I picked up Power BI, Microsoft Fabric, and SQL Server Management
          Studio on my own time. Eventually I enrolled in a one-year graduate certificate program in
          Data Analytics at Youngstown State University, where I learned database management, data
          visualization, and machine learning and predictive modeling.
        </p>
        <p>
          I started applying what I&rsquo;d learned at the company I was already working for in
          sales, and it turned into a new role: Business Intelligence Analyst. From there, I moved up
          to Business Intelligence Lead.
        </p>
      </section>

      <section className={styles.story} data-rise>
        <h2>What I&rsquo;m Building Now</h2>
        <p>
          The project I&rsquo;m proudest of is an agentic analytics platform I built from the ground
          up. I designed a semantic layer for each department and focus area in the company — reusable
          metrics and measures that mean the same thing no matter who&rsquo;s asking the question. On
          top of that sits a context layer that explains how the business actually operates: our
          terms, our best practices, the way we do things day to day. An AI agent, built on Claude and
          connected through MCP, uses that semantic layer to answer complex business questions
          directly, in plain language, for every department in the company.
        </p>
      </section>

      <section className={styles.story} data-rise>
        <h2>Why Sales and Data Together Works</h2>
        <p>
          I serve every department in the company now, and I think my years in sales are a big part
          of why that works. Sales gave me real exposure to how the business operates — not just the
          data about it, but the manufacturing side of it too. That means I can sit down with the data
          engineering team and speak their technical language, then turn around and translate that
          for business users — and take a business requirement and break it down into something
          engineering can actually act on.
        </p>
        <p>
          That translation step is where projects get lost. I try to make sure we&rsquo;re solving the
          problem that actually needs solving, instead of losing it somewhere in the middle.
        </p>
      </section>

      <section className={styles.story} data-rise>
        <h2>Why I Do This</h2>
        <p>
          What keeps me doing this is the creativity of it, and the satisfaction of building something
          that didn&rsquo;t exist before — something that adds real value. Some days that&rsquo;s a
          report or an interactive dashboard. Some days it&rsquo;s a web app. Some days it&rsquo;s an
          entire agentic analytics platform. I like figuring things out, even when I haven&rsquo;t done
          it before.
        </p>
      </section>

      <section className={styles.timeline}>
        <h2 data-rise>Career Timeline</h2>
        <div className={styles.timelineList}>
          {timeline.map((role) => (
            <div className={styles.timelineRow} key={role.title} data-rise>
              <h3 className={styles.timelineTitle}>
                <LineIcon name={role.icon} /> {role.title}
              </h3>
              <span className={styles.timelineDates}>{role.dates}</span>
            </div>
          ))}
        </div>
        <p className={styles.footnote}>
          Earlier: Marketing Coordinator (promoted from Intern), ERP software implementation (SYSPRO,
          Acumatica) — April 2015 – September 2016
        </p>
        <p className={styles.footnote}>
          B.S. Business Administration &amp; Marketing and a Graduate Certificate in Data Analytics,
          both from Youngstown State University
        </p>
      </section>

      <section className={styles.tools}>
        <h2 data-rise>Tools I Work With</h2>
        <div className={styles.tagRow}>
          {tools.map((tool) => (
            <span className={styles.tag} key={tool} data-rise>
              {tool}
            </span>
          ))}
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
