import { contact, site } from "@/content/site";
import { ArrowUpRightIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24"
    >
      <Reveal>
        <div id="contact-heading">
          <SectionHeading index="05" title="Contact" />
        </div>
        <h3 className="mt-8 font-serif text-4xl text-ink sm:text-5xl">
          {contact.heading}
        </h3>
        <p className="mt-5 max-w-xl text-[1.05rem] leading-8 text-muted">
          {contact.body}
        </p>
        <p className="mt-4 max-w-xl text-sm leading-7 text-dim">
          {contact.cta}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-[#1a1408] transition-colors hover:bg-accent-soft"
          >
            GitHub
            <ArrowUpRightIcon className="size-4" />
          </a>
          <a
            href={site.x}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-ink transition-colors hover:border-accent/50"
          >
            @{site.handle === "ashishpatill" ? "inqusit" : site.handle}
            <ArrowUpRightIcon className="size-4" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
