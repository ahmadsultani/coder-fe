"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

import PrimaryButton from "../atoms/PrimaryButton";
import PortfolioCard from "../molecules/PortfolioCard";
import PortfolioTab from "../molecules/PortfolioTab";

const PortfolioBox = () => {
  return (
    <main className="relative flex flex-col gap-8 p-[0px_28px] md:p-[0px_48px] lg:p-[0px_64px]">
      <Image
        src={"/decorations/ProjectEllipse.webp"}
        width={355}
        height={355}
        alt=""
        className="absolute left-[-243px] top-[80px] -z-10"
      />
      <PortfolioTab />
      <section className="relative grid grid-cols-1 justify-between gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
        {PortfolioCards.map((card, index) => (
          <PortfolioCard
            key={card.id}
            name={card.name}
            tag={card.tag}
            display={`${index >= 3 ? "hidden" : "flex"} ${
              index >= 4 ? "md:hidden" : "md:flex"
            } md:flex lg:flex`}
          />
        ))}
      </section>
      <Image
        src={"/decorations/six-starPortfolio.webp"}
        width={355}
        height={355}
        alt=""
        className="absolute right-[-126px] top-[258px] -z-10"
      />
      <div className="relative flex justify-center">
        <Image
          src={"/decorations/doublebox-Portfolio.webp"}
          width={270}
          height={285}
          alt=""
          className="absolute bottom-[-145px] left-[-256px]"
        />
        <div className="relative">
          <Image
            src={"/decorations/four-starPortfolio.webp"}
            width={83}
            height={83}
            alt=""
            className="absolute bottom-[-41px] left-[-60px]"
          />
          <Link href="#" className="flex justify-center">
            <PrimaryButton>Lihat Lebih Banyak</PrimaryButton>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default PortfolioBox;

const PortfolioCards = [
  {
    id: 1,
    name: "SOMNIUM",
    tag: "Game",
  },
  {
    id: 2,
    name: "SOMNIUM",
    tag: "Game",
  },
  {
    id: 3,
    name: "SOMNIUM",
    tag: "Game",
  },
  {
    id: 4,
    name: "SOMNIUM",
    tag: "Game",
  },
  {
    id: 5,
    name: "SOMNIUM",
    tag: "Game",
  },
  {
    id: 6,
    name: "SOMNIUM",
    tag: "Game",
  },
];
