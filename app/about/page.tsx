import Image from "next/image";
const page = () => {
  return (
    <div className="w-full flex flex-col items-center mb-[clamp(96px,8.33vw,160px)] px-4 sm:px-6">
      <section className="w-full flex justify-center">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[clamp(58px,18.4vw,430px)] overflow-hidden font-display leading-none text-center">
          about us
        </h1>
      </section>
      <section className="w-full flex lg:fle justify-center">
        <div className="grid grid-cols-1  lg2:grid-cols-2 gap-8 md:gap-[clamp(96px,8.33vw,160px)] max-w-600 mt-[clamp(48px,4.17vw,80px)] ml-0 md:ml-12 lg2:pl-40">
          <div className="flex flex-col gap-6 md:gap-[clamp(29px,2.5vw,48px)] text-lg sm:text-xl lg:text-[clamp(24px,2.08vw,40px)] lowercase text-text lg2:mt-30">
            <p>
              Aphoric is a digital agency based in Dhaka, Bangladesh. We build
              websites, brand identities, and marketing systems for small
              businesses and startups that need to look and function like bigger
              players without the bigger budget.
            </p>
            <p>
              Our team covers development, design, and strategy across every
              project, with designers and other specialists brought in as the
              work requires. That keeps us lean without slowing anything down.
            </p>
            <p>
              Outside client work, we build our own sites and design projects
              for fun, experimenting with ideas that don't come up in client
              briefs.
            </p>
          </div>
          <div className="flex justify-center items-start">
            <Image
              src="/logo/aph-logo-bl.svg"
              alt="aphoric"
              width={800}
              height={500}
              className="w-full max-w-md md:max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
