import { Metadata } from "next";
import Link from "next/link";
import PixelImage from "@/components/PixelImage";
import ProjectGallery2 from "@/components/ProjectGallery2";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Oven & Out — Aphoric Case Study",
  description:
    "Oven & Out went from an old pizza cafe concept to a fully rebranded cloud kitchen with its own ordering system, admin tools, and automated notifications.",
};

export default function OvenOutPage() {
  const project = {
    slug: "ovenout",
    title: "Oven & Out",
    tag: "food ordering · brand · social",
    cover: "/project_images/ovenout/ovn-aph.png",
    images: [
      "/project_images/ovenout/ovn-aph.png",
      "/project_images/ovenout/logo_ovn.png",
      "/project_images/ovenout/lastmenu.png",
      "/project_images/ovenout/poster1.png",
      "/project_images/ovenout/poster2.png",
      "/project_images/ovenout/poster3.jpg",
      "/project_images/ovenout/poster4.jpg",
      "/project_images/ovenout/poster5.jpg",
      "/project_images/ovenout/SUPER SAVER(1).png",
    ],
    video: [
      "/project_images/ovenout/website_live.mp4",
      "/project_images/ovenout/combo.mp4",
    ],
  };

  const caseStudy = {
    sector: "Cloud kitchen, food delivery",
    type: "client",
    stack: [
      "Next.js",
      "Firebase",
      "TypeScript",
      "Vercel",
      "Telegram Bot API",
      "Meta Messenger API",
    ],
    brief: [
      "This client didn't start as Oven & Out. The business began as a pizza cafe, and the owner decided to pivot the entire concept into a cloud kitchen model, meaning no dine-in space, just a kitchen built to fulfill delivery and pickup orders. That decision meant almost nothing from the old business carried over. The name, the branding, the website, and the way customers would even find and order from the business all had to be rebuilt from the ground up.",
    ],
    approach: [
      "We started with the brand itself before touching any code. New name, new identity, built around a palette of deep red, gold, cream, and dark brown to feel warm and food-forward rather than generic. We designed the logo and the full visual identity in Illustrator, then used that identity as the base for everything that followed, the site, the posters, and the social presence.",
      "The website is built on Next.js with a Firebase backend, built entirely from scratch. There's a public ordering page where customers browse the menu and place orders, and an admin panel where the kitchen manages incoming orders as they come in, in real time through Firestore. It's live and deployed on Vercel at ovenandout.cloud, with DNS handled through GoDaddy.",
      "Beyond the site, we designed a series of promotional posters using the new brand identity, meant for both social posts and general marketing use, so the visual identity stayed consistent everywhere the business showed up online.",
      "We also took over the Facebook page. That meant setting up the rebrand on the page itself, new profile and cover assets, updated business info, and managing ongoing posts. Alongside that, we built out Messenger automation so customers messaging the page get instant automated replies instead of waiting on a manual response, and Telegram order notifications, so the kitchen gets an instant alert on a new order the same way D2D's owner gets notified about bookings, without needing to sit and refresh the admin panel.",
      "Running paid ads is part of the plan but hasn't happened yet. That's the next phase for this client.",
      "We also mapped out an SEO roadmap covering JSON-LD schema, metadata, and Google Search Console setup, so the site keeps gaining organic visibility over time instead of relying only on social and word of mouth.",
    ],
    outcome: [
      "Oven & Out went from an old pizza cafe concept to a fully rebranded cloud kitchen with its own ordering system, admin tools, automated notifications, and an active social presence, all built and managed from the ground up. The business is now generating a decent daily income, and ads are the next step to grow that further. It's one of Aphoric's strongest examples of a full rebrand and build in one engagement, covering brand identity, full-stack development, marketing assets, and ongoing social media management.",
    ],
  };

  const nextProject = {
    slug: "traken",
    title: "Traken",
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
            full rebrand & build
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
        <ProjectGallery2
          title={project.title}
          images={project.images}
          videos={project.video}
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
