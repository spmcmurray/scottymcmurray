import { Metadata } from 'next'
import styles from '../legal.module.css'

export const metadata: Metadata = {
  title: 'Privacy Policy - Scott McMurray',
  description: 'Privacy policy for Scott McMurray applications. Learn how your data is collected, used, and protected.',
  openGraph: {
    title: 'Privacy Policy - Scott McMurray',
    description: 'Privacy policy for Scott McMurray applications',
    type: 'website',
  },
  alternates: {
    canonical: '/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.updated}>Last updated: October 17, 2026</p>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>Introduction</h2>
            <p>
              At Scott McMurray ("I", "me", or "my"), I take your privacy seriously. This Privacy Policy 
              explains how information is collected, used, and protected when you use my applications and services.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Information Collection</h2>
            <p>
              My applications are designed with privacy as a core principle. I only collect data that is 
              necessary to provide and improve the functionality of my applications.
            </p>
            
            <h3>iOS Applications</h3>
            <p>
              Some of my iOS applications use Firebase/Firestore to store and sync your data:
            </p>
            <ul>
              <li><strong>What's Collected:</strong> User-generated content and app usage data necessary for the app to function (e.g., your saved items, preferences, or settings).</li>
              <li><strong>Purpose:</strong> To enable cloud sync across your devices and improve app functionality.</li>
              <li><strong>Storage:</strong> Data is stored securely in Google's Firebase/Firestore infrastructure.</li>
              <li><strong>Your Control:</strong> You can delete your data at any time through the app settings or by contacting me.</li>
            </ul>

            <h3>Web Application</h3>
            <p>
              My web application uses the OpenAI API to provide AI-powered features:
            </p>
            <ul>
              <li><strong>What's Collected:</strong> Text or prompts you submit to use AI features.</li>
              <li><strong>Purpose:</strong> To process your requests and provide AI-generated responses that enhance the app's functionality.</li>
              <li><strong>Processing:</strong> Your inputs are sent to OpenAI's servers for processing. OpenAI's data usage is governed by their <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and <a href="https://openai.com/policies/api-data-usage-policies" target="_blank" rel="noopener noreferrer">API Data Usage Policies</a>.</li>
              <li><strong>Retention:</strong> I do not permanently store your AI interactions beyond what's necessary for app functionality.</li>
            </ul>

            <h3>What I Don't Collect</h3>
            <ul>
              <li><strong>No Tracking:</strong> No third-party analytics or ad tracking. TENFOLD's optional anonymized plan results are off unless you turn them on.</li>
              <li><strong>No Advertising:</strong> My apps do not contain advertisements or third-party advertising networks.</li>
              <li><strong>No Sale of Data:</strong> I will never sell, rent, or share your personal information with third parties for marketing purposes.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>TENFOLD</h2>
            <p>
              TENFOLD is a workout app. This section explains, in plain language, how it handles your information.
            </p>
            <ul>
              <li><strong>Sign-in:</strong> Sign in with Apple or email. Sign-in is handled by Firebase Authentication (Google).</li>
              <li><strong>Stored data:</strong> Workout history, training plans, strength scores, and profile name are stored in Google Firebase (Cloud Firestore), tied to your account.</li>
              <li><strong>Apple Health:</strong> TENFOLD writes completed workouts to Apple Health and does not read any other Health data. Health data is never used for advertising and never shared with third parties.</li>
              <li><strong>Optional anonymized plan results:</strong> Off by default, and sent only if you turn them on. They include plan length, sessions completed vs scheduled, weekly scores, and a coarse age range, sex, and experience level if entered. They never include name, email, photo, account ID, or device ID. Because these records are not linked to you, they cannot be identified or deleted per user.</li>
              <li><strong>Subscriptions:</strong> TENFOLD Pro is billed by Apple through the App Store. No card or payment details are held by TENFOLD.</li>
              <li><strong>Account deletion:</strong> You can delete your account and all associated data in the app (You tab → Delete account) or by emailing <a href="mailto:scottymcmurray@gmail.com">scottymcmurray@gmail.com</a>.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Data Storage and Transmission</h2>
            <p>
              <strong>iOS Apps:</strong> When you use cloud sync features, your data is transmitted securely 
              to and stored in Google Firebase/Firestore. This enables your data to sync across all your devices 
              where you're signed in to the app.
            </p>
            <p>
              <strong>Web App:</strong> When you use AI features, your prompts and inputs are transmitted to 
              OpenAI's servers for processing. The responses are displayed to you and may be temporarily stored 
              to provide app functionality.
            </p>
            <p>
              <strong>Local Storage:</strong> Some data may also be stored locally on your device for offline 
              functionality and performance optimization.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Third-Party Services</h2>
            <p>
              My applications integrate with the following third-party services. When you use my apps, 
              you are also subject to the privacy policies of these providers:
            </p>
            <ul>
              <li><strong>Google Firebase/Firestore (iOS Apps):</strong> Used for cloud data storage and sync. <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">Firebase Privacy Policy</a></li>
              <li><strong>OpenAI (Web App):</strong> Used for AI-powered features. <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer">OpenAI Privacy Policy</a></li>
              <li><strong>Apple iCloud (iOS Apps):</strong> May be used for device-level backups. <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Apple Privacy Policy</a></li>
            </ul>
            <p>
              I carefully select third-party services that maintain strong privacy and security practices. 
              However, I am not responsible for the privacy practices of these external services.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Security</h2>
            <p>
              I take the security of your data seriously and implement appropriate measures to protect it:
            </p>
            <ul>
              <li><strong>Encryption in Transit:</strong> All data transmitted to Firebase and OpenAI is encrypted using industry-standard HTTPS/TLS protocols.</li>
              <li><strong>Secure Storage:</strong> Firebase/Firestore uses encryption at rest to protect stored data.</li>
              <li><strong>Device Security:</strong> I recommend using strong passwords, biometric authentication, and keeping your device's operating system up to date.</li>
              <li><strong>Limited Access:</strong> Only you have access to your data through your authenticated account.</li>
            </ul>
            <p>
              While I implement security best practices, no method of transmission or storage is 100% secure. 
              I cannot guarantee absolute security but continuously work to protect your information.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Data Retention and Deletion</h2>
            <p>
              <strong>Your Rights:</strong> You have the right to access, modify, or delete your data at any time.
            </p>
            <ul>
              <li><strong>iOS Apps:</strong> You can delete your data through the app settings or by contacting me at privacy@scottymcmurray.com.</li>
              <li><strong>Web App:</strong> AI conversation data is not permanently stored. Temporary processing data is automatically deleted according to OpenAI's retention policies.</li>
              <li><strong>Account Deletion:</strong> If you wish to completely delete your account and all associated data, contact me at privacy@scottymcmurray.com.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Children's Privacy</h2>
            <p>
              My applications do not knowingly collect any information from children under the age of 13. 
              If you believe a child has provided information through my apps, please contact me immediately 
              at scottymcmurray@gmail.com, and I will take steps to delete that information.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Changes to This Policy</h2>
            <p>
              I may update this Privacy Policy from time to time. Any changes will be posted on this page with 
              an updated "Last updated" date. Continued use of my applications after changes constitutes acceptance 
              of the updated policy.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Contact</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact me at:
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
