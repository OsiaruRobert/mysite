"use client";

import { useState } from "react";
import { projects } from "./projects";
import ProjectModal from "./ProjectModal";

export default function Work() {
  const [active, setActive] = useState(null);

  return (
    <section className="section section--soft" id="work">
      <div className="container">
        <div className="section-head section-head--center" data-reveal>
          <span className="eyebrow">Previous projects</span>
          <h2>A few things we&apos;ve shipped</h2>
          {/* <p>Edit the <code>projects</code> array in components/projects.js — add, remove or update a project and it appears here automatically.</p> */}
        </div>

        {projects.length === 0 ? (
          <p className="work-empty">Projects will appear here once added to the list.</p>
        ) : (
          <div className="work-grid">
            {projects.map((p, i) => {
              const mediaStyle = p.image ? { backgroundImage: `url('${p.image}')` } : undefined;
              const hasPlay = Boolean(p.video || p.gif);
              return (
                <article
                  className="project-card"
                  key={`${p.title}-${i}`}
                  tabIndex={0}
                  role="button"
                  aria-label={`View details for ${p.title}`}
                  onClick={() => setActive(p)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActive(p);
                    }
                  }}
                >
                  <div className="project-card__media" style={mediaStyle}>
                    <span className="project-card__year">{p.year}</span>
                    {hasPlay ? <span className="project-card__play" aria-hidden="true">▶</span> : null}
                  </div>
                  <div className="project-card__body">
                    <span className="project-card__category">{p.category}</span>
                    <h3>{p.title}</h3>
                    <p>{p.summary}</p>
                    {p.tags?.length ? (
                      <div className="project-card__tags">
                        {p.tags.map((t) => <span key={t}>{t}</span>)}
                      </div>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
