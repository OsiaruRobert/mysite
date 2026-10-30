const SERVICES = [
  {
    title: "Software Development",
    desc: "Custom-built applications designed around how your organisation actually works — not a template you have to bend to fit.",
    items: [
      "Web & desktop applications",
      "APIs and third-party integrations",
      "Payment, records & workflow automation",
      "Database design and reporting dashboards",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Web Design & Development",
    desc: "Fast, responsive, accessible websites that look credible on every screen and turn visitors into enquiries.",
    items: [
      "Corporate & brand websites",
      "Landing pages and campaign sites",
      "E-commerce and booking platforms",
      "SEO foundations, analytics & performance tuning",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="3" />
        <line x1="2" y1="9" x2="22" y2="9" />
        <circle cx="5.5" cy="6.5" r="0.6" fill="currentColor" />
        <circle cx="8" cy="6.5" r="0.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Intranet Development",
    desc: "Private internal platforms that connect your staff, centralise information and remove the daily friction of paper and spreadsheets.",
    items: [
      "Staff portals & role-based access",
      "Document management & internal search",
      "Approval workflows and internal messaging",
      "Secure hosting, backups & maintenance",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="2" />
        <rect x="14" y="3" width="7" height="7" rx="2" />
        <rect x="3" y="14" width="7" height="7" rx="2" />
        <rect x="14" y="14" width="7" height="7" rx="2" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head section-head--center" data-reveal>
          <span className="eyebrow">What we do</span>
          <h2>Three core services. One reliable team.</h2>
          <p>
            Every engagement is scoped, designed and delivered end-to-end by Osiaru Tech —
            from the first conversation to post-launch support.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <article className="service" data-reveal style={{ "--d": `${i * 100}ms` }} key={s.title}>
              <div className="service__icon" aria-hidden="true">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul className="service__list">
                {s.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
