import { Metadata } from 'next'
import styles from './support.module.css'

export const metadata: Metadata = {
  title: 'Support - Scott McMurray',
  description: 'Get help with any of my applications. Contact information and support resources.',
}

export default function SupportPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={`${styles.title} animate-in`}>Contact</h1>
          <p className={`${styles.subtitle} animate-in animate-in-delay-1`}>
            For app support or general inquiries.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>💬</div>
              <h2>General Inquiries</h2>
              <p>Questions, ideas, or just want to say hello?</p>
              <a href="mailto:hello@scottymcmurray.com" className={styles.contactLink}>
                hello@scottymcmurray.com
              </a>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>📧</div>
              <h2>App Support</h2>
              <p>For bug reports, feature requests, or help with any of my apps.</p>
              <a href="mailto:support@scottymcmurray.com" className={styles.contactLink}>
                support@scottymcmurray.com
              </a>
            </div>
          </div>

          <div className={styles.faqSection}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            
            <div className={styles.faq}>
              <h3>How do I report a bug?</h3>
              <p>Send me an email at support@scottymcmurray.com with details about the issue, including what you were doing when it occurred and any error messages you saw. Screenshots are always helpful!</p>
            </div>

            <div className={styles.faq}>
              <h3>Can I request a new feature?</h3>
              <p>Absolutely! I love hearing from users. Send your feature ideas to support@scottymcmurray.com. While I can't implement every request, I carefully consider all feedback.</p>
            </div>

            <div className={styles.faq}>
              <h3>Is my data private and secure?</h3>
              <p>Yes. Privacy is a core principle in all my applications. Your data stays on your device whenever possible, and I never track or sell your information. See my <a href="/privacy">Privacy Policy</a> for details.</p>
            </div>

            <div className={styles.faq}>
              <h3>How often are apps updated?</h3>
              <p>I regularly release updates with bug fixes, performance improvements, and new features based on user feedback. Updates are submitted as soon as they're ready and pass quality checks.</p>
            </div>

            <div className={styles.faq}>
              <h3>Do you offer refunds?</h3>
              <p>Refunds for App Store purchases are handled by Apple. You can request a refund through your purchase history in the App Store or at reportaproblem.apple.com within 90 days of purchase.</p>
            </div>

            <div className={styles.faq}>
              <h3>Which devices are supported?</h3>
              <p>My iOS apps support the latest versions of iOS and iPadOS. The web app works on any modern browser (Chrome, Safari, Firefox, Edge) on desktop and mobile devices.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
