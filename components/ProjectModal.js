"use client";

import { useEffect, useRef } from "react";

export default function ProjectModal({ project, onClose }) {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  if (!project) {
    return <div className="project-modal" aria-hidden="true"></div>;
  }

  const p = project;
  let media;
  if (p.gif) {
    // eslint-disable-next-line @next/next/no-img-element
    media = <img src={p.gif} alt={p.title} />;
  } else if (p.video) {
    media = <video src={p.video} controls autoPlay muted playsInline loop />;
  } else if (p.image) {
    // eslint-disable-next-line @next/next/no-img-element
    media = <img src={p.image} alt={p.title} />;
  } else {
    media = <div className="project-modal__placeholder">{p.year}</div>;
  }

  return (
    <div className="project-modal is-open" aria-hidden="false">
      <div className="project-modal__backdrop" onClick={onClose}></div>
      <div className="project-modal__panel" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <button
          className="project-modal__close"
          type="button"
          aria-label="Close"
          ref={closeBtnRef}
          onClick={onClose}
        >
          &times;
        </button>
        <div className="project-modal__media">{media}</div>
        <div className="project-modal__body">
          <span className="project-card__category">{p.category}</span>
          <h3 id="modalTitle">{p.title}</h3>
          <p>{p.summary}</p>
          {p.tags?.length ? (
            <div className="project-card__tags">
              {p.tags.map((t) => <span key={t}>{t}</span>)}
            </div>
          ) : null}
          {p.url ? (
            <a
              className="btn btn--primary"
              href={p.url}
              target="_blank"
              rel="noopener"
              style={{ marginTop: 10 }}
            >
              View live project
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
