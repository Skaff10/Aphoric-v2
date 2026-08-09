// WorkGrid.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { projects, type Category } from "@/data/workdata";

const filters: { label: string; value: Category | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Website", value: "website" },
  { label: "Design", value: "design" },
  { label: "Marketing", value: "marketing" },
];

export default function WorkGrid() {
  const [active, setActive] = useState<Category | "all">("all");

  const visible =
    active === "all"
      ? projects
      : projects.filter((p) => p.category.includes(active));

  return (
    <section className="bg-black py-16 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="flex gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${
                active === f.value
                  ? "bg-white text-black border-white"
                  : "text-neutral-400 border-neutral-700 hover:border-neutral-500 hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visible.map((project, i) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className={`group ${i === 0 ? "md:col-span-2" : ""}`}
            >
              <div className="overflow-hidden rounded-xl bg-neutral-900">
                <img
                  src={project.cover}
                  alt={project.title}
                  className="w-full h-full object-cover aspect-16/10 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-white font-semibold mt-4">{project.title}</h3>
              <p className="text-neutral-400 text-sm">{project.tag}</p>
            </Link>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="text-neutral-500 text-center py-16">
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
