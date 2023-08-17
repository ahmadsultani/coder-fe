import LogoIcon from "../atoms/LogoIcon";
import Link from "next/link";

export default function LogoText() {
  return (
    <section className="flex items-center gap-2">
      <Link href="/">
        <LogoIcon size={31} />
      </Link>
      <div className="flex flex-col font-bold leading-tight text-[20px]">
        <h1 className="-mb-1">CODER INSTITUTE</h1>
        <h1>HMIF FT-UH</h1>
      </div>
    </section>
  );
}
