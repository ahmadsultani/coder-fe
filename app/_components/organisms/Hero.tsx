import Image from "next/image";
import PrimaryButton from "../atoms/PrimaryButton";

const HeroSection = () => {
  return (
    <section
      className="flex min-h-[480px] items-center gap-32 px-7 py-8 lg:pl-16 lg:pr-0 "
      id="beranda"
    >
      <section className="flex  flex-1 flex-col gap-10">
        <header className="flex flex-col gap-2 font-bold">
          <h1 className="text-heading-m text-primary-normal sm:text-heading-l lg:whitespace-nowrap lg:text-heading-xl">
            CODER INSTITUTE <br />
            <span className=" text-neutral-dark-active">HMIF FT-UH</span>
          </h1>
        </header>
        <p className="shrink text-justify text-text-s font-bold text-neutral-gray lg:text-heading-s">
          Tempat belajar dan berkembang untuk kamu yang tertarik mendalami
          teknologi.{" "}
          <span className=" font-medium">
            Mau belajar Web Development? Mobile Development? Game Development?
            UI/UX? Internet of Things?
          </span>{" "}
          Semuanya ada!
        </p>
        <a href="https://wa.me/6281241520281" target="_blank" rel="noreferrer">
          <PrimaryButton>
            Kontak Kami
            <span>
              <Image
                src="/icons/arrow-up.svg"
                width={20}
                height={20}
                alt="Arrow Up"
              />
            </span>
          </PrimaryButton>
        </a>
      </section>
      <section className="relative -z-50 hidden lg:block">
        <Image
          src="/images/hero-image.webp"
          width={631}
          height={733}
          style={{
            objectFit: "contain",
            width: "auto",
            height: "auto",
          }}
          priority
          quality={100}
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
