// work-data.ts
// Central data source for the Work / portfolio section.
// Images are expected under /public/project_images/<folder>/

export type Category = "website" | "design" | "marketing";

export interface Project {
  slug: string;
  title: string;
  tag: string; // short subtitle shown under the title
  category: Category[]; // a project can belong to more than one category
  cover: string; // main image used in grid cards
  images: string[]; // full gallery for the case study page
  video?: string[]; // optional showcase video
}

export const projects: Project[] = [
  {
    slug: "d2d",
    title: "Down 2 Detail",
    tag: "auto detailing · web platform",
    category: ["website"],
    cover: "/project_images/d2d/d2d-aph.webp",
    images: [
      "/project_images/d2d/d2d-aph.webp",
      "/project_images/d2d/one.webp",
      "/project_images/d2d/two.webp",
      "/project_images/d2d/three.webp",
    ],
  },
  {
    slug: "ovenout",
    title: "Oven & Out",
    tag: "food ordering · brand · social",
    category: ["website", "design", "marketing"],
    cover: "/project_images/ovenout/ovn-aph.webp",
    images: [
      "/project_images/ovenout/ovn-aph.webp",
      "/project_images/ovenout/logo_ovn.webp",
      "/project_images/ovenout/lastmenu.webp",
      "/project_images/ovenout/poster1.webp",
      "/project_images/ovenout/poster2.webp",
      "/project_images/ovenout/poster3.webp",
      "/project_images/ovenout/poster4.webp",
      "/project_images/ovenout/poster5.webp",
      "/project_images/ovenout/SUPER SAVER(1).webp",
    ],
    video: [
      "/project_images/ovenout/website_live.mp4",
      "/project_images/ovenout/combo.mp4",
    ],
  },
  {
    slug: "traken",
    title: "Traken",
    tag: "web platform",
    category: ["website"],
    cover: "/project_images/traken/traken-aph.webp",
    images: [
      "/project_images/traken/traken-aph.webp",
      "/project_images/traken/cover.webp",
      "/project_images/traken/one.webp",
      "/project_images/traken/two.webp",
    ],
  },
  {
    slug: "pawsome",
    title: "Pawsome",
    tag: "web platform",
    category: ["website"],
    cover: "/project_images/pawsome/pawsome-aph.webp",
    images: [
      "/project_images/pawsome/pawsome-aph.webp",
      "/project_images/pawsome/one.webp",
      "/project_images/pawsome/two.webp",
    ],
  },
  {
    slug: "lorem",
    title: "Lorem",
    tag: "brand identity",
    category: ["design"],
    cover: "/project_images/lorem/lorem_cover.webp",
    images: [
      "/project_images/lorem/lorem_cover.webp",
      "/project_images/lorem/lorem_brandguide.webp",
    ],
  },
  {
    slug: "merideth",
    title: "Merideth",
    tag: "brand identity",
    category: ["design"],
    cover: "/project_images/merideth/merideth_cover.webp",
    images: [
      "/project_images/merideth/merideth_cover.webp",
      "/project_images/merideth/merideth_brandguide.webp",
    ],
  },
  {
    slug: "tj",
    title: "Terra & June",
    tag: "brand identity",
    category: ["design"],
    cover: "/project_images/tj/tj_cover.webp",
    images: [
      "/project_images/tj/tj_cover.webp",
      "/project_images/tj/tj_brandguide.webp",
    ],
  },
  {
    slug: "typeface",
    title: "TypeFace",
    tag: "brand identity",
    category: ["design"],
    cover: "/project_images/typeface/typeface_cover.webp",
    images: [
      "/project_images/typeface/typeface_cover.webp",
      "/project_images/typeface/typeface_brandguide.webp",
    ],
  },
];

// Helper for filtering on the Work page, e.g.:
// const websiteProjects = getProjectsByCategory("website");
export function getProjectsByCategory(category: Category): Project[] {
  return projects.filter((p) => p.category.includes(category));
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
