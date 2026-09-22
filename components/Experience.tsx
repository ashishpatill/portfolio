import { experience } from "@/content/experience";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-24"
    >
      <Reveal>
        <div id="experience-heading">
          <SectionHeading index="02" title="Experience" />
        </div>
        <ol className="mt-10 space-y-12">
          {experience.map((item) => (
            <li
              key={item.id}
              className="grid gap-4 sm:grid-cols-[8.5rem_1fr] sm:gap-8"
            >
              <p className="font-mono text-[0.72rem] tracking-[0.08em] text-dim uppercase">
                {item.period}
              </p>
              <div>
                <h3 className="font-serif text-2xl text-ink">{item.title}</h3>
                <p className="mt-1 text-sm text-muted">
                  {item.org} · {item.place}
                </p>
                <p className="mt-3 leading-7 text-muted">{item.summary}</p>
                <ul className="mt-4 space-y-2">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="relative pl-4 text-[0.95rem] leading-7 text-muted before:absolute before:top-[0.7rem] before:left-0 before:size-1.5 before:rounded-full before:bg-accent/70"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
