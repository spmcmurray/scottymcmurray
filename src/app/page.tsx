import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import Footer from '@/components/Footer'
import { ArrowIcon, StrokeIcon } from '@/components/Icons'
import {
  about,
  appsIntro,
  assets,
  churchExplorer,
  clubhouse,
  contactBand,
  guideCard,
  heroCopy,
  heroNotes,
  highlights,
  nexus,
  radicalRush,
  skills,
  tenfold,
} from '@/content/home'
export const metadata: Metadata = {
  title: 'Scott McMurray - Simple Apps for a Simpler Life',
  description:
    'Designed by Scott McMurray in Ohio. Simple apps for a simpler life, plus writing on AI-enabled analytics and analyst agent architecture.',
  keywords: [
    'app developer',
    'indie apps',
    'simple apps',
    'Ohio developer',
    'Scott McMurray',
    'AI analyst agent',
    'self-service reporting',
  ],
  openGraph: {
    title: 'Scott McMurray - Simple Apps for a Simpler Life',
    description: 'Designed by Scott McMurray in Ohio. Simple apps, and writing on AI-enabled analytics.',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: '/',
  },
}

function PhoneShot({
  src,
  alt,
  className,
  href,
  width,
  height,
  priority = false,
}: {
  src: string
  alt: string
  className?: string
  href: string
  width: number
  height: number
  priority?: boolean
}) {
  return (
    <Link href={href} className={className ? `phone ${className}` : 'phone'}>
      <span className="island" aria-hidden="true" />
      <span className="scr">
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          fetchPriority={priority ? 'high' : undefined}
          loading={priority ? 'eager' : 'lazy'}
        />
      </span>
    </Link>
  )
}

function AppMark({ kind }: { kind: 'tenfold' | 'golf' | 'rr' | 'nexus' | 'ce' | 'shield' }) {
  if (kind === 'shield') {
    return (
      <span className="ico glyph" aria-hidden="true">
        <StrokeIcon name="shield" />
      </span>
    )
  }
  if (kind === 'ce') {
    return (
      <span className="ico ce" aria-hidden="true">
        <span>CE</span>
      </span>
    )
  }
  const src =
    kind === 'tenfold'
      ? assets.iconTenfold
      : kind === 'golf'
        ? assets.iconGolf
        : kind === 'rr'
          ? assets.iconRr
          : assets.iconNexus
  return (
    <span className="ico" aria-hidden="true">
      <img src={src} alt="" />
    </span>
  )
}

