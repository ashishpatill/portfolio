import type { ReactNode } from "react";
import type { ProjectArtKind } from "@/content/projects";

type ProjectArtProps = {
  kind: ProjectArtKind;
  title: string;
};

export function ProjectArt({ kind, title }: ProjectArtProps) {
  switch (kind) {
    case "harness":
      return <HarnessArt title={title} />;
    case "kit":
      return <KitArt title={title} />;
    case "civic":
      return <CivicArt title={title} />;
    default: {
      const exhaustive: never = kind;
      return exhaustive;
    }
  }
}

function ArtFrame({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div
      className="relative overflow-hidden rounded-sm border border-line bg-bg-panel"
      aria-hidden="true"
    >
      <div className="flex items-center gap-2 border-b border-line px-3 py-2">
        <span className="size-2 rounded-full bg-line" />
        <span className="size-2 rounded-full bg-line" />
        <span className="size-2 rounded-full bg-accent/70" />
        <span className="ml-2 font-mono text-[0.65rem] tracking-wider text-dim uppercase">
          {title}
        </span>
      </div>
      {children}
    </div>
  );
}

function HarnessArt({ title }: { title: string }) {
  return (
    <ArtFrame title={title}>
      <div className="space-y-2 p-5 font-mono text-[0.72rem] leading-6 text-muted">
        <p className="text-dim">task: create hello.txt containing exactly ok</p>
        <p>
          <span className="text-accent">model.decide</span> write_file
        </p>
        <p>
          <span className="text-accent">gate.check</span> allow
        </p>
        <p>tool.write · workspace/hello.txt</p>
        <p>
          <span className="text-ink">proof.exactBytes</span> true · hex 6f6b
        </p>
        <p className="text-dim">stop</p>
      </div>
    </ArtFrame>
  );
}

function KitArt({ title }: { title: string }) {
  const skills = [
    "/cost-check",
    "/verify-aci",
    "/rsi",
    "/route-task",
    "/plan-execute",
    "/session-handoff",
  ];

  return (
    <ArtFrame title={title}>
      <div className="grid grid-cols-2 gap-2 p-5">
        {skills.map((skill) => (
          <div
            key={skill}
            className="border border-line bg-bg px-3 py-3 font-mono text-[0.7rem] text-muted"
          >
            {skill}
          </div>
        ))}
      </div>
    </ArtFrame>
  );
}

function CivicArt({ title }: { title: string }) {
  return (
    <ArtFrame title={title}>
      <div className="p-5">
        <div className="border border-line bg-[#f3efe4] px-4 py-5 text-[#2a2418]">
          <p className="font-serif text-lg">Notice</p>
          <p className="mt-2 text-[0.7rem] tracking-wide uppercase opacity-60">
            Due date · amount · office
          </p>
          <div className="mt-4 space-y-2">
            <div className="h-1.5 w-4/5 bg-[#2a2418]/20" />
            <div className="h-1.5 w-3/5 bg-[#2a2418]/20" />
            <div className="h-1.5 w-2/3 bg-[#2a2418]/20" />
          </div>
          <p className="mt-5 font-mono text-[0.65rem] tracking-wider uppercase">
            Explains. Does not file.
          </p>
        </div>
      </div>
    </ArtFrame>
  );
}
