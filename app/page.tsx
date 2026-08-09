import ScrollWordReveal from "@/components/ScrollWordReveal";
import WorkGrid from "@/components/WorkGrid";
import Link from "next/link";
import React from "react";

const page = () => {
  const selected_project = [
    {
      slug: "d2d",
      title: "Down 2 Detail",
      tag: "auto detailing · web platform",

      cover: "/project_images/d2d/d2d-aph.png",
    },
    {
      slug: "ovenout",
      title: "Oven & Out",
      tag: "food ordering · brand · social",
      category: ["website", "design", "marketing"],
      cover: "/project_images/ovenout/ovn-aph.png",
    },
  ];

  return (
    <main className="w-full flex flex-col items-center ">
      <section>
        <h1 className="text-[500px] overflow-hidden font-display leading-none">
          aphoric
        </h1>
        <div className="w-full flex justify-end mt-5">
          <p className="font-sans text-text text-3xl  max-w-2xl ">
            we create websites & design strategic brand identities that win
            trust, attract customers, and drive growth.
          </p>
        </div>
      </section>
      <section className="mt-20">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6 max-w-510">
          {selected_project.map((project, i) => (
            <Link key={project.slug} href={`/work/${project.slug}`}>
              <div className="overflow-hidden rounded-xl">
                <img
                  src={project.cover}
                  alt={project.title}
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
      <section className="mt-30">
        <ScrollWordReveal
          as="h2"
          text="we are aphoric, a creative agency based in dhaka. we work with small business owners and startup founders who want  brand identity that positions them as the premium choice in their market"
          className="text-3xl md:text-7xl font-semibold leading-snug max-w-510 mb-40"
          brightColor="#"
          dimColor="#38383d"
        />
      </section>
    </main>
  );
};

export default page;
