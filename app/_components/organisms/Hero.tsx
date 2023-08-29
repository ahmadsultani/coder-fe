import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex items-center gap-24 pl-16 py-8">
      <section className="flex flex-col flex-1 gap-8">
        <header className="flex flex-col gap-2 font-bold">
          <h1 className=" text-heading-xl text-primary-normal lg:whitespace-nowrap">
            CODER INSTITUTE <br />
            <span className=" text-neutral-dark-active">HMIF FT-UH</span>
          </h1>
        </header>
        <p className=" font-bold text-heading-s text-neutral-dark-active text-justify">
          Tempat belajar dan berkembang untuk kamu yang tertarik mendalami
          teknologi. Mau belajar Web Development?{" "}
          <span className=" font-medium">
            Mobile Development? Game Development? UI/UX? Internet of Things?
          </span>{" "}
          Semuanya ada!
        </p>
        <button className="flex justify-center items-center gap-1 w-fit px-4 py-3 rounded text-heading-s font-medium bg-primary-normal text-primary-light hover:bg-primary-normal-hover">
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
          className="absolute top-0 -left-20 -z-10"
          src="/images/square.webp"
          width={221}
          height={253}
          alt="bg-square"
        />
        <Image
          src="/images/star.webp"
          className="absolute -bottom-[34px] -left-11"
          width={68}
          height={68}
          alt="bg-star"
        />
      </section>
    </section>
  );
};
export default HeroSection;
