import LogoIcon from "@atoms/LogoIcon";
import Link from "next/link";

export default function LogoText() {
  return (
    <section className="flex items-center gap-2">
      <Link href="/">
        <div className="hidden md:block">
          <LogoIcon size={56} />
        </div>
        <div className="md:hidden">
          <LogoIcon size={30} />
        </div>
      </Link>
      <div className="flex flex-col text-text-m font-bold leading-tight lg:text-text-m">
        <span>
          CODER <br className="block md:hidden" /> INSTITUTE
          <span className="hidden md:inline-block">
            HIMPUNAN MAHASISWA INFORMATIKA
          </span>
        </span>
        <span className="hidden md:block">
          FAKULTAS TEKNIK UNIVERSITAS HASANUDDIN
        </span>
      </div>
    </section>
  );
}
