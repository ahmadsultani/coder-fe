import LogoIcon from "@atoms/LogoIcon";
import Link from "next/link";

export default function LogoText() {
  return (
    <section className="flex items-center gap-2">
      <Link href="/">
        <LogoIcon size={46} />
      </Link>
      <div className="flex flex-col text-text-m font-bold leading-tight">
        <h1 className="">CODER INSTITUTE HIMPUNAN MAHASISWA INFORMATIKA</h1>
        <h1>FAKULTAS TEKNIK UNIVERSITAS HASANUDDIN</h1>
      </div>
    </section>
  );
}
