"use client";

import { projects } from "../app/data";

const statusColor = {
  Live: "text-teal border-teal/40",
  Published: "text-amber border-amber/40",
  Archived: "text-mute border-line",
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="flex items-baseline justify-between flex-wrap gap-4 mb-14">
          <h2 className="font-display text-3xl sm:text-4xl text-paper">
            Build log
          </h2>
          <span className="font-mono text-[13px] text-mute">
            {projects.length} projects, most recent first
          </span>
        </div>

        <div className="border-t border-line">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group grid sm:grid-cols-[90px_1fr] gap-6 sm:gap-10 py-10 border-b border-line"
            >
              <div className="font-mono text-[13px] text-mute">{p.date}</div>

              <div>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="font-display text-2xl text-paper group-hover:text-amber transition-colors">
                    {p.title}
                  </h3>
                  <span
                    className={`font-mono text-[11px] border px-2 py-0.5 rounded-sm ${
                      statusColor[p.status] || "text-mute border-line"
                    }`}
                  >
                    {p.status}
                  </span>
                </div>

                <p className="max-w-2xl text-mute text-[15px] leading-relaxed">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[12px] text-mute border border-line px-2 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-5">
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[13px] text-teal hover:text-amber transition-colors underline underline-offset-4"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
