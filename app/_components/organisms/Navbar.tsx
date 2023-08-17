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
    <nav className="flex w-screen h-16 justify-between sticky top-0 border-b border-primary-light-active items-center py-4 px-12 bg-white">
      <LogoText />
      <section className="flex gap-4 py-3 px-4 text-xl text-center">
        {navItems.map((link) => (
          <Link key={link.id} href={link.href}>
            <span
              className={`${
                active === link.id
                  ? "font-semibold text-primary-normal border-b-2 border-primary-normal"
                  : "hover:font-semibold hover:text-primary-normal hover:border-b-2 hover:border-primary-normal"
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
