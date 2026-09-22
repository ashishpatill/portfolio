import { site } from "@/content/site";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

type SocialLinksProps = {
  className?: string;
};

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <ul className={cn("flex items-center gap-4", className)}>
      <li>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 text-muted transition-colors hover:text-accent"
          aria-label="LinkedIn"
        >
          <LinkedInIcon className="size-5" />
          <span className="text-sm">LinkedIn</span>
        </a>
      </li>
      <li>
        <a
          href={site.github}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 text-muted transition-colors hover:text-accent"
          aria-label="GitHub profile"
        >
          <GitHubIcon className="size-5" />
          <span className="text-sm">GitHub</span>
        </a>
      </li>
      <li>
        <a
          href={site.x}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 text-muted transition-colors hover:text-accent"
          aria-label="X profile"
        >
          <XIcon className="size-5" />
          <span className="text-sm">X</span>
        </a>
      </li>
    </ul>
  );
}
