type SectionHeadingProps = {
  index: string;
  title: string;
};

export function SectionHeading({ index, title }: SectionHeadingProps) {
  return (
    <h2 className="flex items-baseline gap-3 text-sm font-semibold tracking-[0.16em] text-ink uppercase">
      <span className="font-mono text-accent">{index}</span>
      {title}
    </h2>
  );
}
