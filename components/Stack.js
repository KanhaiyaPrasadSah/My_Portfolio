"use client";

import { stack } from "../app/data";

export default function Stack() {
  return (
    <section id="stack" className="py-24 sm:py-32 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl text-paper text-balance">
              What I build with
            </h2>
            <p className="mt-4 max-w-sm text-mute text-[15px] leading-relaxed">
              A JavaScript-first stack for the web, SQL and document databases
              depending on the shape of the data, and a handful of tools I
              reach for outside the browser.
            </p>
          </div>

          <div className="divide-y divide-line">
            {stack.map((group) => (
              <div
                key={group.group}
                className="py-5 grid sm:grid-cols-[140px_1fr] gap-4 items-baseline"
              >
                <span className="font-mono text-[13px] text-teal">
                  {group.group}
                </span>
                <div className="flex flex-wrap gap-x-2 gap-y-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-[15px] text-paper after:content-['/'] after:ml-2 after:text-line last:after:content-none"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
