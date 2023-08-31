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
  const [active, setActive] = useState<number | null>(null);

  const navItems = [
    { id: 1, title: "Beranda", href: "/" },
    { id: 2, title: "Proyek", href: "/#" },
    { id: 3, title: "Kontak kami", href: "/#" },
  ];

  return (
    <nav className="sticky top-0 flex h-20 w-screen items-center justify-between bg-white px-12 py-4">
      <LogoText />
      <section className="flex gap-4 px-4 py-3 text-center text-xl text-primary-normal">
        {navItems.map((link) => (
          <Link key={link.id} href={link.href}>
            <span
              className={`${
                active === link.id
                  ? "font-semibold text-primary-normal"
                  : "hover:font-semibold hover:text-primary-normal "
              } px-4 py-3`}
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
