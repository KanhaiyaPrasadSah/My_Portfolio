"use client";

import { profile } from "../app/data";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-end">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl text-paper text-balance">
              Have something to build?
            </h2>
            <p className="mt-5 max-w-md text-mute text-[15px] leading-relaxed">
              I'm looking for an entry-level developer role — happy to talk
              about a project, an opening, or just IoT and web stuff in
              general.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="inline-block mt-8 font-display text-2xl text-amber border-b border-amber/40 hover:border-amber pb-1 transition-colors"
            >
              {profile.email}
            </a>
          </div>

          <div className="font-mono text-sm space-y-3 sm:justify-self-end">
            <div className="flex gap-3">
              <span className="text-mute w-16">phone</span>
              <div className="text-paper">
                {profile.phones.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-mute w-16">github</span>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper hover:text-amber transition-colors"
              >
                github.com/KanhaiyaPrasadSah
              </a>
            </div>
            <div className="flex gap-3">
              <span className="text-mute w-16">linkedin</span>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper hover:text-amber transition-colors"
              >
                in/kanhaiya-sah
              </a>
            </div>
            <div className="flex gap-3">
              <span className="text-mute w-16">based</span>
              <span className="text-paper">{profile.location}</span>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-line flex flex-wrap justify-between gap-4 font-mono text-[12px] text-mute">
          <span>© {new Date().getFullYear()} Kanhaiya Prasad Sah</span>
          <span>built with Next.js &amp; Tailwind</span>
        </div>
      </div>
    </section>
  );
}
