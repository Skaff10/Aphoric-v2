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
      cover: "/project_images/d2d/d2d-aph.png",
    },
    {
      slug: "ovenout",
      title: "Oven & Out",
      tag: "food ordering · brand · social",
      category: ["website", "design", "marketing", "rebranding"],
      cover: "/project_images/ovenout/ovn-aph.png",
    },
    {
      slug: "tj",
      title: "Terra and June",
      tag: "florist · brand · social",
      category: ["design"],
      cover: "/project_images/tj/tj_cover.png",
    },
    {
      slug: "merideth",
      title: "Merideth",
      tag: "web platform",
      category: ["design"],
      cover: "/project_images/merideth/merideth_cover.png",
    },
    {
      slug: "lorem",
      title: "Lorem Ipsum",
      tag: "brand",
      category: ["design"],
      cover: "/project_images/lorem/lorem_cover.png",
    },
    {
      slug: "pawsome",
      title: "Pawsome",
      tag: "web platform",
      category: ["website"],
      cover: "/project_images/pawsome/pawsome-aph.png",
    },
    {
      slug: "traken",
      title: "Traken",
      tag: "web platform",
      category: ["website"],
      cover: "/project_images/traken/traken-aph.png",
    },
    {
      slug: "typeface",
      title: "Typeface",
      tag: "brand",
      category: ["design"],
      cover: "/project_images/typeface/typeface_cover.png",
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
    <main className="w-full flex flex-col items-center">
      <section>
        <h1 className="text-[260px] overflow-hidden font-display leading-none">
          selected work
        </h1>
      </section>
      <section className="w-full flex gap-10 mt-7 justify-center text-6xl">
        {categoryOrder.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={
              activeCategory === cat
                ? "text-secondary font-semibold "
                : "text-text "
            }
          >
            {cat}
          </button>
        ))}
      </section>
      <section className="mt-15 mb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-w-510">
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
