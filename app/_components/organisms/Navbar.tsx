"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LogoText from "../molecules/LogoText";

interface NavbarProps {
  label: string;
  href: string;
}

export default function Navbar() {
  const [active, setActive] = useState<number | null>(1);

  const navItems = [
    { id: 1, title: "Beranda", href: "/" },
    { id: 2, title: "Proyek", href: "/#" },
    { id: 3, title: "Kontak kami", href: "/#" },
  ];

  return (
    <nav className="sticky top-0 z-50 flex w-screen items-center justify-between border-b border-primary-light-active bg-white px-12 py-2">
      <LogoText />
      <section className="flex gap-4 px-4 py-3 text-center text-xl">
        {navItems.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className={`text-primary-normal ${
              active === link.id && "font-semibold tracking-[-0.48px]"
            } px-4 py-3 hover:font-semibold hover:tracking-[-0.48px]`}
            onClick={() => setActive(link.id)}
          >
            {link.title}
          </Link>
        ))}
      </section>
    </nav>
  );
}
