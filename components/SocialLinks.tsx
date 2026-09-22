import { site } from "@/content/site";
import { GitHubIcon, XIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

type SocialLinksProps = {
  className?: string;
};

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <ul className={cn("flex items-center gap-4", className)}>
      <li>
        <a
          href={site.github}
          target="_blank"
          rel="noreferrer noopener"
          className="text-muted transition-colors hover:text-accent"
          aria-label="GitHub profile"
        >
          <GitHubIcon className="size-5" />
        </a>
      </li>
      <li>
        <a
          href={site.x}
          target="_blank"
          rel="noreferrer noopener"
          className="text-muted transition-colors hover:text-accent"
          aria-label="X profile"
        >
          <XIcon className="size-5" />
        </a>
      </li>
    </ul>
  );
}
