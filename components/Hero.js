"use client";

import { profile } from "../app/data";

export default function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-24 sm:pt-48 sm:pb-32 overflow-hidden">
      <div className="absolute inset-0 grid-fade pointer-events-none" />
      <div className="mx-auto max-w-6xl px-6 sm:px-10 relative grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <div>
          <p className="font-mono text-sm text-teal mb-6">
            {profile.location}
          </p>
          <h1 className="font-display font-semibold text-[13vw] leading-[0.95] sm:text-6xl md:text-7xl text-paper text-balance">
            Kanhaiya
            <br />
            Prasad Sah
          </h1>
          <p className="mt-6 font-display text-xl sm:text-2xl text-mute">
            {profile.role}
          </p>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-mute">
            {profile.tagline}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="bg-amber text-ink font-mono text-sm px-5 py-3 hover:bg-paper transition-colors"
            >
              See the work
            </a>
            <a
              href="mailto:ksah1674@gmail.com"
              className="border border-line font-mono text-sm px-5 py-3 text-paper hover:border-amber hover:text-amber transition-colors"
            >
              Email me
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="border border-line bg-panel rounded-sm overflow-hidden shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-[#0A0D13]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3a3f4f]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#3a3f4f]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#3a3f4f]" />
              <span className="ml-2 font-mono text-[12px] text-mute">whoami.sh</span>
            </div>
            <div className="p-6 font-mono text-[13px] leading-7 text-mute">
              <p><span className="text-teal">$</span> whoami</p>
              <p className="text-paper">Kanhaiya Prasad Sah — full-stack developer</p>
              <p className="mt-3"><span className="text-teal">$</span> cat stack.txt</p>
              <p className="text-paper">React.js · Next.js · Node.js · Express.js</p>
              <p className="text-paper">MongoDB · PostgreSQL</p>
              <p className="mt-3"><span className="text-teal">$</span> ls side-projects/</p>
              <p className="text-paper">smart-gate-ai/  todo-app/  attendance-tracker/</p>
              <p className="mt-3 flex items-center gap-1">
                <span className="text-teal">$</span>
                <span className="cursor-blink">▍</span>
              </p>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 hidden sm:block border border-line bg-panel px-4 py-2 font-mono text-[12px] text-amber node-dot">
            B.Tech IT · 2026
          </div>
        </div>
      </div>
    </section>
  );
}
