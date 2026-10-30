const STEPS = [
  { num: "01", title: "Discover", desc: "We listen first — your goals, your constraints, your users — then define scope and success in writing." },
  { num: "02", title: "Design", desc: "Wireframes and interface design so you can see and approve the product before a line of code is written." },
  { num: "03", title: "Build", desc: "Development in short, reviewable cycles, with working previews shared regularly for your feedback." },
  { num: "04", title: "Launch & Support", desc: "Deployment, staff training, documentation and ongoing maintenance so the system keeps performing." },
];

export default function Process() {
  return (
    <section className="section section--dark" id="process">
      <div className="container">
        <div className="section-head section-head--center" data-reveal>
          <span className="eyebrow eyebrow--light">How we work</span>
          <h2>A process you can follow at every stage.</h2>
          <p>
            No mystery, no endless silence. You always know what is being built, why,
            and what happens next.
          </p>
        </div>

        <div className="process-grid">
          {STEPS.map((s, i) => (
            <article className="step" data-reveal style={{ "--d": `${i * 90}ms` }} key={s.num}>
              <span className="step__num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
