import Link from "next/link";
import { site } from "@/content/site";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-6">
      <p className="font-mono text-[0.72rem] tracking-[0.14em] text-accent uppercase">
        404
      </p>
      <h1 className="mt-4 font-serif text-5xl text-ink">This page is not here.</h1>
      <p className="mt-4 leading-7 text-muted">
        The public record lives on the home page. If you were looking for a
        product URL that was never shipped, that is on purpose.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex w-fit items-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-[#1a1408]"
      >
        Back to {site.name}
      </Link>
    </main>
  );
}
