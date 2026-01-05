import { Metadata } from 'next'
import styles from '../legal.module.css'

export const metadata: Metadata = {
  title: 'Terms of Service - Scott McMurray',
  description: 'Terms of service for Scott McMurray applications. Review the terms and conditions for using our apps.',
  openGraph: {
    title: 'Terms of Service - Scott McMurray',
    description: 'Terms of service for Scott McMurray applications',
    type: 'website',
  },
  alternates: {
    canonical: '/terms',
  },
}

export default function TermsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Terms of Service</h1>
        <p className={styles.updated}>Last updated: November 24, 2025</p>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using any application created by Scott McMurray ("I", "me", or "my"), you agree 
              to be bound by these Terms of Service. If you do not agree to these terms, please do not use my applications.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Use License</h2>
            <p>
              I grant you a personal, non-exclusive, non-transferable license to use my applications for your 
              personal, non-commercial use, subject to these terms.
            </p>
            <p><strong>You may not:</strong></p>
            <ul>
              <li>Modify, reverse engineer, or decompile the applications</li>
              <li>Remove any copyright or proprietary notices</li>
              <li>Use the applications for any illegal purpose</li>
              <li>Attempt to gain unauthorized access to any systems or networks</li>
              <li>Redistribute or resell the applications</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Disclaimer of Warranties</h2>
            <p>
              My applications are provided "as is" without warranties of any kind, either express or implied. 
              I do not warrant that:
            </p>
            <ul>
              <li>The applications will be error-free or uninterrupted</li>
              <li>Defects will be corrected</li>
              <li>The applications are free of viruses or harmful components</li>
              <li>The results obtained from using the applications will be accurate or reliable</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, I shall not be liable for any indirect, incidental, 
              special, consequential, or punitive damages resulting from your use or inability to use my applications, 
              even if advised of the possibility of such damages.
            </p>
          </section>

          <section className={styles.section}>
            <h2>User Content</h2>
            <p>
              You retain all rights to any content you create using my applications. I do not claim ownership 
              of your content. You are solely responsible for your content and any consequences of creating or sharing it.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Updates and Modifications</h2>
            <p>
              I reserve the right to modify, suspend, or discontinue any application at any time without notice. 
              I may also update these Terms of Service periodically. Continued use after changes constitutes acceptance 
              of the updated terms.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Apple App Store</h2>
            <p>
              For applications distributed through the Apple App Store, you acknowledge and agree that:
            </p>
            <ul>
              <li>These terms are between you and me, not Apple</li>
              <li>Apple has no obligation to provide maintenance or support</li>
              <li>Apple is not responsible for any product warranties</li>
              <li>Apple is not responsible for addressing any claims you or third parties have</li>
              <li>Apple is a third-party beneficiary of these terms</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of the State of Ohio, 
              United States, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Contact</h2>
            <p>
              If you have any questions about these Terms of Service, please contact me at:
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:scottymcmurray@gmail.com">scottymcmurray@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
