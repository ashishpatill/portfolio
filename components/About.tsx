import { about } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24"
    >
      <Reveal>
        <div id="about-heading">
          <SectionHeading index="01" title="About" />
        </div>
        <div className="mt-8 space-y-5 text-[1.02rem] leading-7 text-muted">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
          <p className="text-ink/90">{about.studio}</p>
        </div>
      </Reveal>
    </section>
  );
}
