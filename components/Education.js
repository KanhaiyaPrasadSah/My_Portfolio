"use client";

import { education } from "../app/data";

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <h2 className="font-display text-3xl sm:text-4xl text-paper mb-14">
          Education
        </h2>

        <div className="grid sm:grid-cols-3 gap-8">
          {education.map((ed) => (
            <div key={ed.school} className="border border-line p-6">
              <p className="font-display text-lg text-paper leading-snug">
                {ed.school}
              </p>
              <p className="font-mono text-[12px] text-mute mt-2">
                {ed.location}
              </p>
              <div className="mt-5 pt-5 border-t border-line">
                <p className="text-teal text-sm">{ed.program}</p>
                <p className="text-mute text-sm mt-1">{ed.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
