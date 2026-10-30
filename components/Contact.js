"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

export default function Contact() {
  const [status, setStatus] = useState(null); // { ok: boolean, message: string }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const service = form.service.value;
    const message = form.message.value.trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !emailOk || !service || !message) {
      setStatus({ ok: false, message: "Please complete all required fields with a valid email address." });
      return;
    }

    // NOTE: front-end only. Wire this up to your backend or a form
    // service (Formspree, Netlify Forms, an API route, etc.).
    setStatus({ ok: true, message: `Thank you, ${name.split(" ")[0]}. Your enquiry has been received — we'll be in touch shortly.` });
    form.reset();
  }

  return (
    <section className="section" id="contact" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="contact">
          <div className="contact__info" data-reveal>
            <span className="eyebrow">Get in touch</span>
            <h2>Let&apos;s talk about your next build.</h2>
            <p>
              Whether it&apos;s a brand-new platform, a website that needs to work harder, or an
              internal system your team is tired of working around — we&apos;d like to hear about it.
            </p>

            <ul className="contact-list">
              <li>
                <span className="contact-list__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z" />
                  </svg>
                </span>
                <div>
                  <strong>Website</strong>
                  <a href={siteConfig.url} target="_blank" rel="noopener">osiaru.top</a>
                </div>
              </li>
              <li>
                <span className="contact-list__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="3" />
                    <path d="m3 6 9 7 9-7" />
                  </svg>
                </span>
                <div>
                  <strong>Email</strong>
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </div>
              </li>
              <li>
                <span className="contact-list__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.4 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1z" />
                  </svg>
                </span>
                <div>
                  <strong>Phone / WhatsApp</strong>
                  <a href={`tel:${siteConfig.phone}`}>+234 906 449 8317</a>
                </div>
              </li>
              <li>
                <span className="contact-list__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <polyline points="12 7 12 12 15.5 14" />
                  </svg>
                </span>
                <div>
                  <strong>Business Hours</strong>
                  <span>Monday – Friday, 9:00am – 5:00pm (WAT)</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="form-card" data-reveal style={{ "--d": "120ms" }}>
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="name">Full name <span>*</span></label>
                  <input type="text" id="name" name="name" placeholder="e.g. Ada Johnson" required />
                </div>
                <div className="field">
                  <label htmlFor="email">Email address <span>*</span></label>
                  <input type="email" id="email" name="email" placeholder="you@company.com" required />
                </div>
              </div>

              <div className="form-row">
                <div className="field">
                  <label htmlFor="phone">Phone number</label>
                  <input type="tel" id="phone" name="phone" placeholder="+234 800 000 0000" />
                </div>
                <div className="field">
                  <label htmlFor="service">Service needed <span>*</span></label>
                  <select id="service" name="service" defaultValue="" required>
                    <option value="" disabled>Select a service</option>
                    <option>Software Development</option>
                    <option>Web Design &amp; Development</option>
                    <option>Intranet Development</option>
                    <option>Maintenance &amp; Support</option>
                    <option>Something else</option>
                  </select>
                </div>
              </div>

              <div className="field">
                <label htmlFor="message">Project details <span>*</span></label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us what you'd like to build, who it's for, and any deadlines you're working towards."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn--primary">
                Send enquiry
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                     strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>

              <p className="form-note">We usually respond within one business day.</p>
              {status ? (
                <p
                  className="form-status is-visible"
                  role="status"
                  aria-live="polite"
                  style={
                    status.ok
                      ? undefined
                      : { background: "rgba(220,76,76,0.09)", color: "#c0392b", borderColor: "rgba(220,76,76,0.3)" }
                  }
                >
                  {status.message}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
