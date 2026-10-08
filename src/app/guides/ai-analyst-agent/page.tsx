import type { Metadata } from 'next'
import styles from './guide.module.css'

export const metadata: Metadata = {
  title: 'Building an AI Analyst Agent: A Practical Best-Practices Guide',
  description:
    'A vendor-neutral guide to analyst agent architecture for self-service reporting: an AI assistant, an MCP server, a governed semantic model, and a data platform.',
  keywords: [
    'AI analyst agent',
    'self-service reporting',
    'semantic model',
    'Model Context Protocol',
    'MCP',
    'Power BI',
    'Microsoft Fabric',
    'Claude',
    'Scott McMurray',
  ],
  openGraph: {
    title: 'Building an AI Analyst Agent: A Practical Best-Practices Guide',
    description:
      'How to connect an AI assistant to a governed semantic model so business users get trustworthy answers in plain English.',
    type: 'article',
    locale: 'en_US',
  },
  alternates: {
    canonical: '/guides/ai-analyst-agent',
  },
}

export default function AiAnalystGuidePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Building an AI Analyst Agent: A Practical Best-Practices Guide',
    description:
      'A vendor-neutral guide to analyst agent architecture for self-service reporting.',
    author: {
      '@type': 'Person',
      name: 'Scott McMurray',
      url: 'https://scottymcmurray.com',
    },
    datePublished: '2026-10-08',
    dateModified: '2026-10-08',
    mainEntityOfPage: 'https://scottymcmurray.com/guides/ai-analyst-agent',
  }

  return (
    <article className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={`${styles.kicker} animate-in`}>A field guide</p>
          <h1 className={`${styles.title} animate-in animate-in-delay-1`}>
            Building an AI Analyst Agent
          </h1>
          <p className={`${styles.subtitle} animate-in animate-in-delay-2`}>
            A practical best-practices guide to self-service reporting: plain-English questions, governed measures, and answers a person can check.
          </p>
          <p className={`${styles.meta} animate-in animate-in-delay-3`}>
            Scott McMurray · October 2026
          </p>
        </div>
      </header>

      <div className={styles.layout}>
        <nav className={styles.toc} aria-label="In this guide">
          <p className={styles.tocTitle}>In this guide</p>
          <ol className={styles.tocList}>
            <li><a href="#architecture">Reference architecture</a></li>
            <li><a href="#semantic-layer">Why the semantic layer wins</a></li>
            <li><a href="#naming">Names and definitions</a></li>
            <li><a href="#split-sources">A split semantic layer</a></li>
            <li><a href="#security">Security and row-level access</a></li>
            <li><a href="#guardrails">Guardrails against made-up numbers</a></li>
            <li><a href="#start-small">Start with a narrow first version</a></li>
            <li><a href="#testing">Test with known answers</a></li>
            <li><a href="#adoption">Adoption and change</a></li>
          </ol>
        </nav>

        <section className={styles.section}>
          <p>
            Trustworthy self-service reporting is sometimes called the holy grail: someone asks a question in plain English and gets a number the organization already stands behind. The chat window is the easy part. The hard part is a short, governed path from that question to a measure that already has a definition, a grain, and a permission check.
          </p>
          <p>
            This is a vendor-neutral field guide for that path. <strong>Claude</strong> (including Claude Projects), the <strong>Model Context Protocol (MCP)</strong>, <strong>Power BI</strong> semantic models, and <strong>Microsoft Fabric</strong> appear as concrete examples of each role. Use the equivalents you already run. Nothing here is a case study, a benchmark, or a description of any one deployment.
          </p>
        </section>

        <section id="architecture" className={styles.section}>
          <h2>The reference architecture</h2>
          <p>
            Four hops are enough. A person talks to an assistant. The assistant may only fetch numbers by calling tools. Those tools talk to a semantic model. The semantic model talks to the data platform, under the caller&apos;s permissions.
          </p>

          <figure className={styles.figure}>
            <figcaption className={styles.caption}>
              Question flow, top to bottom. The assistant never queries the platform directly.
            </figcaption>
            <ol className={styles.flow}>
              <li className={styles.step}>
                <span className={styles.index}>01</span>
                <div>
                  <h3>Business user</h3>
                  <p>Asks in plain English, the way they already talk about the business. No query language, no report catalog.</p>
                </div>
              </li>
              <li className={styles.step}>
                <span className={styles.index}>02</span>
                <div>
                  <h3>AI assistant</h3>
                  <p>
                    Holds the rules: which topics exist, when to ask a clarifying question, and how to cite a result. <span className={styles.example}>Example: a Claude Project.</span>
                  </p>
                </div>
              </li>
              <li className={styles.step}>
                <span className={styles.index}>03</span>
                <div>
                  <h3>MCP server</h3>
                  <p>
                    A small tool boundary. Each tool does one governed thing, such as &quot;evaluate this measure with these filters.&quot; There is no free-form SQL tool in the first version.
                  </p>
                </div>
              </li>
              <li className={styles.step}>
                <span className={styles.index}>04</span>
                <div>
                  <h3>Semantic model</h3>
                  <p>
                    Measures, relationships, descriptions, and security roles. This is the contract the business already agreed to. <span className={styles.example}>Example: a Power BI semantic model.</span>
                  </p>
                </div>
              </li>
              <li className={styles.step}>
                <span className={styles.index}>05</span>
                <div>
                  <h3>Data platform</h3>
                  <p>
                    Where the rows live, including curated business-ready tables. <span className={styles.example}>Example: Microsoft Fabric.</span> The platform is not the thing the assistant explains. The measure is.
                  </p>
                </div>
              </li>
            </ol>
          </figure>

          <p>
            Put policy in the assistant and access in the server. Project instructions can say which subject area is in scope, which measure wins when two names sound alike, and the shape of a good answer. They cannot keep a secret. If a tool can see a row, assume the model can say it.
          </p>
        </section>

        <section id="semantic-layer" className={styles.section}>
          <h2>The semantic layer matters more than the model</h2>
          <p>
            A strong language model on a messy schema will sound sure and be wrong. A modest model on a clean semantic layer will reuse definitions the business already argued about and wrote down. Spend the effort on the layer.
          </p>
          <p>The layer is doing four jobs the assistant should not invent:</p>
          <ul>
            <li><strong>Meaning.</strong> &quot;Revenue&quot; is a specific measure, not a vibe.</li>
            <li><strong>Grain.</strong> One row per order line is not one row per customer.</li>
            <li><strong>Relationships.</strong> Which date, which product, which organization the filters apply to.</li>
            <li><strong>Permission.</strong> Who is allowed to see which slice.</li>
          </ul>
          <aside className={styles.callout}>
            <p>
              If the semantic layer is wrong, a better model just hallucinates more fluently. Fix the measure before you swap the assistant.
            </p>
          </aside>
          <p>
            Treat descriptions as part of the product. The agent chooses a measure by reading its name and description. A column that exists only so a report could be built in 2014 should be hidden. If a human analyst would not drag it onto a canvas, the agent should not see it either.
          </p>
        </section>

        <section id="naming" className={styles.section}>
          <h2>Name measures so the agent picks the right one</h2>
          <p>
            The agent does not know your tribal vocabulary. It knows the strings you published. Names that made sense inside a modeling tool become a bug the moment a person says &quot;how were sales last month?&quot;
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <caption className={styles.caption}>
                Illustrative names only. They are not metrics from a real report.
              </caption>
              <thead>
                <tr>
                  <th scope="col">Weaker</th>
                  <th scope="col">Clearer</th>
                  <th scope="col">Why it matters</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>Sales_Amt_1</code></td>
                  <td><code>Net Sales</code></td>
                  <td>The agent, and the person, can say the name out loud.</td>
                </tr>
                <tr>
                  <td><code>Sales</code></td>
                  <td><code>Net Sales</code> and <code>Bookings</code></td>
                  <td>One vague name hides two different business events.</td>
                </tr>
                <tr>
                  <td><code>Total Revenue</code></td>
                  <td>One named definition, plus a description of what it is not</td>
                  <td>If two measures can both answer &quot;revenue,&quot; the agent will guess.</td>
                </tr>
                <tr>
                  <td><code>Amt YTD FY</code></td>
                  <td><code>Net Sales, Fiscal Year to Date</code></td>
                  <td>The time basis belongs in the name, not in someone&apos;s memory.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Write the definition next to the measure</h3>
          <p>A description the agent can read should settle five things:</p>
          <ol>
            <li>The business event (invoice, shipment, order, payment).</li>
            <li>What is included and what is subtracted (discounts, returns, tax, freight).</li>
            <li>The date the filter uses (invoice date is not ship date).</li>
            <li>Words people actually say, including the synonyms.</li>
            <li>The sibling measure it is easy to confuse it with.</li>
          </ol>
          <p>
            A usable description sounds like this: &quot;Invoiced amount after discounts and returns. Excludes tax and freight. Filtered on invoice date. This is not bookings and not shipments.&quot; That sentence prevents more bad answers than a clever prompt.
          </p>
          <p>
            When two measures are both legitimate, pick a default for the ambiguous question and say so in the instructions: if someone says &quot;sales&quot; and does not specify, use Net Sales and name it in the answer. Offer the other measure. Do not blend them.
          </p>
        </section>

        <section id="split-sources" className={styles.section}>
          <h2>When the semantic layer is split</h2>
          <p>
            Plenty of environments are mid-migration. Some definitions still live on a legacy operational system, such as an ERP. Others live on the curated tables of a modern warehouse, the layer often called gold. Pretending those are one model, on day one, is how the agent stitches together two truths and calls it an answer.
          </p>

          <figure className={styles.figure}>
            <figcaption className={styles.caption}>
              Two subject areas, two tools. The assistant chooses a tool. It does not reconcile the sources in prose.
            </figcaption>
            <div className={styles.branch}>
              <div className={styles.branchCard}>
                <strong>Legacy semantic area</strong>
                <span>Measures that still belong to the operational system. The tool description says which questions it can answer, and which it cannot.</span>
              </div>
              <div className={styles.branchJoin} aria-hidden="true">or</div>
              <div className={styles.branchCard}>
                <strong>Gold-layer semantic area</strong>
                <span>Measures on business-ready warehouse tables. This is usually the better first version, because the names were written for people.</span>
              </div>
            </div>
          </figure>

          <p>A few rules keep the split honest:</p>
          <ul>
            <li><strong>Route by subject area.</strong> Bind each MCP tool to one model. The tool&apos;s description is the map.</li>
            <li><strong>Name the authority.</strong> If both sides can produce a number called revenue, the description states which one answers which question, and why.</li>
            <li><strong>Do not join in the chat.</strong> If a question needs both sources, either the semantic layer already combines them, or the assistant declines and says what is missing.</li>
            <li><strong>Leave a gap on purpose.</strong> A first version can expose one area completely and teach the assistant to refuse the other. A refusal is a better result than a blended guess.</li>
          </ul>
          <p>
            That gap is not a failure of ambition. A pragmatic first version is a valid starting point. Expand the map when the definitions are ready, not when the demo would look more impressive with more topics.
          </p>
        </section>

        <section id="security" className={styles.section}>
          <h2>Pass security and row-level permissions through</h2>
          <p>
            The agent must not become a side door. Row-level security and object-level security belong in the semantic model, applied to the person who asked. The assistant does not reimplement them in a prompt.
          </p>
          <ul>
            <li>
              <strong>Call as the user.</strong> The MCP server should use that person&apos;s identity, or a token constrained to it. A shared service account that can see everything, plus an instruction to &quot;only show their region,&quot; is not a control.
            </li>
            <li>
              <strong>Hide measures the person cannot use.</strong> If the model already hides a measure, the tool result and the error text should hide it too. Samples, query plans, and &quot;did you mean&quot; suggestions are still data.
            </li>
            <li>
              <strong>Do not trust conversation memory.</strong> A later message does not grant a row the model refused. Each tool call is checked again.
            </li>
            <li>
              <strong>Keep arbitrary query off the tool list</strong> until you are ready to govern it. A semantic-query tool that only accepts known measures is a smaller blast radius than a SQL box.
            </li>
            <li>
              <strong>Log the caller, the tool, and the question.</strong> Do not log credentials. Logs are for &quot;why did this answer look like that,&quot; not for a second copy of the warehouse.
            </li>
          </ul>
          <p>
            Prove it with two accounts that should not see the same rows. Ask both the same question. If the answers match, the identity is not actually flowing through.
          </p>
        </section>

        <section id="guardrails" className={styles.section}>
          <h2>Guardrails against hallucinated numbers</h2>
          <p>
            The failure mode that matters is a fluent sentence with a fabricated figure. The rule is simple: if a tool did not return the number, the assistant does not say the number. It may explain, ask a question, or decline. It may not estimate a governed metric to be helpful.
          </p>
          <p>Every numeric answer should show four things:</p>
          <ol>
            <li>The value, copied from the tool result. Say so if you round it for display.</li>
            <li>The measure name, exactly as published.</li>
            <li>The filter context: dates, product, organization, and anything else that changed the number.</li>
            <li>The query the tool ran, or a faithful citation of it, so a person can replay it in the semantic model.</li>
          </ol>

          <div className={styles.result}>
            <p className={styles.resultTitle}>Shape of an answer, not a real result</p>
            <dl className={styles.pairs}>
              <div>
                <dt>Value</dt>
                <dd>Whatever the tool returned. Nothing filled in from memory.</dd>
              </div>
              <div>
                <dt>Measure</dt>
                <dd>Net Sales</dd>
              </div>
              <div>
                <dt>Filters</dt>
                <dd>Invoice date is the prior calendar month. No product filter.</dd>
              </div>
              <div>
                <dt>Query</dt>
                <dd>The semantic query the tool executed, shown beside the value, not paraphrased into a story.</dd>
              </div>
            </dl>
          </div>

          <p>
            If the tool returns no rows, say that. If two measures fit, ask one clarifying question. If the number looks surprising, still show it, still name the measure, and let the person who owns the definition decide whether the surprise is real. The assistant&apos;s job is not to sand the edges off a governed result.
          </p>
        </section>

        <section id="start-small" className={styles.section}>
          <h2>Start with a narrow first version</h2>
          <p>
            The temptation is to point the assistant at every measure you have, because the model can &quot;handle it.&quot; It can talk about all of them. It cannot be right about all of them. I would rather ship a narrow version that declines half the questions than a wide one that answers them with the wrong measure.
          </p>
          <p>A solid first version has:</p>
          <ul>
            <li>One subject area, preferably the one whose definitions are already stable.</li>
            <li>A handful of measures, each with a description written for the agent.</li>
            <li>One audience, so row-level behavior can be tested with real roles.</li>
            <li>A written list of questions it will refuse, including anything that crosses the legacy and modern split.</li>
          </ul>
          <p>
            Publish that boundary in the assistant&apos;s instructions and in whatever you tell users. &quot;I don&apos;t have a governed measure for that yet&quot; is a complete answer. Expand only after the known-answer tests below stay green.
          </p>
        </section>

        <section id="testing" className={styles.section}>
          <h2>Test with questions that already have answers</h2>
          <p>
            Build a small bank of questions before you invite anyone else. For each one, record the expected behavior from the semantic model itself, not from memory and not from the assistant: which measure, which filters, and whether the correct behavior is to answer, to clarify, or to decline. Store the expected value next to the question when an answer is expected. Recompute it in the model when the model changes.
          </p>
          <p>Cover at least these kinds of questions:</p>
          <ul>
            <li><strong>Direct.</strong> &quot;What was net sales last month?&quot; should hit one measure and one date basis.</li>
            <li><strong>Synonym.</strong> The words in the description, not the words in the measure name.</li>
            <li><strong>Near miss.</strong> &quot;Sales&quot; versus &quot;bookings&quot; versus &quot;shipped.&quot; The answer should name which one it used.</li>
            <li><strong>Ambiguous.</strong> A question that fits two measures should trigger one clarifying question, not an average.</li>
            <li><strong>Out of scope.</strong> A topic you have not published should be declined, with no invented figure.</li>
            <li><strong>Cross-source.</strong> A question that needs both the legacy area and the gold layer should not be blended in prose.</li>
            <li><strong>Two identities.</strong> The same wording, two users, two different permitted slices.</li>
          </ul>
          <p>
            Re-run the bank when you rename a measure, edit a description, change a relationship, or rewrite the project instructions. Those are the edits that silently retarget a question. A green demo from last month is not a test.
          </p>
        </section>

        <section id="adoption" className={styles.section}>
          <h2>Adoption is a product problem</h2>
          <p>
            People do not adopt an analyst agent because the architecture diagram was clean. They adopt it when a question they already ask comes back with a number they can defend in a meeting. Plan for that, in this order.
          </p>
          <ol>
            <li>
              <strong>Say what the first version answers.</strong> A short menu of questions beats a launch note that says the assistant &quot;can answer questions about the business.&quot;
            </li>
            <li>
              <strong>Keep the existing report.</strong> Sit beside it. The report is the appeal path when someone wants to see the same measure on a page they already trust.
            </li>
            <li>
              <strong>Teach the citation, not the prompt.</strong> Show people where the measure name and the query are. The habit you want is &quot;which measure did it use?&quot; rather than &quot;the AI is wrong.&quot;
            </li>
            <li>
              <strong>Give wrong numbers a route to the definition owner.</strong> If the measure was the right one and the value still looks off, that is a semantic-layer issue. Collect it. Do not hot-fix it inside the prompt.
            </li>
            <li>
              <strong>Feed misses back into the system.</strong> Questions people actually ask, and questions the agent fumbled, become new names, new descriptions, or new rows in the test bank.
            </li>
            <li>
              <strong>Start with the people who already own the definitions.</strong> They can tell a wrong measure from a wrong grain. They are the translators for everyone else.
            </li>
          </ol>
          <p>
            Change management here is mostly honesty about the boundary. A tool that refuses cleanly earns more trust than a tool that answers everything once.
          </p>
        </section>

        <section className={`${styles.section} ${styles.close}`}>
          <h2>The short version</h2>
          <p>
            An analyst agent is not a chatbot aimed at a warehouse. It is a person, an assistant, a tool boundary, a semantic model that already knows what the business means, and a platform that enforces who can see what. Get the measure names right. Pass the user&apos;s permissions through. Cite the query. Start narrow, on purpose. Test against answers you already believe. Then let people use it next to the reports they have, and widen it only when the refusals start to feel like missing product rather than missing discipline.
          </p>
        </section>
      </div>
    </article>
  )
}