export default function Home() {
  return (
    <>
    <div className="ag">
      <SiteNav variant="hero" />
      <main id="main" tabIndex={-1}>
        <section className="stage hero" aria-labelledby="hero-title">
          <div className="atmo" aria-hidden="true">
            <div className="blob b1" />
            <div className="blob b2" />
            <div className="blob b3" />
            <div className="blob b4" />
            <div className="blob b5" />
            <div className="streak s1" />
            <div className="streak s2" />
          </div>
          <div className="flutes" aria-hidden="true" />
          <div className="grain" aria-hidden="true" />
          <div className="vignette" aria-hidden="true" />

          <div className="copy">
            <p className="signature">{heroCopy.eyebrow}</p>
            <h1 id="hero-title">
              {heroCopy.headlineLead} <em>{heroCopy.headlineEmphasis}</em> {heroCopy.headlineTail}
            </h1>
            <p className="lede">{heroCopy.lede}</p>
            <div className="ctas">
              <a className="pill white" href={heroCopy.primaryCta.href}>
                {heroCopy.primaryCta.label} <ArrowIcon />
              </a>
              <Link className="pill glass" href={heroCopy.secondaryCta.href}>
                {heroCopy.secondaryCta.label}
              </Link>
            </div>
          </div>

          <div className="rack">
            <div className="notes">
              {heroNotes.map((note, index) => (
                <div className={`note glass n${index + 1}`} key={note.title}>
                  <AppMark kind={note.icon} />
                  <div>
                    <b>{note.title}</b>
                    <span>{note.body}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="phones">
              <PhoneShot
                className="p1"
                href={tenfold.href}
                src={assets.tenfoldHome}
                width={780}
                height={1688}
                priority
                alt="TENFOLD home screen asking if you are ready to start today’s workout"
              />
              <PhoneShot
                className="p3"
                href={radicalRush.href}
                src={assets.rrSwipe}
                width={780}
                height={1688}
                priority
                alt="RADICAL RUSH with a score of 2200 and a pink swipe-up prompt"
              />
              <PhoneShot
                className="p2"
                href={clubhouse.href}
                src={assets.golfScore}
                width={780}
                height={1696}
                priority
                alt="Clubhouse Golf score entry for hole 1, with score, putts, and fairway over the course map"
              />
              <div className="fade" aria-hidden="true" />
              <div className="dock glass">
                <Link href={tenfold.href} className="ico">
                  <img src={assets.iconTenfold} alt="" />
                  <span className="sr-only">TENFOLD</span>
                </Link>
                <Link href={clubhouse.href} className="ico">
                  <img src={assets.iconGolf} alt="" />
                  <span className="sr-only">Clubhouse Golf</span>
                </Link>
                <Link href={radicalRush.href} className="ico">
                  <img src={assets.iconRr} alt="" />
                  <span className="sr-only">RADICAL RUSH</span>
                </Link>
                <span className="sep" aria-hidden="true" />
                <Link href={nexus.href} className="ico">
                  <img src={assets.iconNexus} alt="" />
                  <span className="sr-only">Nexus AI</span>
                </Link>
                <Link href={churchExplorer.href} className="ico ce">
                  <span aria-hidden="true">CE</span>
                  <span className="sr-only">Church Explorer</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="band" aria-label="Highlights">
          <div className="points">
            {highlights.map((item) => (
              <div className="feat" key={item.title}>
                <StrokeIcon name={item.icon} />
                <div>
                  <b>{item.title}</b>
                  <span>{item.body}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="sec" id="apps" aria-labelledby="apps-title">
          <div className="sec-h">
            <div>
              <p className="eyebrow">{appsIntro.eyebrow}</p>
              <h2 id="apps-title">
                {appsIntro.titleLead}
                <br />
                <em>{appsIntro.titleEmphasis}</em>
              </h2>
            </div>
            <p className="sub">{appsIntro.sub}</p>
          </div>

          <div className="plate golf">
            <div className="atmo" aria-hidden="true">
              <div className="blob" style={{ width: 900, height: 700, left: -200, top: 200, background: '#1f3dff' }} />
              <div className="blob" style={{ width: 800, height: 700, left: 560, top: -200, background: '#ff2d8f' }} />
              <div className="blob" style={{ width: 700, height: 600, left: 900, top: 420, background: '#ff7a4d' }} />
            </div>
            <div className="flutes" aria-hidden="true" />
            <div className="grain" aria-hidden="true" />
            <div className="vig" aria-hidden="true" />
            <div className="phead">
              <div className="row">
                <Link href={clubhouse.href} className="ico" aria-label={clubhouse.name}>
                  <img src={assets.iconGolf} alt="" />
                </Link>
                <span className="tag">{clubhouse.tag}</span>
              </div>
              <h3>
                <Link href={clubhouse.href}>{clubhouse.name}</Link>
              </h3>
              <p>{clubhouse.body}</p>
            </div>
            <div className="caps">
              {clubhouse.captions.map((cap) => (
                <div className="cap glass" key={cap.n}>
                  <i>{cap.n}</i>
                  <b>{cap.title}</b>
                  <span>{cap.body}</span>
                </div>
              ))}
            </div>
            <div className="trio">
              <PhoneShot
                href={clubhouse.href}
                src={assets.golfMap}
                width={780}
                height={1696}
                alt="Clubhouse Golf hole map showing 216 yards to the middle of the green"
              />
              <PhoneShot
                className="c2"
                href={clubhouse.href}
                src={assets.golfScore}
                width={780}
                height={1696}
                alt="Clubhouse Golf score, putts, and fairway controls over the hole map"
              />
              <PhoneShot
                href={clubhouse.href}
                src={assets.golfCard}
                width={780}
                height={1696}
                alt="Clubhouse Golf scorecard with par, yards, and handicap for each hole"
              />
            </div>
          </div>

          <div className="duo">
            <article className="plate">
              <div className="atmo" aria-hidden="true">
                <div className="blob" style={{ width: 700, height: 600, left: -200, top: -150, background: '#5a2bff' }} />
                <div className="blob" style={{ width: 700, height: 600, left: 200, top: 360, background: '#ff7a4d' }} />
              </div>
              <div className="flutes" aria-hidden="true" />
              <div className="grain" aria-hidden="true" />
              <div className="vig" aria-hidden="true" />
              <div className="phead">
                <div className="row">
                  <Link href={tenfold.href} className="ico" aria-label={tenfold.name}>
                    <img src={assets.iconTenfold} alt="" />
                  </Link>
                  <span className="tag">{tenfold.tag}</span>
                </div>
                <h3>
                  <Link href={tenfold.href}>{tenfold.name}</Link>
                </h3>
                <p>{tenfold.body}</p>
                <div className="mini">
                  {tenfold.pills.map((pill) => (
                    <span key={pill}>{pill}</span>
                  ))}
                </div>
              </div>
              <PhoneShot
                href={tenfold.href}
                src={assets.tenfoldHome}
                width={780}
                height={1688}
                alt="TENFOLD workout home screen"
              />
            </article>
            <article className="plate">
              <div className="atmo" aria-hidden="true">
                <div className="blob" style={{ width: 700, height: 600, left: 120, top: -150, background: '#ff2d8f' }} />
                <div className="blob" style={{ width: 700, height: 600, left: -220, top: 360, background: '#1f3dff' }} />
              </div>
              <div className="flutes" aria-hidden="true" />
              <div className="grain" aria-hidden="true" />
              <div className="vig" aria-hidden="true" />
              <div className="phead">
                <div className="row">
                  <Link href={radicalRush.href} className="ico" aria-label={radicalRush.name}>
                    <img src={assets.iconRr} alt="" />
                  </Link>
                  <span className="tag">{radicalRush.tag}</span>
                </div>
                <h3>
                  <Link href={radicalRush.href}>{radicalRush.name}</Link>
                </h3>
                <p>{radicalRush.body}</p>
                <div className="mini">
                  {radicalRush.pills.map((pill) => (
                    <span key={pill}>{pill}</span>
                  ))}
                </div>
              </div>
              <PhoneShot
                href={radicalRush.href}
                src={assets.rrSwipe}
                width={780}
                height={1688}
                alt="RADICAL RUSH swipe-up game screen"
              />
            </article>
          </div>

          <div className="duo web">
            <article className="plate">
              <div className="atmo" aria-hidden="true">
                <div className="blob" style={{ width: 700, height: 600, left: -150, top: 200, background: '#5a2bff' }} />
                <div className="blob" style={{ width: 600, height: 500, left: 300, top: -150, background: '#1f3dff' }} />
              </div>
              <div className="flutes" aria-hidden="true" />
              <div className="grain" aria-hidden="true" />
              <div className="vig" aria-hidden="true" />
              <div className="phead">
                <div className="row">
                  <Link href={churchExplorer.href} className="ico ce" aria-label={churchExplorer.name}>
                    <span>CE</span>
                  </Link>
                  <a className="tag" href={churchExplorer.external} target="_blank" rel="noopener noreferrer">
                    {churchExplorer.tag}
                  </a>
                </div>
                <h3>
                  <Link href={churchExplorer.href}>{churchExplorer.name}</Link>
                </h3>
                <p>{churchExplorer.body}</p>
              </div>
              <PhoneShot
                href={churchExplorer.href}
                src={assets.church}
                width={780}
                height={1688}
                alt="Church Explorer lesson about what the church is"
              />
            </article>
            <article className="plate">
              <div className="atmo" aria-hidden="true">
                <div className="blob" style={{ width: 700, height: 600, left: 160, top: 200, background: '#ff7a4d' }} />
                <div className="blob" style={{ width: 600, height: 500, left: -200, top: -150, background: '#ff2d8f' }} />
              </div>
              <div className="flutes" aria-hidden="true" />
              <div className="grain" aria-hidden="true" />
              <div className="vig" aria-hidden="true" />
              <div className="phead">
                <div className="row">
                  <Link href={nexus.href} className="ico" aria-label={nexus.name}>
                    <img src={assets.iconNexus} alt="" />
                  </Link>
                  <a className="tag" href={nexus.external} target="_blank" rel="noopener noreferrer">
                    {nexus.tag}
                  </a>
                </div>
                <h3>
                  <Link href={nexus.href}>{nexus.name}</Link>
                </h3>
                <p>{nexus.body}</p>
              </div>
              <div className="browser">
                <div className="bar" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <span>getnexus.us</span>
                </div>
                <img
                  src={assets.nexusChat}
                  alt="Nexus AI chat answering a question about quantum physics. The account sidebar is not shown."
                  width={975}
                  height={692}
                  loading="lazy"
                />
              </div>
            </article>
          </div>
        </section>

        <section className="sec" id="about" aria-labelledby="about-title">
          <p className="eyebrow">{about.eyebrow}</p>
          <h2 className="statement" id="about-title">
            {about.statementLead} <span>{about.statementRest}</span>
          </h2>
          <div className="three">
            {about.columns.map((column) => (
              <div key={column.title}>
                <h3>{column.title}</h3>
                <p>
                  {column.parts.map((part, index) =>
                    'strong' in part ? <strong key={index}>{part.strong}</strong> : <span key={index}>{part.text}</span>
                  )}
                </p>
              </div>
            ))}
          </div>
          <ul className="stats" aria-label="At a glance">
            {about.stats.map((stat) => (
              <li className="stat" key={stat.label}>
                <p className="stat-number">{stat.number}</p>
                <p className="stat-label">{stat.label}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="sec" id="skills" aria-labelledby="skills-title">
          <div className="sec-h">
            <div>
              <p className="eyebrow">{skills.eyebrow}</p>
              <h2 id="skills-title">
                {skills.titleLead}
                <br />
                <em>{skills.titleEmphasis}</em>
              </h2>
            </div>
          </div>
          <div className="sg">
            <div className="panel">
              {skills.groups.map((group) => (
                <div key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="guide stage">
              <div className="atmo" aria-hidden="true">
                <div className="blob" style={{ width: 700, height: 600, left: -150, top: -150, background: '#1f3dff' }} />
                <div className="blob" style={{ width: 700, height: 600, left: 300, top: 150, background: '#ff2d8f' }} />
                <div className="blob" style={{ width: 500, height: 400, left: 500, top: 500, background: '#ff7a4d' }} />
              </div>
              <div className="flutes" aria-hidden="true" />
              <div className="grain" aria-hidden="true" />
              <div className="copy-block">
                <p className="eyebrow">{guideCard.eyebrow}</p>
                <h3>
                  {guideCard.titleLead}
                  <br />
                  {guideCard.titleRest}
                </h3>
                <p>{guideCard.body}</p>
              </div>
              <div className="cta-row">
                <Link className="pill white" href={guideCard.cta.href}>
                  {guideCard.cta.label} <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="sec" id="contact" aria-labelledby="contact-title">
          <div className="contact stage">
            <div className="atmo" aria-hidden="true">
              <div className="blob" style={{ width: 800, height: 600, left: -150, top: -100, background: '#1f3dff' }} />
              <div className="blob" style={{ width: 800, height: 600, left: 450, top: -50, background: '#ff2d8f' }} />
              <div className="blob" style={{ width: 700, height: 600, left: 950, top: 80, background: '#ff7a4d' }} />
            </div>
            <div className="flutes" aria-hidden="true" />
            <div className="grain" aria-hidden="true" />
            <p className="eyebrow">{contactBand.eyebrow}</p>
            <h2 id="contact-title">
              {contactBand.titleLead}
              <br />
              <em>{contactBand.titleEmphasis}</em>
            </h2>
            <div className="ctas">
              <Link className="pill white" href={contactBand.primary.href}>
                {contactBand.primary.label} <ArrowIcon />
              </Link>
              <a className="pill glass" href={contactBand.linkedin.href} target="_blank" rel="noopener noreferrer">
                {contactBand.linkedin.label}
              </a>
              <a className="pill glass" href={contactBand.github.href} target="_blank" rel="noopener noreferrer">
                {contactBand.github.label}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
    <Footer />
    </>
  )
}
