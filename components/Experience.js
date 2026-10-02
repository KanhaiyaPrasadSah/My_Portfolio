"use client";

import { experience } from "../app/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <h2 className="font-display text-3xl sm:text-4xl text-paper mb-14">
          Experience
        </h2>

        <div className="space-y-12">
          {experience.map((e) => (
            <div
              key={e.org}
              className="grid sm:grid-cols-[220px_1fr] gap-4 sm:gap-10 relative pl-6 sm:pl-0"
            >
              <span className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-amber sm:hidden" />
              <div>
                <p className="font-display text-lg text-paper">{e.org}</p>
                <p className="font-mono text-[12px] text-mute mt-1">{e.period}</p>
              </div>
              <div>
                <p className="text-teal text-sm mb-3">{e.role}</p>
                <ul className="space-y-2">
                  {e.points.map((pt) => (
                    <li
                      key={pt}
                      className="text-mute text-[15px] leading-relaxed flex gap-3"
                    >
                      <span className="text-amber mt-[2px]">›</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
