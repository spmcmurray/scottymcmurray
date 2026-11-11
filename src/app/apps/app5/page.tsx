import { Metadata } from 'next'
import styles from '../app.module.css'

export const metadata: Metadata = {
  title: 'Clubhouse Golf - Scott McMurray',
  description: 'A golf GPS and scorecard for iPhone. Live yardages, course maps, and voice scoring: say "bogey, two putts" and it is on the card.',
}

export default function AppFivePage() {
  return (
    <div className={`${styles.appPage} inner-wash`}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <img
              src="/clubhouse-golf-icon.png"
              alt="Clubhouse Golf app icon: a red C and H monogram with a flag"
              className={`${styles.appIcon} animate-in`}
              width={72}
              height={72}
            />
            <div className={`${styles.badge} animate-in`}>iOS App · In beta</div>
            <h1 className={`${styles.title} animate-in animate-in-delay-1`}>Clubhouse Golf</h1>
            <p className={`${styles.subtitle} animate-in animate-in-delay-2`}>
              A golf GPS and scorecard for iPhone. See the distance to the green, keep your score,
              and skip the typing: hold the mic and say how the hole went.
            </p>
            <div className={`${styles.buttons} animate-in animate-in-delay-3`}>
              <a href="/support" className={styles.downloadButton}>Ask about early access</a>
              <a href="#features" className={styles.learnButton}>Learn More</a>
            </div>
          </div>
          <div className={`${styles.heroImage} animate-in animate-in-delay-2`}>
            <div className={styles.phoneFrame}>
              <img
                src="/clubhouse-golf-map.jpg"
                alt="Clubhouse Golf hole map showing 216 yards to the middle of the green, with back and front distances"
                className={styles.appScreenshot}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Features</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📍</div>
              <h3>Live Yardages</h3>
              <p>Distance to the front, middle and back of the green from wherever you are standing.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🗺️</div>
              <h3>Hole Maps</h3>
              <p>Greens, bunkers and water drawn from OpenStreetMap, with a target line you can read at a glance.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎙️</div>
              <h3>Voice Scoring</h3>
              <p>Say &ldquo;bogey, two putts, missed the fairway left.&rdquo; Score, putts and fairway fill in. With no signal, it saves when you are back online.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📋</div>
              <h3>Full Scorecard</h3>
              <p>Par, yardage for every tee, handicap and your running score to par, front nine and back nine.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📊</div>
              <h3>Stats That Matter</h3>
              <p>Putts, fairways and greens in regulation for every round, and your average and best over time.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⛳</div>
              <h3>Start Without an Account</h3>
              <p>Tee off in seconds as a guest. Sign in with Apple or email when you want your rounds on every device.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>In the App</h2>
          <div className={styles.gallery}>
            <figure className={styles.galleryItem}>
              <div className={styles.phoneFrame}>
                <img src="/clubhouse-golf-map.jpg" alt="Hole map with live yardages" className={styles.appScreenshot} />
              </div>
              <figcaption className={styles.galleryCaption}>
                <strong>The hole</strong>
                Distance to the green, front to back, with the hole drawn out.
              </figcaption>
            </figure>
            <figure className={styles.galleryItem}>
              <div className={styles.phoneFrame}>
                <img src="/clubhouse-golf-score.jpg" alt="Score entry for hole 1 with score, putts and fairway" className={styles.appScreenshot} />
              </div>
              <figcaption className={styles.galleryCaption}>
                <strong>The score</strong>
                Score, putts, fairway and a note, right over the map.
              </figcaption>
            </figure>
            <figure className={styles.galleryItem}>
              <div className={styles.phoneFrame}>
                <img src="/clubhouse-golf-card.jpg" alt="Scorecard showing par, yards and handicap for each hole" className={styles.appScreenshot} />
              </div>
              <figcaption className={styles.galleryCaption}>
                <strong>The card</strong>
                A real scorecard that fills in as you play.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className={styles.supportSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Questions?</h2>
          <p className={styles.supportText}>
            Clubhouse Golf is in beta. Want to try it, or have a course that needs fixing? Get in touch.
          </p>
          <a href="/support" className={styles.supportButton}>Contact Me</a>
        </div>
      </section>
    </div>
  )
}
