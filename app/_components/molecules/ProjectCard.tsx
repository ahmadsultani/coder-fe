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
    <main
      className={`relative -z-10 flex h-[520px] ${width}`}
      draggable={false}
    >
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
      <main className="absolute flex items-end h-full w-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,1)]">
        <section className="flex flex-col gap-2 p-6 w-full">
          <div className="bg-transparent w-max max-w-[50%] h-fit rounded-[26px] p-[8px_16px] border-[1px] border-solid border-primary-normal  text-neutral-light text-heading-s font-semibold">
            <span className="line-clamp-1">{title}</span>
          </div>
          <p className="h-12 w-full text-neutral-normal text-ellipsis line-clamp-2 text-text-l ">
            {description}
          </p>
        </section>
      </main>
    </main>
  );
};

export default ProjectCard;
