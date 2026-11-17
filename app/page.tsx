import EmailButton from '@/components/EmailButton';

const LINKEDIN = 'https://www.linkedin.com/in/mussaddiq-mahmood/';

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 1 0 5.3 6.94 1.97 1.97 0 0 0 5.25 3ZM20.44 13.2c0-3.07-1.64-4.97-4.2-4.97a3.63 3.63 0 0 0-3.27 1.8V8.5H9.72V20h3.38v-6.08c0-1.6.76-2.56 2.03-2.56 1.2 0 1.93.84 1.93 2.56V20h3.38v-6.8Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="page">
      <div className="id">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="avatar" src="/avatar.webp" alt="" width={48} height={48} />
        <p>
          <b>Mussaddiq Mahmood</b>
          <small>Full-stack developer · 5+ years</small>
        </p>
      </div>

      <h1 className="display">
        I turn manual work into{' '}
        <span className="sel">
          simple
          <i aria-hidden="true" />
          <i aria-hidden="true" />
          <i aria-hidden="true" />
          <i aria-hidden="true" />
        </span>{' '}
        <b>web apps.</b>
      </h1>

      <ul className="services">
        <li>Dashboards</li>
        <li>Booking &amp; ordering</li>
        <li>Customer portals</li>
        <li>AI features</li>
      </ul>

      <section className="ask" aria-labelledby="ask-title">
        <h2 id="ask-title">Let&apos;s discuss your problem.</h2>
        <div className="buttons">
          <EmailButton>
            <MailIcon />
            Email
          </EmailButton>
          <a className="btn" href={LINKEDIN} target="_blank" rel="noopener">
            <LinkedInIcon />
            LinkedIn
          </a>
        </div>
      </section>

      <p className="stack label">React · Next.js · Node.js</p>
    </main>
  );
}
