"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface NavbarProps {
  label: string;
  href: string;
}

export default function Navbar() {
  const [active, setActive] = useState<number | null>(null);

  const navItems = [
    { id: 1, title: "Button", href: "/" },
    { id: 2, title: "Button", href: "/" },
    { id: 3, title: "Button", href: "/" },
  ];

  return (
    <nav className="flex w-screen h-16 justify-between border-b border-primary-light-active items-center py-4 px-12">
      <section className="flex items-center gap-2">
        <Link href="/">
          <Image
            draggable={false}
            src="./icons/logo-coder.svg"
            alt="Logo Coder"
            width={31}
            height={31}
            priority
          />
        </Link>
        <div className="flex flex-col font-bold leading-tight text-[20px]">
          <h1 className="-mb-1">CODER INSTITUTE</h1>
          <h1>HMIF FT-UH</h1>
        </div>
      </section>
      <section className="flex gap-4 py-3 px-4 text-xl text-center">
        {navItems.map((link) => (
          <Link key={link.id} href={link.href}>
            <span
              className={`${
                active === link.id
                  ? "font-semibold text-[#EBB702] border-b-2 border-[#EBB702]"
                  : "hover:font-semibold hover:text-[#EBB702] hover:border-b-2 hover:border-[#EBB702]"
              } transition-all`}
              onClick={() => setActive(link.id)}
            >
              {link.title}
            </span>
          </Link>
        ))}
      </section>
    </nav>
  );
}
