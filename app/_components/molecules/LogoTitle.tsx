import LogoIcon from "../atoms/LogoIcon";
import Link from "next/link";

export default function LogoText() {
  return (
    <section className="flex gap-4 items-center">
      <Link href="/">
        <LogoIcon size={64} />
      </Link>
      <div className="text-l font-semibold">
        <h1>ORGANISASI KEMAHASISWAAN INFORMATIKA</h1>
        <h1>FAKULTAS TEKNIK - UNIVERSITAS HASANUDDIN</h1>
      </div>
    </section>
  );
}
