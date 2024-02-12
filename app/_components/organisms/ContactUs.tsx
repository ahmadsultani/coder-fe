import PrimaryButton from "@atoms/PrimaryButton";
import Link from "next/link";
import Image from "next/image";

function ContactUs() {
  return (
    <main id="kontak-kami" className="w-screen scroll-mt-32 px-7 lg:px-16">
      <section className="relative flex w-full flex-col items-center justify-center gap-11 overflow-hidden rounded-2xl border-2 border-solid border-neutral-light-active px-7 py-[52px] text-center shadow-[1px_1px_4px_0px_rgba(0,0,0,0.25)] lg:px-16">
        <section className="relative">
          <Image
            className="absolute -left-14 -top-6"
            src="/decorations/star-four.svg"
            width={69}
            height={69}
            alt="bg-star-four"
          />
          <span className="text-heading-m font-bold text-primary-normal lg:text-heading-l">
            Kontak Kami
          </span>
        </section>
        <section className="z-30">
          <p className="text-text-l font-normal lg:text-heading-s">
            Kamu tertarik dengan projek-projek di atas?
            <br />
            Mau mengembangkan dan melaksanakan kegiatan bersama kami?
            <br />
            Jangan malu-malu, ayo kontak kami, dan buat hal menarik!
          </p>
        </section>
        <section className="z-10 flex flex-col gap-x-16 gap-y-5 md:flex-row">
          <Link href={"https://www.linkedin.com/company/coder-institute"}>
            <PrimaryButton fullWidth>
              <Image
                src="/icons/icon_linkedin_.svg"
                width={20}
                height={20}
                alt="icon-linkedin"
              />
              <p className="underline">Linkedin</p>
            </PrimaryButton>
          </Link>
          <Link href={"https://www.instagram.com/coderinstitute/"}>
            <PrimaryButton fullWidth>
              <Image
                src="/icons/icon_instagram_.svg"
                width={20}
                height={20}
                alt="icon-instagram"
              />
              <p className="underline">Instagram</p>
            </PrimaryButton>
          </Link>
        </section>
        <section className="absolute inset-0 -z-0">
          <Image
            className="absolute -bottom-10 -left-10 scale-[.65] lg:bottom-0 lg:left-0 lg:scale-100"
            src="/decorations/circle.svg"
            width={194}
            height={194}
            alt="bg-circle"
          />
          <Image
            className="absolute -left-8 bottom-12 scale-[.65] lg:-left-3 lg:bottom-24 lg:scale-100 "
            src="/decorations/star-six.svg"
            width={141}
            height={11}
            alt="bg-star-six"
          />
          <Image
            className="absolute -right-10 -top-10 scale-[.65] lg:right-0 lg:top-0 lg:scale-100"
            src="/decorations/circle2.svg"
            width={194}
            height={194}
            alt="bg-circle"
          />
          <Image
            className="absolute -right-8 top-12 scale-[.65] lg:-right-3 lg:top-24 lg:scale-100"
            src="/decorations/star2-six.svg"
            width={141}
            height={141}
            alt="bg-star-six"
          />
        </section>
      </section>
    </main>
  );
}

export default ContactUs;
