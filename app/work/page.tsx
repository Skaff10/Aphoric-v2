"use client";

import { useState } from "react";
import PixelImage from "@/components/PixelImage";
import Link from "next/link";

const page = () => {
  const selected_project = [
    {
      slug: "d2d",
      title: "Down 2 Detail",
      tag: "auto detailing · web platform",
      category: ["website"],
      cover: "/project_images/d2d/d2d-aph.webp",
    },
    {
      slug: "ovenout",
      title: "Oven & Out",
      tag: "food ordering · brand · social",
      category: ["website", "design", "marketing", "rebranding"],
      cover: "/project_images/ovenout/ovn-aph.webp",
    },
    {
      slug: "tj",
      title: "Terra and June",
      tag: "florist · brand · social",
      category: ["design"],
      cover: "/project_images/tj/tj_cover.webp",
    },
    {
      slug: "merideth",
      title: "Merideth",
      tag: "web platform",
      category: ["design"],
      cover: "/project_images/merideth/merideth_cover.webp",
    },
    {
      slug: "lorem",
      title: "Lorem Ipsum",
      tag: "brand",
      category: ["design"],
      cover: "/project_images/lorem/lorem_cover.webp",
    },
    {
      slug: "pawsome",
      title: "Pawsome",
      tag: "web platform",
      category: ["website"],
      cover: "/project_images/pawsome/pawsome-aph.webp",
    },
    {
      slug: "traken",
      title: "Traken",
      tag: "web platform",
      category: ["website"],
      cover: "/project_images/traken/traken-aph.webp",
    },
    {
      slug: "typeface",
      title: "Typeface",
      tag: "brand",
      category: ["design"],
      cover: "/project_images/typeface/typeface_cover.webp",
    },
  ];

  const categoryOrder = [
    "all",
    "website",
    "design",
    "marketing",
    "rebranding",
    "automation",
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filtered_project =
    activeCategory === "all"
      ? selected_project
      : selected_project.filter((project) =>
          project.category.includes(activeCategory),
        );

  return (
    <main className="w-full flex flex-col items-center px-4 sm:px-6">
      <section className="w-full flex justify-center">
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[clamp(156px,13.54vw,260px)] overflow-hidden font-display leading-none text-center">
          selected work
        </h1>
      </section>
      <section className="w-full flex flex-wrap gap-3 sm:gap-6 lg:gap-[clamp(24px,2.08vw,40px)] mt-7 justify-center text-lg sm:text-2xl md:text-3xl lg:text-[clamp(36px,3.13vw,60px)] px-2">
        {categoryOrder.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`min-h-[44px] min-w-[44px] flex items-center justify-center px-3 py-1 transition-colors cursor-pointer ${
              activeCategory === cat
                ? "text-secondary font-semibold "
                : "text-text hover:text-secondary"
            }`}
          >
            {cat}
          </button>
        ))}
      </section>
      <section className="w-full max-w-510 mt-[clamp(36px,3.13vw,60px)] mb-[clamp(96px,8.33vw,160px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {filtered_project.map((project, i) => (
            <Link key={project.slug} href={`/work/${project.slug}`}>
              <div className="overflow-hidden rounded-xl">
                <PixelImage
                  src={project.cover}
                  alt={project.title}
                  width={800}
                  height={500}
                  startPixelSize={60}
                  duration={3000}
                  className="w-full h-full object-cover aspect-16/10 transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h3 className="text-secondary text-xl font-semibold mt-4">
                {project.title}
              </h3>
              <p className="text-text text-md">{project.tag}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default page;
