export const metadata = {
  title: 'Terms of Use - WindowsUpdateBlog',
  description: 'Rules and regulations for using our website.',
};

export default function TermsPage() {
  return (
    <div className="container" style={{ paddingTop: '3rem', maxWidth: '800px' }}>
      <h1 className="title" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--text-header)' }}>Terms of Use</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Last Updated: {new Date().toLocaleDateString()}</p>

      <div className="content" style={{ lineHeight: '1.6', color: 'var(--foreground)' }}>
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-header)' }}>1. Agreement to Terms</h2>
          <p>
            By accessing and using WindowsUpdateBlog, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-header)' }}>2. Content Disclaimer</h2>
          <p>
            The content provided on WindowsUpdateBlog is for informational purposes only. We are not affiliated with Microsoft Corporation. 
            While we strive for accuracy, we make no warranties regarding the completeness or reliability of the information.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-header)' }}>3. User Conduct</h2>
          <p>
            When using our Community features, you agree not to:
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
            <li>Post spam, malware, or illegal content.</li>
            <li>Harass, bully, or intimidate other users.</li>
            <li>Impersonate any person or entity.</li>
          </ul>
          <p style={{ marginTop: '0.5rem' }}>
            We reserve the right to remove any content that violates these terms.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-header)' }}>4. Intellectual Property</h2>
          <p>
            "Microsoft", "Windows", and "Office" are trademarks of the Microsoft group of companies. All other content, logos, and design elements on this site are property of WindowsUpdateBlog unless otherwise noted.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-header)' }}>5. Limitation of Liability</h2>
          <p>
            In no event shall WindowsUpdateBlog be liable for any indirect, consequential, or special damages arising out of or in connection with your use of the website or reliance on any information provided.
          </p>
        </section>
      </div>
    </div>
  );
}
