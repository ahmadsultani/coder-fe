"use client";
import useDraggableScroll from "use-draggable-scroll";

import { useRef } from "react";
import Link from "next/link";

import ProjectCard from "../molecules/ProjectCard";

const Projects = () => {
  const ref = useRef(null);

  const { onMouseDown } = useDraggableScroll(ref, { direction: "horizontal" });
  return (
    <main className="w-screen flex flex-col gap-8 p-[40px_64px]">
      <section className="flex flex-col gap-6 w-full ">
        <span className="self-center flex text-heading-l font-semibold text-neutral-dark">
          <span className="font-pop text-neutral-dark">7 Project Terbaik</span>
          <span className="text-primary-normal ">&nbsp;CODER</span>
        </span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim eu
          turpis egestas pretium aenean pharetra magna ac placerat. Proin
          sagittis nisl rhoncus mattis. Nunc congue nisi vitae suscipit tellus
          mauris a diam. Sagittis purus sit amet volutpat. Gravida rutrum
          quisque{" "}
        </p>
      </section>
      <section className="w-full">
        <main className="w-full flex flex-col gap-8">
          <section className="w-full ">
            {topProjectLists
              .filter((project) => project.topProject === true)
              .map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  fullWidth={true}
                  description={project.description}
                />
              ))}
          </section>
          <section ref={ref} className="overflow-x-hidden select-none">
            <section onMouseDown={onMouseDown} className="w-max flex gap-8 ">
              {topProjectLists
                .filter((project) => project.topProject !== true)
                .map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                  />
                ))}
            </section>
          </section>
        </main>
      </section>
      <section className="flex w-full justify-center">
        <Link
          href={"/"}
          className="bg-primary-normal p-[12px_64px] font-medium text-white text-heading-s rounded-lg"
        >
          Lihat Semua Project
        </Link>
      </section>
    </main>
  );
};

export default Projects;

const topProjectLists = [
  {
    topProject: false,
    title: "First Project",
    description:
      "loremIpsumas dkasndasjdadkasbdabkasdbk dasdfpoqjkij sdiljasdnlal saldn",
  },
  {
    topProject: false,
    title: "Second Project",
    description:
      "loremIpsumas dkasndasjdadkasbdabkasdbk dasdfpoqjkij sdiljasdnlal saldn",
  },
  {
    topProject: false,
    title: "Third Project",
    description:
      "loremIpsumas dkasndasjdadkasbdabkasdbk dasdfpoqjkij sdiljasdnlal saldn",
  },
  {
    topProject: true,
    title: "Fourth Project(Best One)",
    description:
      "loremIpsumas dkasndasjdadkasbdabkasdbk dasdfpoqjkij sdiljasdnlal saldn",
  },
  {
    topProject: false,
    title: "Fifth Project",
    description:
      "loremIpsumas dkasndasjdadkasbdabkasdbk dasdfpoqjkij sdiljasdnlal saldn",
  },
  {
    topProject: false,
    title: "Sixth Project",
    description:
      "loremIpsumas dkasndasjdadkasbdabkasdbk dasdfpoqjkij sdiljasdnlal saldn",
  },
  {
    topProject: false,
    title: "Seventh Project",
    description:
      "loremIpsumas dkasndasjdadkasbdabkasdbk dasdfpoqjkij sdiljasdnlal saldn",
  },
];
