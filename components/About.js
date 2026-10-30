const VALUES = [
  { title: "Clear communication", desc: "Plain-language updates, realistic timelines and no disappearing acts mid-project." },
  { title: "Security first", desc: "Encrypted connections, sensible access control and secure handling of your data." },
  { title: "Built to last", desc: "Clean, documented code you own outright — no vendor lock-in, no black boxes." },
  { title: "Genuine support", desc: "Maintenance, updates and a real person to call when something needs attention." },
];

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
         strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function About() {
  return (
    <section className="section section--soft" id="about">
      <div className="container">
        <div className="about">
          <div className="about__panel" data-reveal>
            <h3>Registration details</h3>
            <ul className="about__facts">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                     strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                <div>
                  <strong>Business Name</strong>
                  <span>OSIARU TECH</span>
                </div>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                     strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2 4 6v6c0 5 3.4 9.2 8 10 4.6-.8 8-5 8-10V6z" />
                </svg>
                <div>
                  <strong>Registration No.</strong>
                  <span>BN 9874730</span>
                </div>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                     strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 21h18" />
                  <path d="M5 21V7l7-4 7 4v14" />
                  <path d="M9 21v-6h6v6" />
                </svg>
                <div>
                  <strong>Registered Under</strong>
                  <span>Companies and Allied Matters Act 2020</span>
                </div>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                     strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
                <div>
                  <strong>Founder</strong>
                  <span>Believe Robert Osiaru</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="about__body" data-reveal style={{ "--d": "120ms" }}>
            <span className="eyebrow">About Osiaru Tech</span>
            <h2>A registered Nigerian software firm with an engineer&apos;s mindset.</h2>

            <p>
              Osiaru Tech is a business name duly registered with the Corporate Affairs
              Commission of the Federal Republic of Nigeria, founded by Believe Robert Osiaru.
              We serve clients across Nigeria.
            </p>
            <p>
              We started with a simple observation: too many organisations are held back by
              software that was never built for them. Off-the-shelf tools that almost fit.
              Spreadsheets doing the work of a database. Websites that look fine but convert
              nobody. Our job is to replace that with systems designed around your actual
              processes — and to stay around long after launch.
            </p>

            <div className="values">
              {VALUES.map((v) => (
                <div className="value" key={v.title}>
                  <h4><Check />{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
