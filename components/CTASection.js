export default function CTASection() {
  return (
    <section className="section--soft" style={{ paddingTop: 100 }}>
      <div className="cta-band">
        <div className="container">
          <div className="cta-band__inner" data-reveal>
            <div className="cta-band__text">
              <h2>Have a project in mind? Let&apos;s scope it together.</h2>
              <p>
                Tell us what you&apos;re trying to build or fix. We&apos;ll come back with an honest
                assessment, a clear approach and a realistic timeline — no obligation.
              </p>
            </div>
            <div className="cta-band__actions">
              <a href="#contact" className="btn btn--primary">
                Request a quote
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                     strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="#services" className="btn btn--ghost">See services</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
