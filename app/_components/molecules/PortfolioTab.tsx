"use client";

import { useState } from "react";
import PortfolioTabItem from "../atoms/PortfolioTabItems";

const PortfolioTab = () => {
  const [active, setActive] = useState<number | null>(1);
  return (
    <main className=" flex justify-between gap-8 overflow-scroll px-6 md:overflow-auto md:px-9 lg:px-12">
      {PortfolioTabItems.map((btn) => (
        <PortfolioTabItem
          setActive={setActive}
          id={btn.id}
          active={active}
          key={btn.id}
          name={btn.name}
        />
      ))}
    </main>
  );
};

export default PortfolioTab;

const PortfolioTabItems = [
  {
    id: 1,
    name: "Semua",
  },
  {
    id: 2,
    name: "Website",
  },
  {
    id: 3,
    name: "Mobile",
  },
  {
    id: 4,
    name: "Game",
  },
  {
    id: 5,
    name: "UI/UX",
  },
  {
    id: 6,
    name: "IOT",
  },
];
