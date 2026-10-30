export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__grid-bg" aria-hidden="true"></div>
      <div className="container">
        <div className="hero__inner">
          <div className="hero__copy">
            <span className="eyebrow eyebrow--light">CAC Registered · BN 9874730</span>

            <h1>
              We build <span className="grad">software</span> that moves your business forward.
            </h1>

            <p className="hero__lead">
              Osiaru Tech is a Nigerian software firm founded by Believe Robert Osiaru. We
              design and develop custom applications, high-performing websites and secure
              intranet platforms for organisations that need technology to work — reliably,
              and on time.
            </p>

            <div className="hero__actions">
              <a href="#contact" className="btn btn--primary">
                Start a project
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                     strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="#services" className="btn btn--ghost">Explore our services</a>
            </div>

            <ul className="hero__meta">
              {["Software Development", "Web Design", "Intranet Development"].map((item) => (
                <li key={item}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
                       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="hero__visual">
            <div className="float-badge float-badge--tl">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
                   strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2 4 6v6c0 5 3.4 9.2 8 10 4.6-.8 8-5 8-10V6z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              Secure by design
            </div>

            <div className="code-card">
              <div className="code-card__bar" aria-hidden="true">
                <i></i><i></i><i></i>
                <em>osiaru-tech / ship.ts</em>
              </div>
              <pre>
                <code>
                  <span className="c-com">// Osiaru Tech — Nigeria</span>{"\n"}
                  <span className="c-key">const</span> <span className="c-fn">osiaru</span> = createFirm({"{"}{"\n"}
                  {"  "}focus:   [<span className="c-str">&quot;software&quot;</span>, <span className="c-str">&quot;web&quot;</span>, <span className="c-str">&quot;intranet&quot;</span>],{"\n"}
                  {"  "}clients: <span className="c-num">100</span>% <span className="c-str">&quot;satisfaction&quot;</span>,{"\n"}
                  {"}"});{"\n\n"}
                  <span className="c-key">export default async function</span> <span className="c-fn">ship</span>(idea) {"{"}{"\n"}
                  {"  "}<span className="c-key">const</span> plan = <span className="c-key">await</span> osiaru.<span className="c-fn">discover</span>(idea);{"\n"}
                  {"  "}<span className="c-key">const</span> build = <span className="c-key">await</span> osiaru.<span className="c-fn">engineer</span>(plan);{"\n"}
                  {"  "}<span className="c-key">return</span> osiaru.<span className="c-fn">launch</span>(build);{"\n"}
                  {"}"}
                </code>
              </pre>
            </div>

            <div className="float-badge float-badge--br">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
                   strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              Built to scale
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
