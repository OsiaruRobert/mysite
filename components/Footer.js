
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <a href="#top" className="brand" aria-label="Osiaru Tech — home">
              <span className="brand__mark">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.png" alt="Osiaru Tech logo" width={38} height={38} />
              </span>
              <span className="brand__name">
                Osiaru Tech
                <small>Software Firm</small>
              </span>
            </a>
            <p className="footer-about">
              A CAC-registered Nigerian software firm, founded by Believe Robert Osiaru,
              building custom software, websites and intranet platforms for organisations.
            </p>
            <span className="footer-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                   strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              CAC Registered · BN 9874730
            </span>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About us</a></li>
              <li><a href="#process">Our process</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Software Development</a></li>
              <li><a href="#services">Web Design</a></li>
              <li><a href="#services">Intranet Development</a></li>
              <li><a href="#services">Maintenance &amp; Support</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href={siteConfig.url} target="_blank" rel="noopener">osiaru.top</a></li>
              <li><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
              <li><a href={`tel:${siteConfig.phone}`}>+2349064498317</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {year} Osiaru Tech. Founded by Believe Robert Osiaru. All rights reserved.
            Registered as a business name under the Companies and Allied Matters Act 2020 —
            Registration No. 9874730.
          </p>
        </div>
      </div>
    </footer>
  );
}
