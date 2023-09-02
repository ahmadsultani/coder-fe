"use client";
import useDraggableScroll from "use-draggable-scroll";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import ProjectCard from "@molecules/ProjectCard";
import PrimaryButton from "@atoms/PrimaryButton";

const Projects = () => {
  const ref = useRef(null);

  const { onMouseDown } = useDraggableScroll(ref, { direction: "horizontal" });
  return (
    <main className="relative flex w-screen flex-col gap-8 p-[40px_64px]">
      <Image
        src={"/images/ProjectEllipse.webp"}
        width={355}
        height={355}
        alt=""
        className="absolute left-[-178px] top-[-198px] -z-10"
      />
      <Image
        src={"/images/ProjectStar.webp"}
        width={513}
        height={513}
        alt=""
        className="absolute right-[-211px] top-[-46px] -z-10"
      />
      <Image
        src={"/images/ProjectStar2.webp"}
        width={387}
        height={387}
        alt=""
        className="absolute bottom-[-69px] left-[-178px] -z-10"
      />

      <section className="flex w-full flex-col gap-6 ">
        <span className="flex text-heading-l font-semibold text-neutral-dark">
          <span className=" ">Intip Karya-Karya Terbaik Buatan Anggota</span>
          <span className="text-primary-normal ">&nbsp;CODER INSTITUTE </span>
        </span>
        <p className="text-heading-s text-neutral-dark">
          Kamu tau kan kalau anggota CODER INSTITUTE keren-keren??Tauu doong
          pasti! <br />
          Anggota yang keren tentunya jago buat karya yang keren dooong! Yuk
          eksplor karya-karya terbaiknya.
        </p>
      </section>
      <section className="w-full">
        <main className="flex w-full flex-col gap-8">
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
          <section ref={ref} className="select-none overflow-x-hidden">
            <section onMouseDown={onMouseDown} className="flex w-max gap-8 ">
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
        <Link href={"/"}>
          <PrimaryButton>Lihat Semua Project</PrimaryButton>
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
