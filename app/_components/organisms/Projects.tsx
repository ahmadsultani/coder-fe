"use client";

import useDraggableScroll from "use-draggable-scroll";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import ProjectCard from "@molecules/ProjectCard";
import PrimaryButton from "@atoms/PrimaryButton";
import { getAllBestProject, getAllProject } from "@/_service/project";
import { useQuery } from "@tanstack/react-query";

const Projects = () => {
  const { data: bestProjects } = useQuery({
    queryKey: ["best-project"],
    queryFn: getAllBestProject,
  });

  const { data: projects } = useQuery({
    queryKey: ["project", { page: 1, size: 9 }],
    queryFn: () => getAllProject({ page: 1, size: 9 }),
  });

  const ref = useRef(null);

  const { onMouseDown } = useDraggableScroll(ref, { direction: "horizontal" });

  return (
    <div className="relative scroll-mt-20" id="proyek">
      <Image
        src={"/decorations/ProjectEllipse.webp"}
        width={355}
        height={355}
        alt=""
        className="absolute left-[-178px] top-[-198px] -z-10 overflow-hidden"
      />
      <main className="relative flex w-screen  flex-col gap-8 overflow-hidden px-7 py-10 md:px-11 lg:px-16">
        <Image
          src={"/decorations/ProjectStar.webp"}
          width={513}
          height={513}
          alt=""
          className="absolute right-[-211px] top-[-46px] -z-10 overflow-hidden"
        />
        <Image
          src={"/decorations/ProjectStar2.webp"}
          width={387}
          height={387}
          alt=""
          className="absolute bottom-[-69px] left-[-178px] -z-10 overflow-hidden"
        />

        <section className="flex w-full flex-col gap-3 lg:gap-6 ">
          <span className="text-heading-s font-semibold text-neutral-dark lg:text-heading-l">
            Intip Karya-Karya Terbaik Buatan Anggota
            <span className="text-primary-normal ">&nbsp;CODER INSTITUTE </span>
          </span>
          <p className="text-text-s text-neutral-dark lg:text-heading-s">
            Kamu tau kan kalau anggota CODER INSTITUTE keren-keren??Tauu doong
            pasti! <br />
            Anggota yang keren tentunya jago buat karya yang keren dooong! Yuk
            eksplor karya-karya terbaiknya.
          </p>
        </section>
        <section className="w-full">
          <main className="flex w-full flex-col gap-4 md:gap-6 lg:gap-8">
            <section className="w-full ">
              {bestProjects?.data?.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  imageURL={project.cover_image.src}
                  fullWidth={true}
                  description={project.description}
                />
              ))}
            </section>
            <section
              ref={ref}
              className="select-none overflow-x-scroll lg:overflow-x-hidden"
            >
              <section
                onMouseDown={onMouseDown}
                className="flex w-max gap-4 md:gap-6 lg:gap-8 "
              >
                {projects?.data?.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    imageURL={project.cover_image.src}
                    description={project.description}
                  />
                ))}
              </section>
            </section>
          </main>
        </section>
        <section className="flex w-full justify-center">
          <Link href={"/portfolio"}>
            <PrimaryButton>Lihat Semua Project</PrimaryButton>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Projects;
