'use client'

import { useState } from 'react'
import LegalModal from './LegalModal'

const PRIVACY_POLICY = `
<p>At MaxWinMania, protecting your personal information matters to us. This Privacy Policy explains what data we collect, how we use it, when it may be shared, and the rights you have regarding your information when using our website and services.</p>
<p>By accessing or using our platform, you acknowledge that your information may be processed as described below.</p>

<h3>1. Who We Are</h3>
<p>MaxWinMania acts as the data controller for the personal information collected through our website and services.</p>
<p>If you have any questions regarding this Privacy Policy or how your data is handled, you may contact us at: <a href="mailto:support@maxwinmania.com">support@maxwinmania.com</a></p>

<h3>2. Information We Collect</h3>
<p>Depending on how you interact with our platform, we may collect different types of personal information. This may include:</p>
<ul>
  <li>Full name</li>
  <li>Email address</li>
  <li>Phone number</li>
  <li>IP address and device information</li>
  <li>Account and registration details</li>
  <li>Communication history with our support team</li>
  <li>Marketing preferences and interaction data</li>
  <li>Publicly available information connected to social media signups</li>
</ul>
<p>We primarily collect non-sensitive personal data necessary to provide and improve our services.</p>

<h3>3. How We Use Your Information</h3>
<p>We process personal data for a variety of business and operational purposes, including:</p>
<ul>
  <li>Creating and managing user accounts</li>
  <li>Providing customer support</li>
  <li>Sending important account or service updates</li>
  <li>Improving website functionality and user experience</li>
  <li>Conducting analytics and internal reporting</li>
  <li>Preventing fraud and unauthorized activity</li>
  <li>Delivering promotional and marketing communications</li>
  <li>Complying with legal and regulatory obligations</li>
</ul>
<p>Our processing activities are based on legitimate business interests, contractual necessity, legal obligations, and where required, user consent.</p>

<h3>4. Account Registration</h3>
<p>When registering for an account, you may be asked to provide personal details such as your name, email address, and phone number. This information is used to:</p>
<ul>
  <li>Set up and manage your account</li>
  <li>Verify user information</li>
  <li>Deliver requested services</li>
  <li>Maintain internal records</li>
  <li>Improve platform security and performance</li>
</ul>
<p>Without certain information, we may not be able to provide access to some parts of our services.</p>

<h3>5. Customer Support &amp; Communications</h3>
<p>If you contact our support team, we may store the information shared during those interactions, including emails, messages, or other communications. We use this information to:</p>
<ul>
  <li>Respond to inquiries</li>
  <li>Resolve technical or account-related issues</li>
  <li>Improve our services and support experience</li>
  <li>Monitor service quality and platform performance</li>
</ul>

<h3>6. Marketing &amp; Promotional Messages</h3>
<p>With your consent where required, we may send marketing content through email, SMS, push notifications, or other electronic channels. These communications may include:</p>
<ul>
  <li>Promotions and offers</li>
  <li>New features or service updates</li>
  <li>Personalized recommendations</li>
  <li>Partner or affiliate campaigns we believe may interest you</li>
</ul>
<p>We may also analyze how users engage with marketing materials to improve future campaigns. You may unsubscribe at any time through the unsubscribe link in communications or by contacting us directly. Service-related messages may still be sent even if marketing preferences are disabled.</p>

<h3>7. Social Media Integrations</h3>
<p>If you register or connect your account through social media platforms, we may receive certain publicly available profile information, including:</p>
<ul>
  <li>Name</li>
  <li>Profile photo</li>
  <li>Date of birth</li>
  <li>Public profile details</li>
  <li>Friends or connection lists</li>
</ul>
<p>This information is used solely for account setup, platform functionality, analytics, and user experience improvements.</p>

<h3>8. Sharing Information With Third Parties</h3>
<p>We may share personal information with trusted third parties when necessary, including:</p>
<ul>
  <li>Hosting and infrastructure providers</li>
  <li>Payment processors</li>
  <li>Fraud prevention and verification services</li>
  <li>Analytics and marketing providers</li>
  <li>Professional advisers, auditors, and contractors</li>
  <li>Business partners and affiliated companies</li>
</ul>
<p>We may also disclose information when required by law. All third-party providers are expected to process personal data securely and only for authorized purposes.</p>

<h3>9. International Data Transfers</h3>
<p>Your information may be transferred to and processed in countries outside the European Economic Area (EEA). Whenever such transfers occur, we take appropriate safeguards to ensure your personal information remains protected in accordance with applicable data protection laws.</p>

<h3>10. Data Retention &amp; Security</h3>
<p>We retain personal information only for as long as reasonably necessary to fulfill the purposes outlined in this Privacy Policy. We implement technical and organizational security measures to protect personal data against unauthorized access, loss, misuse, alteration, or disclosure. While we strive to protect your information, no online system can guarantee absolute security.</p>

<h3>11. Minors</h3>
<p>Our services are intended strictly for individuals aged 18 years or older. We do not knowingly collect personal information from minors. If we become aware that information has been submitted by someone under the legal age requirement, we reserve the right to remove the related data and suspend associated accounts.</p>

<h3>12. Your Rights</h3>
<p>Depending on your jurisdiction and applicable privacy laws, you may have the right to:</p>
<ul>
  <li>Access the personal data we hold about you</li>
  <li>Request correction of inaccurate information</li>
  <li>Request deletion of your personal data</li>
  <li>Restrict or object to certain processing activities</li>
  <li>Withdraw previously provided consent</li>
  <li>Request data portability</li>
  <li>File a complaint with a data protection authority</li>
</ul>
<p>To exercise any of these rights, contact us at: <a href="mailto:support@maxwinmania.com">support@maxwinmania.com</a></p>

<h3>13. Third-Party Websites</h3>
<p>Our platform may contain links to external websites or third-party services. We are not responsible for the privacy practices, content, or security of third-party websites. We encourage users to review the privacy policies of any external services they interact with.</p>

<h3>14. Cookies</h3>
<p>MaxWinMania uses cookies and similar tracking technologies to improve functionality, analyze traffic, personalize content, and support marketing activities. Cookies may be used to:</p>
<ul>
  <li>Remember user preferences</li>
  <li>Improve website performance</li>
  <li>Measure campaign effectiveness</li>
  <li>Deliver personalized content and advertisements</li>
</ul>
<p>By continuing to use our website, you consent to the use of cookies. You may manage or disable cookies through your browser settings at any time.</p>

<h3>15. Updates to This Policy</h3>
<p>We may update this Privacy Policy periodically to reflect changes to our services, technologies, legal obligations, or business operations. The latest version will always be available on our website, and continued use of our services after updates constitutes acceptance of the revised policy.</p>
`

