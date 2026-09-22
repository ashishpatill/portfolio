import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/content/projects";
import { ArrowUpRightIcon } from "@/components/icons";
import { ProjectArt } from "@/components/ProjectArt";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function FeaturedWork() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-24"
    >
      <Reveal>
        <div id="work-heading">
          <SectionHeading index="03" title="Selected work" />
        </div>
        <p className="mt-4 max-w-xl text-[0.98rem] leading-7 text-muted">
          Public repositories only. Each card is a case, not a landing-page
          metric. Open source or local dogfood. No invented live products.
        </p>
      </Reveal>

      <ol className="mt-10 space-y-8">
        {featuredProjects.map((project) => (
          <li key={project.slug}>
            <Reveal>
              <article className="project-card overflow-hidden rounded-sm">
                <div className="border-b border-line px-5 py-4 sm:px-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <p className="font-mono text-[0.72rem] tracking-[0.12em] text-accent uppercase">
                      {project.index} / {project.kicker}
                    </p>
                    <p className="font-mono text-[0.72rem] text-dim">
                      {project.year} · {project.status}
                    </p>
                  </div>
                  <h3 className="mt-3 font-serif text-3xl text-ink">
                    <Link
                      href={`/work/${project.slug}`}
                      className="transition-colors hover:text-accent"
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <p className="mt-3 max-w-2xl leading-7 text-muted">
                    {project.summary}
                  </p>
                </div>

                <div className="border-b border-line">
                  {project.image ? (
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      width={1100}
                      height={688}
                      className="h-auto w-full object-cover"
                    />
                  ) : project.art ? (
                    <ProjectArt kind={project.art} title={project.title} />
                  ) : null}
                </div>

                <div className="grid gap-5 px-5 py-5 text-sm leading-6 text-muted sm:grid-cols-3 sm:px-6">
                  <div>
                    <p className="font-mono text-[0.68rem] tracking-[0.12em] text-accent uppercase">
                      Problem
                    </p>
                    <p className="mt-2">{project.problem}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[0.68rem] tracking-[0.12em] text-accent uppercase">
                      Approach
                    </p>
                    <p className="mt-2">{project.approach}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[0.68rem] tracking-[0.12em] text-accent uppercase">
                      Shipped
                    </p>
                    <p className="mt-2">{project.shipped}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line px-5 py-4 sm:px-6">
                  <ul className="flex flex-wrap gap-2">
                    {project.stack.map((tag) => (
                      <li key={tag} className="tag rounded-sm">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-4 text-sm">
                    <Link
                      href={`/work/${project.slug}`}
                      className="text-ink transition-colors hover:text-accent"
                    >
                      Case study
                    </Link>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1 text-muted transition-colors hover:text-accent"
                    >
                      GitHub
                      <ArrowUpRightIcon className="external-arrow size-4" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
