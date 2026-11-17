'use client';

import { useEffect, useState } from 'react';

const EMAIL = 'mussaddiqmahmood7@gmail.com';
const SUBJECT = "Let's discuss my problem";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}`;
const GMAIL_WEB = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent(SUBJECT)}`;

/**
 * Phones: mailto opens the Gmail (or default mail) app directly.
 * Computers: open a Gmail compose window in a new tab, with my address filled in.
 */
export default function EmailButton({ children }: { children: React.ReactNode }) {
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    setDesktop(window.matchMedia('(hover: hover) and (pointer: fine)').matches);
  }, []);

  return (
    <a
      className="btn primary"
      href={desktop ? GMAIL_WEB : MAILTO}
      {...(desktop ? { target: '_blank', rel: 'noopener' } : {})}
    >
      {children}
    </a>
  );
}
