import { iosArchive, notesArchive } from "@/content/projects";
import { ArrowUpRightIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";

export function Archive() {
  return (
    <section aria-labelledby="archive-heading" className="scroll-mt-24">
      <Reveal>
        <h2
          id="archive-heading"
          className="flex items-baseline gap-3 text-sm font-semibold tracking-[0.16em] text-ink uppercase"
        >
          <span className="font-mono text-accent">04</span>
          More projects
        </h2>
        <p className="mt-4 max-w-xl text-[0.98rem] leading-7 text-muted">
          Selected iOS craft, then a quieter learning archive. Links only.
        </p>
      </Reveal>

      <Reveal className="mt-8">
        <h3 className="font-mono text-[0.72rem] tracking-[0.12em] text-dim uppercase">
          iOS craft
        </h3>
        <ul className="mt-4 divide-y divide-line border-y border-line">
          {iosArchive.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-baseline justify-between gap-4 py-3.5"
              >
                <span>
                  <span className="text-ink transition-colors group-hover:text-accent">
                    {item.title}
                  </span>
                  <span className="mt-1 block text-sm text-muted sm:ml-0">
                    {item.description}
                  </span>
                </span>
                <span className="flex shrink-0 items-center gap-2 font-mono text-[0.7rem] text-dim">
                  {item.stack}
                  <ArrowUpRightIcon className="external-arrow size-3.5" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal className="mt-10">
        <h3 className="font-mono text-[0.72rem] tracking-[0.12em] text-dim uppercase">
          Learning notes
        </h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {notesArchive.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer noopener"
                className="block border border-line px-4 py-4 transition-colors hover:border-accent/40"
              >
                <p className="text-ink">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {item.description}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
