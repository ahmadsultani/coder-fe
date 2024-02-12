"use client";

import React, { useRef } from "react";
import PortfolioTabItem from "../atoms/PortfolioTabItems";
import { useQuery } from "@tanstack/react-query";
import { getAllDivision } from "@/_service/division";
import useDraggableScroll from "use-draggable-scroll";

interface PortfolioTabProps {
  active?: number;
  setActive: (id?: number) => void;
}

const PortfolioTab: React.FC<PortfolioTabProps> = ({ active, setActive }) => {
  const { data: divisions } = useQuery({
    queryKey: ["division"],
    queryFn: getAllDivision,
  });

  const ref = useRef(null);

  const { onMouseDown } = useDraggableScroll(ref, { direction: "horizontal" });

  return (
    <main
      ref={ref}
      onMouseDown={onMouseDown}
      className="flex select-none gap-8 overflow-x-scroll px-6 md:overflow-x-hidden md:px-9 lg:px-12"
    >
      <PortfolioTabItem setActive={setActive} active={active} name="Semua" />
      {divisions?.data?.map((division) => (
        <PortfolioTabItem
          setActive={setActive}
          id={division.id}
          active={active}
          key={division.id}
          name={division.name}
        />
      ))}
    </main>
  );
};

export default PortfolioTab;
