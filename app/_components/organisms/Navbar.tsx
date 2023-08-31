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
    { id: 1, title: "Button", href: "/" },
    { id: 2, title: "Button", href: "/" },
    { id: 3, title: "Button", href: "/" },
  ];

  return (
    <nav className="sticky top-0 z-50 flex h-16 w-screen items-center justify-between border-b border-primary-light-active bg-white px-12 py-4">
      <LogoText />
      <section className="flex gap-4 px-4 py-3 text-center text-xl">
        {navItems.map((link) => (
          <Link key={link.id} href={link.href}>
            <span
              className={`${
                active === link.id
                  ? "border-b-2 border-primary-normal font-semibold text-primary-normal"
                  : "hover:border-b-2 hover:border-primary-normal hover:font-semibold hover:text-primary-normal"
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
