import Image from "next/image";
import { hackathonEntries, hackathonsIntro } from "@/content/hackathons";
import { ArrowUpRightIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Hackathons() {
  return (
    <section
      id="hackathons"
      aria-labelledby="hackathons-heading"
      className="scroll-mt-24"
    >
      <Reveal>
        <div id="hackathons-heading">
          <SectionHeading index="04" title="Hackathons" />
        </div>
        <p className="mt-4 max-w-xl text-[0.98rem] leading-7 text-muted">
          {hackathonsIntro}
        </p>
      </Reveal>

      <ol className="mt-10 space-y-8">
        {hackathonEntries.map((entry) => (
          <li key={entry.title}>
            <Reveal>
              <article className="project-card overflow-hidden rounded-sm">
                <div className="border-b border-line px-5 py-4 sm:px-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <p className="font-mono text-[0.72rem] tracking-[0.12em] text-accent uppercase">
                      {entry.event}
                    </p>
                    <p className="font-mono text-[0.72rem] text-dim">
                      {entry.year}
                    </p>
                  </div>
                  <h3 className="mt-3 font-serif text-3xl text-ink">
                    {entry.title}
                  </h3>
                  <p className="mt-1 font-mono text-[0.72rem] tracking-[0.12em] text-dim uppercase">
                    {entry.detail}
                  </p>
                  <p className="mt-3 max-w-2xl leading-7 text-muted">
                    {entry.summary}
                  </p>
                </div>

                <div className="border-b border-line">
                  <Image
                    src={entry.image.src}
                    alt={entry.image.alt}
                    width={1100}
                    height={688}
                    className="h-auto w-full object-cover"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-6">
                  <ul className="flex flex-wrap gap-x-6 gap-y-2">
                    {entry.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="group inline-flex items-center gap-1.5 text-sm text-ink transition-colors hover:text-accent"
                        >
                          {link.label}
                          <ArrowUpRightIcon className="external-arrow size-3.5" />
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p className="font-mono text-[0.7rem] text-dim">
                    {entry.stack}
                  </p>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
