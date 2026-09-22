import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudy } from "@/components/CaseStudy";
import { SkipLink } from "@/components/SkipLink";
import { featuredProjects, getFeaturedBySlug } from "@/content/projects";
import { site } from "@/content/site";

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return featuredProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getFeaturedBySlug(slug);
  if (!project) {
    return { title: "Not found" };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.title} · ${site.name}`,
      description: project.summary,
      url: `/work/${project.slug}`,
    },
  };
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = getFeaturedBySlug(slug);
  if (!project) {
    notFound();
  }

  return (
    <>
      <SkipLink />
      <main id="content">
        <CaseStudy project={project} />
      </main>
    </>
  );
}
