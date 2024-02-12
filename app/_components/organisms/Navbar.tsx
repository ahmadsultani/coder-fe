"use client";

import { useState } from "react";
import LogoText from "@molecules/LogoText";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [active, setActive] = useState<number | null>(1);

  const pathname = usePathname();

  const navItems = [
    { id: 1, title: "Beranda", href: "/#beranda" },
    { id: 2, title: "Proyek", href: "/#proyek" },
    { id: 3, title: "Kontak kami", href: "/#kontak-kami" },
  ];

  return (
    <nav className="sticky top-0 z-50 flex w-screen items-center justify-between border-b border-primary-light-active bg-white px-4 py-2 md:px-12">
      <LogoText />
      <section className="hidden gap-4 px-2 py-3 text-center text-text-s md:flex md:text-text-m lg:text-xl">
        {navItems.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={` text-primary-normal ${
              pathname === "/" &&
              active === link.id &&
              "font-semibold tracking-[-0.48px]"
            } py-1 hover:font-semibold hover:tracking-[-0.48px] md:px-4 md:py-3`}
            onClick={() => setActive(link.id)}
          >
            {link.title}
          </a>
        ))}
      </section>
    </nav>
  );
}
