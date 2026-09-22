import { About } from "@/components/About";
import { Archive } from "@/components/Archive";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { SkipLink } from "@/components/SkipLink";

export default function HomePage() {
  return (
    <>
      <SkipLink />
      <div className="mx-auto min-h-screen max-w-6xl lg:grid lg:grid-cols-[minmax(17rem,38%)_minmax(0,1fr)] lg:gap-16 lg:px-12">
        <SiteHeader />
        <main
          id="content"
          className="flex-1 px-6 pb-16 sm:px-8 lg:px-0 lg:py-24"
        >
          <div className="space-y-28">
            <About />
            <Experience />
            <FeaturedWork />
            <Archive />
            <Contact />
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
}
