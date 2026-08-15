import PixelImage from "@/components/PixelImage";
import ScrollWordReveal from "@/components/ScrollWordReveal";

import Image from "next/image";
import Link from "next/link";

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
    <main className="w-full flex flex-col items-center px-4 sm:px-6">
      <section className="w-full flex flex-col items-center">
        <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[clamp(46px,23.56vw,510px)] overflow-hidden font-display leading-none text-center">
          aphoric
        </h1>
        <div className="w-full flex justify-center lg:justify-end mt-5 lg2:pr-52 ">
          <p className="font-sans text-text text-xl sm:text-2xl lg:text-3xl max-w-2xl text-center lg:text-right ">
            we create websites & design strategic brand identities that win
            trust, attract customers, and drive growth.
          </p>
        </div>
      </section>
      <section className="mt-[clamp(48px,4.17vw,80px)] w-full max-w-510">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6">
          {selected_project.map((project, i) => (
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
      <section className="mt-[clamp(72px,6.25vw,120px)] w-full max-w-510">
        <ScrollWordReveal
          as="h2"
          text="we are aphoric, a creative agency based in dhaka. we work with small business owners and startup founders who want brand identity that positions them as the premium choice in their market"
          className="text-xl sm:text-xl md:text-[clamp(43px,3.75vw,72px)] font-semibold leading-snug mb-[clamp(96px,8.33vw,160px)]"
          brightColor="#"
          dimColor="#38383d"
        />
      </section>

      <section className="mt-[clamp(72px,6.25vw,120px)] w-full">
        <div className="flex flex-col lg:flex-row justify-start w-full gap-6 lg:gap-[clamp(24px,2.08vw,40px)] pl-0 md:pl-8 lg:pl-[clamp(24px,9.08vw,230px)] mb-[clamp(96px,8.33vw,160px)] items-center lg:items-start">
          <div className="w-50 sm:w-48 md:w-64 lg:w-[clamp(240px,20.83vw,400px)] shrink-0 rounded-xl overflow-hidden">
            <Image src="/logo/aph-logo-w.svg" alt="aphoric" width={0} height={0} sizes="100vw" className="w-full h-auto" />
          </div>

          <div className="flex flex-col gap-4 justify-center items-center lg:items-start text-center  lg:text-left">
            <span className="text-text text-lg sm:text-xl tracking-wide">
              why work with us
            </span>
            <p className="text-lg sm:text-2xl lg:text-[clamp(22px,1.88vw,36px)] max-w-full lg:max-w-[clamp(720px,62.5vw,1200px)] leading-snug text-secondary">
              we believe the best brands come from{" "}
              <span className="text-blue-600">true collaboration</span>. when we
              work together, you're not just getting a developer or a designer,
              you're getting a{" "}
              <span className="text-blue">strategic partner</span> who takes
              time to understand your business, your customers, and your goals.
            </p>
            <Link
              href={"/contact"}
              className="inline-flex items-center justify-center bg-secondary font-semibold text-primary min-h-11 min-w-11 rounded-lg px-6 lg:px-[clamp(24px,2.08vw,40px)] mt-[clamp(19px,1.67vw,32px)]"
            >
              start a project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
