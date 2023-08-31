import LogoIcon from "@atoms/LogoIcon";
import Link from "next/link";

export default function LogoText() {
  return (
    <section className="flex items-center gap-4">
      <Link href="/">
        <LogoIcon size={46} />
      </Link>
      <div className="text-m flex flex-col font-bold leading-tight">
        <h1 className="">CODER INSTITUTE HIMPUNAN MAHASISWA INFORMATIKA</h1>
        <h1>FAKULTAS TEKNIK UNIVERSITAS HASANUDDIN</h1>
      </div>
    </section>
  );
}
