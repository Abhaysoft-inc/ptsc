import { FiGithub, FiGlobe, FiTerminal } from "react-icons/fi";

export function LandingFooter() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 md:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-brand to-brand-3 text-white">
            <FiTerminal className="size-4" />
          </span>
          <div className="text-sm">
            <div className="font-heading font-semibold">PTSC · KNIT Sultanpur</div>
            <div className="text-muted-foreground">Programming &amp; Tech Skills Club</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {[FiGithub, FiGlobe, FiGithub].map((Icon, index) => (
            <a
              key={index}
              href="#"
              className="grid size-9 place-items-center rounded-lg border border-white/10 text-muted-foreground transition-colors hover:border-white/20 hover:text-foreground"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} PTSC. Built by students, for students.
        </p>
      </div>
    </footer>
  );
}