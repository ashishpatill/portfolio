import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line py-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <p className="max-w-md text-sm leading-6 text-dim">
          Designed and built as an original site, in the spirit of editorial
          one-pagers, not as a fork. {site.name}, {site.location}.
        </p>
        <nav aria-label="Contact">
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="text-muted transition-colors hover:text-accent"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="text-muted transition-colors hover:text-accent"
              >
                Email
              </a>
            </li>
            <li>
              <a
                href={site.resumePath}
                download="Ashish_Pisey_iOS_Resume.pdf"
                className="text-muted transition-colors hover:text-accent"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer noopener"
                className="text-muted transition-colors hover:text-accent"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <p className="mt-6 font-mono text-[0.7rem] tracking-wider text-dim uppercase">
        © {new Date().getFullYear()} {site.name} · MIT
      </p>
    </footer>
  );
}
