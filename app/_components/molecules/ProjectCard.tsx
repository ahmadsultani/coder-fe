import Image from "next/image";

interface ProjectCardProps {
  fullWidth?: boolean;
  title: string;
  description: string;
}

const ProjectCard = (props: ProjectCardProps) => {
  const { fullWidth = false, title, description } = props;

  const width = fullWidth ? "w-full" : "w-[520px]";

  return (
    <main className={`relative h-[520px] ${width} bg-yellow-500 flex `}>
      <Image
        fill
        src={"/images/ProjectCardBgImage.webp"}
        alt={""}
        priority
        draggable={false}
        style={{
          objectFit: "cover",
          objectPosition: "center top",
        }}
      />
      <main className="absolute  h-full w-full flex items-end bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,1)]">
        <section className="flex flex-col gap-2 p-6 ">
          <span className="bg-transparent rounded-[26px] p-[8px_16px] border-[1px] border-solid border-primary-normal w-max text-neutral-light text-heading-s font-semibold  ">
            {title}
          </span>
          <p className="text-neutral-normal text-ellipsis line-clamp-2 text-l">
            {description}
          </p>
        </section>
      </main>
    </main>
  );
};

export default ProjectCard;
