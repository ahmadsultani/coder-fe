import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex items-center gap-24 py-8 pl-16 ">
      <section className="flex flex-1 flex-col gap-8">
        <header className="flex flex-col gap-2 font-bold">
          <h1 className=" text-heading-xl text-primary-normal lg:whitespace-nowrap">
            CODER INSTITUTE <br />
            <span className=" text-neutral-dark-active">HMIF FT-UH</span>
          </h1>
        </header>
        <p className=" text-justify text-heading-s font-bold text-neutral-gray">
          Tempat belajar dan berkembang untuk kamu yang tertarik mendalami
          teknologi.{" "}
          <span className=" font-medium">
            Mau belajar Web Development? Mobile Development? Game Development?
            UI/UX? Internet of Things?
          </span>{" "}
          Semuanya ada!
        </p>
        <button className="flex w-fit items-center justify-center gap-1 rounded bg-primary-normal px-4 py-3 text-heading-s font-medium text-primary-light hover:bg-primary-normal-hover ">
          Kontak Kami
          <span>
            <Image
              src="/icons/arrow-up.svg"
              width={20}
              height={20}
              alt="Arrow Up"
            />
          </span>
        </button>
      </section>
      <section className="relative -z-50">
        <Image
          src="/images/hero-image.webp"
          width={631}
          height={763}
          alt="Hero Image"
        />
        <Image
          className="absolute -left-20 top-0 -z-10"
          src="/images/square.webp"
          width={221}
          height={253}
          alt="bg-square"
        />
        <Image
          src="/images/star.webp"
          className="absolute -left-11 bottom-[-34px]"
          width={68}
          height={68}
          alt="bg-star"
        />
      </section>
    </section>
  );
};
export default HeroSection;
