"use client";

const links = [
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-line/70 bg-ink/85 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-mono text-sm text-paper tracking-tight hover:text-amber transition-colors"
        >
          kanhaiya<span className="text-amber">@</span>dev
          <span className="text-mute">:~$</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 font-mono text-[13px] text-mute">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-paper transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="font-mono text-[13px] border border-line px-3 py-1.5 text-paper hover:border-amber hover:text-amber transition-colors"
        >
          say hi
        </a>
      </div>
    </header>
  );
}
