import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex items-center gap-24 pl-16 py-6">
      <section className="flex flex-col flex-1 gap-6">
        <header className="flex flex-col gap-2 font-bold">
          <h1 className="text-heading-l">Selamat Datang</h1>
          <span className=" text-heading-xl text-primary-normal lg:whitespace-nowrap">
            CODER INSTITUTE <br /> HMIF FT-UH
          </span>
        </header>
        <p className=" text-neutral-dark-active text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim eu
          turpis egestas pretium aenean pharetra magna ac placerat. Proin
          sagittis nisl rhoncus mattis. Nunc congue nisi vitae suscipit tellus
          mauris a diam. Sagittis purus sit amet volutpat. Gravida rutrum
        </p>
        <button className="flex justify-center items-center gap-1 w-fit px-4 py-3 rounded text-heading-s font-medium bg-primary-normal text-primary-light hover:bg-primary-normal-hover">
          Reach Us
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
      <section className="right-0">
        <Image
          src="/images/hero-image.webp"
          width={631}
          height={763}
          alt="Hero Image"
        />
      </section>
    </section>
  );
};
export default HeroSection;
