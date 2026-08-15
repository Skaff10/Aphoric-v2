import { Metadata } from "next";
import Link from "next/link";
import PixelImage from "@/components/PixelImage";
import ProjectGallery from "@/components/ProjectGallery";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Traken — Aphoric Case Study",
  description:
    "Traken demonstrates fast, clean, image-led ecommerce storefront built for direct-to-consumer accessories.",
};

export default function TrakenPage() {
  const project = {
    slug: "traken",
    title: "Traken",
    tag: "web platform",
    cover: "/project_images/traken/traken-aph.webp",
    images: [
      "/project_images/traken/traken-aph.webp",
      "/project_images/traken/one.webp",
      "/project_images/traken/two.webp",
    ],
  };

  const caseStudy = {
    sector: "Mobile and laptop accessories, ecommerce",
    type: "portfolio",
    stack: ["Next.js", "Vercel"],
    brief: [
      "A premium accessories brand needs a store that looks and feels premium. Cheap-looking product pages undercut trust before a customer even reads a description, especially for a brand selling on quality and design rather than price.",
    ],
    approach: [
      "An ecommerce storefront for a fictional accessories brand selling phone cases, laptop sleeves, and add-ons like AirTag holders. The site is built around clean product photography, category browsing by phone, laptop, and accessories, and a homepage that leans on lifestyle imagery and brand story instead of just grid after grid of products.",
      "We built out product collections, category pages, and a homepage flow designed to move visitors from browsing to a specific collection quickly, the kind of structure a real accessories brand would use to sell a $40 case as a design choice, not just a protective shell.",
    ],
    outcome: [
      "Traken shows what Aphoric can deliver for a direct-to-consumer brand that sells on look and feel: fast, clean, image-led ecommerce without unnecessary clutter.",
    ],
  };

  const nextProject = {
    slug: "pawsome",
    title: "Pawsome",
    tag: "web platform",
  };

  return (
    <main className="w-full flex flex-col items-center px-4 sm:px-6 mb-[clamp(96px,8.33vw,160px)]">
      {/* Back Button & Top Bar */}
      <section className="w-full max-w-510 mt-6 sm:mt-10 flex items-center justify-between">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-text hover:text-secondary transition-colors text-base sm:text-lg min-h-11 px-2"
        >
          <LuArrowLeft className="w-5 h-5" />
          <span>all projects</span>
        </Link>

   
      </section>

      {/* Hero Header */}
      <section className="w-full max-w-510 mt-8 sm:mt-12 flex flex-col items-start gap-4">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[clamp(64px,10.5vw,160px)] font-display leading-none text-secondary lowercase tracking-tight">
          {project.title}
        </h1>
        <p className="text-text text-xl sm:text-2xl md:text-3xl font-sans lowercase max-w-3xl">
          {project.tag}
        </p>
      </section>

      {/* Metadata Grid Bar */}
      <section className="w-full max-w-510 mt-10 sm:mt-14 pt-8 border-t border-text/20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col gap-1.5">
          <span className="text-text text-xs uppercase tracking-widest font-sans">
            industry / sector
          </span>
          <span className="text-secondary text-base sm:text-lg font-medium lowercase">
            {caseStudy.sector}
          </span>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-text text-xs uppercase tracking-widest font-sans">
            project type
          </span>
          <span className="text-secondary text-base sm:text-lg font-medium lowercase">
            portfolio project
          </span>
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2 lg:col-span-4 mt-2">
          <span className="text-text text-xs uppercase tracking-widest font-sans">
            technologies & stack
          </span>
          <div className="flex flex-wrap gap-2">
            {caseStudy.stack.map((item, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-full bg-secondary/5 border border-text/20 text-secondary text-xs sm:text-sm font-sans"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Cover Image */}
      <section className="w-full max-w-510 mt-10 sm:mt-14">
        <div className="overflow-hidden rounded-2xl border border-text/15 shadow-2xl">
          <PixelImage
            src={project.cover}
            alt={project.title}
            width={1600}
            height={900}
            startPixelSize={56}
            duration={2400}
            className="w-full h-auto object-cover aspect-video"
          />
        </div>
      </section>

      {/* Main Story Narrative */}
      <section className="w-full max-w-510 mt-16 sm:mt-24 flex flex-col gap-16 sm:gap-24">
        {/* Section 01: The Problem */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] gap-6 lg:gap-12 items-start border-t border-text/15 pt-8 sm:pt-12">
          <div className="flex flex-col gap-2">
            <span className="text-text text-sm font-sans tracking-widest uppercase">
              01 / brief
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-secondary lowercase">
              the problem
            </h2>
          </div>
          <div className="flex flex-col gap-6 text-text text-lg sm:text-xl lg:text-2xl leading-relaxed">
            {caseStudy.brief.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Section 02: What We Built */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] gap-6 lg:gap-12 items-start border-t border-text/15 pt-8 sm:pt-12">
          <div className="flex flex-col gap-2">
            <span className="text-text text-sm font-sans tracking-widest uppercase">
              02 / execution
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-secondary lowercase">
              what we built
            </h2>
          </div>
          <div className="flex flex-col gap-6 text-text text-lg sm:text-xl lg:text-2xl leading-relaxed">
            {caseStudy.approach.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Section 03: Outcome */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] gap-6 lg:gap-12 items-start border-t border-text/15 pt-8 sm:pt-12">
          <div className="flex flex-col gap-2">
            <span className="text-text text-sm font-sans tracking-widest uppercase">
              03 / impact
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-secondary lowercase">
              the outcome
            </h2>
          </div>
          <div className="flex flex-col gap-6 text-text text-lg sm:text-xl lg:text-2xl leading-relaxed">
            {caseStudy.outcome.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Project Media & Gallery */}
      <section className="w-full max-w-510 mt-20 sm:mt-32">
        <ProjectGallery
          title={project.title}
          images={project.images}
          cover={project.cover}
        />
      </section>

      {/* Next Project & CTA Navigation Bar */}
      <section className="w-full max-w-510 mt-24 sm:mt-36 pt-12 border-t border-text/20 flex flex-col gap-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-text text-xs uppercase tracking-widest font-sans">
              up next
            </span>
            <h3 className="font-display text-3xl sm:text-5xl text-secondary lowercase">
              {nextProject.title}
            </h3>
            <p className="text-text text-sm sm:text-base font-sans lowercase">
              {nextProject.tag}
            </p>
          </div>

          <Link
            href={`/work/${nextProject.slug}`}
            className="inline-flex items-center gap-3 bg-secondary text-primary font-semibold min-h-12 rounded-xl px-6 hover:bg-white transition-colors cursor-pointer group"
          >
            <span>view next project</span>
            <LuArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Start a Project Card */}
        <div className="w-full bg-secondary/5 border border-text/15 rounded-2xl p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mt-4">
          <div className="flex flex-col gap-3 max-w-2xl">
            <h4 className="font-display text-3xl sm:text-4xl text-secondary lowercase leading-tight">
              ready to build something ambitious?
            </h4>
            <p className="text-text text-base sm:text-xl font-sans leading-relaxed">
              let's discuss your brand, website, or digital platform and position your business as the obvious choice.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-secondary font-semibold text-primary min-h-12 rounded-xl px-8 hover:bg-white transition-colors cursor-pointer shrink-0"
          >
            start a project
          </Link>
        </div>
      </section>
    </main>
  );
}
