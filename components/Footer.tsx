import { site } from "@/content/site";
import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line py-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <p className="max-w-md text-sm leading-6 text-dim">
          Designed and built as an original site, in the spirit of editorial
          one-pagers, not as a fork. {site.name}, {site.location}.
        </p>
        <SocialLinks className="lg:hidden" />
      </div>
      <p className="mt-6 font-mono text-[0.7rem] tracking-wider text-dim uppercase">
        © {new Date().getFullYear()} {site.name} · MIT
      </p>
    </footer>
  );
}