const TERMS_CONDITIONS = `
<p>These Terms &amp; Conditions govern your access to and use of MaxWinMania and all related services available through our platform.</p>
<p>By accessing, browsing, or using this website, you confirm that you have read, understood, and accepted these Terms &amp; Conditions in full. If you do not agree with any part of these terms, you must discontinue use of the website immediately.</p>

<h3>1. Intellectual Property</h3>
<p>All materials published on this website, including but not limited to logos, graphics, branding, text, website design, and other content, are protected by intellectual property laws and remain the property of MaxWinMania or its respective licensors and partners.</p>
<p>You may not copy, reproduce, distribute, modify, republish, or commercially exploit any content from this website without prior written permission. Unauthorized use of any material may violate copyright, trademark, and other applicable laws.</p>

<h3>2. Eligibility</h3>
<p>This website and its services are intended exclusively for users who:</p>
<ul>
  <li>Are at least 18 years of age (or the legal gambling age in their jurisdiction)</li>
  <li>Are legally permitted to access gambling-related content</li>
  <li>Are physically located in jurisdictions where such access is lawful</li>
</ul>
<p>By using this website, you confirm that you meet these eligibility requirements.</p>

<h3>3. Affiliate Disclosure</h3>
<p>Some links displayed on MaxWinMania are affiliate links. This means that we may receive compensation or commission when users visit third-party websites, create accounts, or make purchases through those links.</p>
<p>All interactions with third-party operators, platforms, or services are undertaken at your own discretion and risk. MaxWinMania does not own, operate, or control third-party services linked from this website and cannot guarantee the accuracy, availability, or reliability of external platforms.</p>

<h3>4. Third-Party Services</h3>
<p>Our website may contain references and links to external websites operated by third parties. Once you leave MaxWinMania, you acknowledge that:</p>
<ul>
  <li>Different terms and privacy policies may apply</li>
  <li>We are not responsible for third-party content, products, promotions, or services</li>
  <li>Any losses, disputes, or damages arising from third-party usage remain solely between you and the external provider</li>
</ul>
<p>We encourage users to review the terms and policies of any external website before engaging with their services.</p>

<h3>5. Limitation of Liability</h3>
<p>MaxWinMania operates as an affiliate marketing and informational platform. To the fullest extent permitted by applicable law, we shall not be held liable for:</p>
<ul>
  <li>Financial losses</li>
  <li>Damages or interruptions</li>
  <li>Third-party conduct</li>
  <li>Inaccuracies or outdated information</li>
  <li>Technical errors or website downtime</li>
  <li>User decisions based on content found on this website</li>
</ul>
<p>All use of the website and any third-party services accessed through it is entirely at your own risk.</p>

<h3>6. Responsible Gambling</h3>
<p>We strongly encourage responsible gambling practices at all times. Gambling should be treated as entertainment and not as a method of generating income. If you believe gambling may be negatively affecting you or someone you know, we encourage seeking professional support from responsible gambling organizations available in your jurisdiction.</p>

<h3>7. Modifications to These Terms</h3>
<p>We reserve the right to update, modify, or replace these Terms &amp; Conditions at any time without prior notice. Any changes become effective immediately upon publication on the website. Continued use of MaxWinMania following updates constitutes acceptance of the revised Terms.</p>

<h3>8. User Acceptance</h3>
<p>By accessing and using this website, you confirm that:</p>
<ul>
  <li>You have read and understood these Terms &amp; Conditions</li>
  <li>You agree to comply with all applicable laws and regulations</li>
  <li>You accept these Terms in their entirety</li>
</ul>
<p>If you do not accept these Terms, you must stop using the website immediately.</p>

<h3>9. Marketing Communications</h3>
<p>By subscribing to services, newsletters, or promotional offers associated with MaxWinMania, you consent to receiving marketing communications via:</p>
<ul>
  <li>Email</li>
  <li>SMS</li>
  <li>Push notifications</li>
  <li>Other electronic communication channels</li>
</ul>
<p>These communications may include offers and promotions from MaxWinMania and selected partners. You may unsubscribe at any time using the unsubscribe options provided or by contacting us directly.</p>

<h3>10. Contact Information</h3>
<p>If you have questions regarding these Terms &amp; Conditions or require further clarification, you may contact us at: <a href="mailto:support@maxwinmania.com">support@maxwinmania.com</a></p>
`

export default function LegalButtons() {
  const [open, setOpen] = useState<'privacy' | 'terms' | null>(null)

  return (
    <>
      <div className="footer-legal-buttons">
        <button className="footer-legal-btn" onClick={() => setOpen('privacy')}>
          Privacy Policy
        </button>
        <span className="footer-legal-divider">·</span>
        <button className="footer-legal-btn" onClick={() => setOpen('terms')}>
          Terms &amp; Conditions
        </button>
      </div>

      {open === 'privacy' && (
        <LegalModal
          title="Privacy Policy"
          content={PRIVACY_POLICY}
          onClose={() => setOpen(null)}
        />
      )}

      {open === 'terms' && (
        <LegalModal
          title="Terms & Conditions"
          content={TERMS_CONDITIONS}
          onClose={() => setOpen(null)}
        />
      )}
    </>
  )
}
