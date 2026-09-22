import Image from "next/image";
import Link from "next/link";
import {
  getAdjacentProjects,
  type FeaturedProject,
} from "@/content/projects";
import { ArrowLeftIcon, ArrowUpRightIcon } from "@/components/icons";
import { ProjectArt } from "@/components/ProjectArt";
import { SocialLinks } from "@/components/SocialLinks";

type CaseStudyProps = {
  project: FeaturedProject;
};

export function CaseStudy({ project }: CaseStudyProps) {
  const { prev, next } = getAdjacentProjects(project.slug);

  return (
    <article className="mx-auto min-h-screen max-w-3xl px-6 py-10 sm:px-8 sm:py-16">
      <header className="flex items-center justify-between gap-4">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
        >
          <ArrowLeftIcon className="size-4" />
          Back to work
        </Link>
        <SocialLinks />
      </header>

      <p className="mt-14 font-mono text-[0.72rem] tracking-[0.14em] text-accent uppercase">
        {project.index} / {project.kicker}
      </p>
      <h1 className="mt-4 font-serif text-5xl tracking-tight text-ink sm:text-6xl">
        {project.title}
      </h1>
      <p className="mt-6 text-lg leading-8 text-muted">{project.caseStudy.lede}</p>
      <p className="mt-4 font-mono text-[0.72rem] text-dim">
        {project.year} · {project.status}
      </p>

      <div className="mt-10 overflow-hidden rounded-sm border border-line">
        {project.image ? (
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={1100}
            height={688}
            className="h-auto w-full"
            priority
          />
        ) : project.art ? (
          <ProjectArt kind={project.art} title={project.title} />
        ) : null}
      </div>

      <dl className="mt-10 grid gap-6 border-y border-line py-8 sm:grid-cols-3">
        <div>
          <dt className="font-mono text-[0.68rem] tracking-[0.12em] text-accent uppercase">
            Problem
          </dt>
          <dd className="mt-2 text-sm leading-6 text-muted">{project.problem}</dd>
        </div>
        <div>
          <dt className="font-mono text-[0.68rem] tracking-[0.12em] text-accent uppercase">
            Approach
          </dt>
          <dd className="mt-2 text-sm leading-6 text-muted">
            {project.approach}
          </dd>
        </div>
        <div>
          <dt className="font-mono text-[0.68rem] tracking-[0.12em] text-accent uppercase">
            Shipped
          </dt>
          <dd className="mt-2 text-sm leading-6 text-muted">{project.shipped}</dd>
        </div>
      </dl>

      <div className="mt-12 space-y-10">
        {project.caseStudy.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-serif text-3xl text-ink">{section.heading}</h2>
            <div className="mt-4 space-y-4 text-[1.02rem] leading-8 text-muted">
              {section.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      {project.gallery && project.gallery.length > 0 ? (
        <div className="mt-12 grid gap-4">
          {project.gallery.map((frame) => (
            <figure key={frame.src} className="overflow-hidden border border-line">
              <Image
                src={frame.src}
                alt={frame.alt}
                width={1100}
                height={688}
                className="h-auto w-full"
              />
              <figcaption className="px-4 py-3 text-sm text-dim">
                {frame.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      ) : null}

      <p className="mt-12 font-serif text-2xl italic leading-snug text-ink">
        {project.caseStudy.closing}
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
        <ul className="flex flex-wrap gap-2">
          {project.stack.map((tag) => (
            <li key={tag} className="tag rounded-sm">
              {tag}
            </li>
          ))}
        </ul>
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-[#1a1408] transition-colors hover:bg-accent-soft"
        >
          {project.repoLabel}
          <ArrowUpRightIcon className="size-4" />
        </a>
      </div>

      <nav
        aria-label="More case studies"
        className="mt-16 grid gap-4 border-t border-line pt-8 sm:grid-cols-2"
      >
        {prev ? (
          <Link
            href={`/work/${prev.slug}`}
            className="border border-line px-4 py-4 transition-colors hover:border-accent/40"
          >
            <p className="font-mono text-[0.68rem] tracking-wider text-dim uppercase">
              Previous
            </p>
            <p className="mt-2 font-serif text-2xl text-ink">{prev.title}</p>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/work/${next.slug}`}
            className="border border-line px-4 py-4 text-right transition-colors hover:border-accent/40"
          >
            <p className="font-mono text-[0.68rem] tracking-wider text-dim uppercase">
              Next
            </p>
            <p className="mt-2 font-serif text-2xl text-ink">{next.title}</p>
          </Link>
        ) : null}
      </nav>
    </article>
  );
}
