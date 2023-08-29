import LogoText from "@molecules/LogoText";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex w-screen flex-col bg-secondary-white px-12 py-[72px]">
      <main className="mb-[66px] flex justify-between">
        <section className="flex flex-col gap-8">
          <LogoText />
          <main className="flex flex-col gap-4">
            <section className="flex gap-[15px]">
              <Image
                width={24}
                height={24}
                src="/icons/place.svg"
                alt="icon place"
              />
              <span className="text-text-l">
                Gedung Student Center Lt. 1 Fakultas Teknik
                <br /> Universitas Hasanuddin, Gowa 92171
              </span>
            </section>
            <section className="flex gap-[15px]">
              <Image
                width={24}
                height={24}
                src="/icons/mail_outline.svg"
                alt="icon mail"
              />
              <span className="text-text-l">coderinstitute.uh@gmail.com</span>
            </section>
          </main>
        </section>

        <section className="text-right text-text-l">
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

      <section className="flex justify-between">
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
