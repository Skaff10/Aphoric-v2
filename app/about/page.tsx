import Image from "next/image";
const page = () => {
  return (
    <div className="w-full flex flex-col items-center mb-40">
      <section>
        <h1 className="text-[430px] overflow-hidden font-display leading-none">
          about us
        </h1>
      </section>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-40 max-w-600 mt-20 ml-65">
          <div className="flex flex-col gap-12 text-[40px] lowercase text-text">
            <p className=" ">
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
          <Image
            src="/logo/aph-logo-bl.svg"
            alt="aphoric"
            width={800}
            height={500}
          />
        </div>
      </section>
    </div>
  );
};

export default page;
