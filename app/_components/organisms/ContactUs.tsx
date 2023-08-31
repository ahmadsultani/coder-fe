import ButtonPrimary from "@atoms/ButtonPrimary";
import Link from "next/link";
import Image from "next/image";

function ContactUs() {
  return (
    <main className="w-screen px-16">
      <section className="relative flex w-full flex-col items-center justify-center gap-11 overflow-hidden rounded-2xl border-2 border-solid border-neutral-light-active px-16 py-[52px] text-center shadow-[1px_1px_4px_0px_rgba(0,0,0,0.25)]">
        <section className="relative">
          <Image
            className="absolute -left-14 -top-6 z-20"
            src="/decorations/star-four.svg"
            width={69}
            height={69}
            alt="bg-star-four"
          />
          <span className="text-heading-l font-bold text-primary-normal">
            Kontak Kami
          </span>
        </section>
        <section>
          <p className="text-heading-s font-normal">
            Kamu tertarik dengan projek-projek di atas?
            <br />
            Mau mengembangkan dan melaksanakan kegiatan bersama kami?
            <br />
            Jangan malu-malu, ayo kontak kami, dan buat hal menarik!
          </p>
        </section>
        <section className="z-10 flex gap-[180px]">
          <section>
            <Link href={"https://www.linkedin.com/company/coder-institute"}>
              <ButtonPrimary>
                <Image
                  src="/icons/icon _linkedin_.svg"
                  width={20}
                  height={20}
                  alt="icon-linkedin"
                />
                <p className="underline">Linkedin</p>
              </ButtonPrimary>
            </Link>
          </section>
          <section>
            <Link href={"https://www.instagram.com/coderinstitute/"}>
              <ButtonPrimary>
                <Image
                  src="/icons/icon _instagram_.svg"
                  width={20}
                  height={20}
                  alt="icon-instagram"
                />
                <p className="underline">Instagram</p>
              </ButtonPrimary>
            </Link>
          </section>
        </section>
        <section className="absolute inset-0">
          <Image
            className="absolute bottom-0 left-0 z-10"
            src="/decorations/circle.svg"
            width={194}
            height={194}
            alt="bg-circle"
          />
          <Image
            className="absolute -left-3 bottom-24 z-20"
            src="/decorations/star-six.svg"
            width={141}
            height={11}
            alt="bg-star-six"
          />
          <Image
            className="absolute right-0 top-0 z-10"
            src="/decorations/circle2.svg"
            width={194}
            height={194}
            alt="bg-circle"
          />
          <Image
            className="absolute -right-3 top-24 z-20"
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
