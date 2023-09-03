import LogoText from "@molecules/LogoText";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex w-screen flex-col gap-8 bg-secondary-white px-4 py-8 pt-[72px] md:px-7 lg:gap-[66px] lg:px-12 lg:py-[72px]">
      <main className=" flex flex-col justify-between gap-8 lg:flex-row">
        <section className="flex flex-col gap-8">
          <LogoText />
          <main className="flex flex-col gap-4">
            <section className="flex items-center gap-[15px]">
              <Image
                width={24}
                height={24}
                src="/icons/place.svg"
                alt="icon place"
              />
              <span className="text-text-s lg:text-text-l">
                Gedung Student Center Lt. 1 Fakultas Teknik
                <br /> Universitas Hasanuddin, Gowa 92171
              </span>
            </section>
            <section className="flex items-center gap-[15px]">
              <Image
                width={24}
                height={24}
                src="/icons/mail_outline.svg"
                alt="icon mail"
              />
              <span className="text-text-s lg:text-text-l">
                coderinstitute.uh@gmail.com
              </span>
            </section>
          </main>
        </section>

        <section className="text-text-l lg:text-right">
          <section className="mb-2">
            <span className="font-bold text-primary-normal">Divisi</span>
          </section>
          <ul className="flex flex-col space-y-1">
            <li>
              <Link href={"/"}>Website</Link>
            </li>
            <li>
              <Link href={"/"}>Mobile</Link>
            </li>
            <li>
              <Link href={"/"}>Game</Link>
            </li>
            <li>
              <Link href={"/"}>UI/UX</Link>
            </li>
            <li>
              <Link href={"/"}>IOT</Link>
            </li>
          </ul>
        </section>
      </main>

      <section className="flex flex-col-reverse justify-between gap-4 lg:flex-row">
        <span className="text-text-m">© 2023 Coder Institute HMIF FT-UH</span>
        <ul className="flex gap-4 text-text-l text-primary-normal">
          <li>
            <Link href={"/"}>Instagram</Link>
          </li>
          <li>
            <Link href={"/"}>Twitter</Link>
          </li>
          <li>
            <Link href={"/"}>Linked In</Link>
          </li>
        </ul>
      </section>
    </footer>
  );
}
