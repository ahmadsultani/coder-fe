import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex items-center w-full pl-16">
      <section className=" w-1/2">
        <h1 className="font-bold text-heading-m text-neutral-dark-active ">
          Selamat Datang <br />
          <span className=" pt-2 font-bold text-[64px] leading-[72px] text-primary-normal">
            CODER INSTITUTE HMIF FT-UH
          </span>
        </h1>
        <p className="py-6 text-text-l text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim eu
          turpis egestas pretium aenean pharetra magna ac placerat. Proin
          sagittis nisl rhoncus mattis. Nunc congue nisi vitae suscipit tellus
          mauris a diam. Sagittis purus sit amet volutpat. Gravida rutrum
        </p>
        <section className="flex w-[146px] px-4 py-3 rounded-[4px] gap-1 text-heading-s bg-primary-normal hover:bg-primary-normal-hover">
          <button className="  text-primary-light font-medium">Reach Us</button>
          <Image
            src="/icons/arrow-up.svg"
            width={20}
            height={20}
            alt="Arrow Up"
          />
        </section>
      </section>
      <section className=" w-1/2 right-0 py-8 pl-24">
        <Image
          src="/images/hero-image.webp"
          width={727}
          height={763}
          alt="Hero Image"
        />
      </section>
    </section>
  );
};
export default HeroSection;
