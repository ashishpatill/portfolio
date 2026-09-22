"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { nav, site, type NavId } from "@/content/site";
import { SocialLinks } from "@/components/SocialLinks";
import { cn } from "@/lib/cn";

const sectionIds = nav.map((item) => item.id);

export function SiteHeader() {
  const [active, setActive] = useState<NavId>("about");

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const id = visible?.target.id;
        if (id && sectionIds.includes(id as NavId)) {
          setActive(id as NavId);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    for (const element of elements) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col">
      <div className="sticky top-0 z-30 border-b border-line/80 bg-bg/80 px-5 py-3 backdrop-blur-md lg:hidden">
        <div className="flex items-center justify-between gap-3">
          <a href="#content" className="font-serif text-lg text-ink">
            {site.name}
          </a>
          <nav aria-label="Primary">
            <ul className="flex items-center gap-3">
              {nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={cn(
                      "text-[0.68rem] font-semibold tracking-[0.14em] uppercase",
                      active === item.id ? "text-accent" : "text-muted",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <header className="flex flex-1 flex-col justify-between px-6 pt-16 pb-10 sm:px-8 lg:px-0 lg:py-24">
        <div>
          <div className="flex items-center gap-4">
            <Image
              src={site.avatar}
              alt={`${site.name} portrait`}
              width={56}
              height={56}
              className="size-14 rounded-full border border-line object-cover"
              priority
            />
            <div>
              <p className="font-mono text-[0.7rem] tracking-[0.16em] text-accent uppercase">
                {site.location} · {site.availability}
              </p>
              <h1 className="font-serif text-4xl text-ink sm:text-5xl">
                {site.name}
              </h1>
            </div>
          </div>

          <p className="mt-6 max-w-md font-serif text-2xl leading-snug text-ink/95 italic [word-spacing:0.06em] sm:text-[1.7rem]">
            {site.headline}
          </p>
          <p className="mt-5 max-w-md text-[0.98rem] leading-7 text-muted">
            {site.blurb}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-[#1a1408] transition-colors hover:bg-accent-soft"
            >
              Email
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center rounded-full border border-line px-4 py-2 text-sm text-ink transition-colors hover:border-accent/50 hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href={site.resumePath}
              download="Ashish_Pisey_iOS_Resume.pdf"
              className="inline-flex items-center rounded-full border border-line px-4 py-2 text-sm text-ink transition-colors hover:border-accent/50 hover:text-accent"
            >
              Resume
            </a>
            <a
              href="#work"
              className="inline-flex items-center rounded-full px-3 py-2 text-sm text-muted transition-colors hover:text-ink"
            >
              Selected work
            </a>
          </div>

          <nav className="mt-14 hidden lg:block" aria-label="Primary">
            <ul className="flex flex-col gap-4">
              {nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={cn(
                      "nav-link",
                      active === item.id && "is-active",
                    )}
                    aria-current={active === item.id ? "location" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <SocialLinks className="mt-12 hidden lg:flex" />
      </header>
    </aside>
  );
}
