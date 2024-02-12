"use client";

import Link from "next/link";
import Image from "next/image";

import { useQuery } from "@tanstack/react-query";

import { getAllProject } from "@/_service/project";

import PortfolioCard from "@molecules/PortfolioCard";
import PortfolioTab from "@molecules/PortfolioTab";
import LoaderContainer from "@molecules/LoaderContainer";

import EmptyContainer from "./EmptyContainer";
import { useState } from "react";
import PopupProjectModal from "./PopupProjectModal";
import { IProject } from "@/_types/project";

const PortfolioBox = () => {
  const [active, setActive] = useState<number>();

  const { data: projects, isLoading } = useQuery({
    queryKey: ["project", { divisionId: active, page: 1, size: 9 }],
    queryFn: () => getAllProject({ divisionId: active, page: 1, size: 9 }),
  });

  const [selectedProject, setSelectedProject] = useState<IProject>();

  return (
    <main className="relative flex w-screen flex-col gap-8 overflow-x-hidden p-[24px_28px] md:p-[24px_48px] lg:p-[24px_64px]">
      <Image
        src={"/decorations/ProjectEllipse.webp"}
        width={355}
        height={355}
        alt=""
        className="absolute left-[-243px] top-[80px] -z-10 select-none"
      />
      <PortfolioTab active={active} setActive={setActive} />
      <section className="relative grid min-h-[400px] grid-cols-1 justify-between gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
        {isLoading ? (
          <LoaderContainer className="col-span-1 md:col-span-2 lg:col-span-3" />
        ) : projects?.data?.length ? (
          projects?.data?.map((card, index) => (
            <PortfolioCard
              key={card.id}
              name={card.title}
              tag={card.division}
              imageURL={card.cover_image.src}
              display={`${index >= 3 ? "hidden" : "flex"} ${
                index >= 4 ? "md:hidden" : "md:flex"
              } md:flex lg:flex`}
              onClick={() => setSelectedProject(card)}
            />
          ))
        ) : (
          <EmptyContainer className="col-span-1 md:col-span-2 lg:col-span-3" />
        )}
      </section>
      <Image
        src={"/decorations/six-starPortfolio.webp"}
        width={355}
        height={355}
        alt=""
        className="absolute right-[-126px] top-[258px] -z-10 select-none"
      />
      <div className="relative flex select-none justify-center">
        <div className="relative select-none">
          <Image
            src={"/decorations/four-starPortfolio.webp"}
            width={83}
            height={83}
            alt=""
            className="absolute bottom-[-41px] left-[-60px]"
          />
        </div>
      </div>

      {selectedProject && (
        <PopupProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(undefined)}
        />
      )}
    </main>
  );
};

export default PortfolioBox;
