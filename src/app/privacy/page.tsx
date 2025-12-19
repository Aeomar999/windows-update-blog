export const metadata = {
  title: 'Privacy Policy - WindowsUpdateBlog',
  description: 'Our commitment to protecting your privacy.',
};

export default function PrivacyPage() {
  return (
    <div className="container" style={{ paddingTop: '3rem', maxWidth: '800px' }}>
      <h1 className="title" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--text-header)' }}>Privacy Policy</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Last Updated: {new Date().toLocaleDateString()}</p>

      <div className="content" style={{ lineHeight: '1.6', color: 'var(--foreground)' }}>
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-header)' }}>1. Introduction</h2>
          <p>
            Welcome to the WindowsUpdateBlog ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. 
            This Privacy Policy explains what information we collect, how we use it, and your rights in relation to it.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-header)' }}>2. Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide to us when you subscribe to our newsletter, post in our community section, or contact us. 
            This may include:
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
            <li>Email addresses (for newsletters)</li>
            <li>Usernames and content (for community posts)</li>
            <li>Usage data (browsing history on our site via local storage preferences)</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-header)' }}>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
            <li>Send you newsletters and updates (if subscribed).</li>
            <li>Display your community posts and comments.</li>
            <li>Personalize your feed based on your selected interests.</li>
            <li>Improve our website performance and user experience.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-header)' }}>4. Cookies and Local Storage</h2>
          <p>
            We use local storage on your device to save your personalization preferences (e.g., "My Feed" settings) and community interactions (e.g., liked posts). 
            We do not track your activity across other websites.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-header)' }}>5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at privacy@windowsupdateblog.com.
          </p>
        </section>
      </div>
    </div>
  );
}
