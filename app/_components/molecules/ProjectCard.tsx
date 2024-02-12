import Image from "next/image";

interface ProjectCardProps {
  fullWidth?: boolean;
  title: string;
  description: string;
  imageURL: string;
}

const ProjectCard = (props: ProjectCardProps) => {
  const { fullWidth = false, title, description, imageURL } = props;

  const width = fullWidth
    ? "w-full h-[320px] md:h-[420px] lg:h-[520px]"
    : "h-[240px] md:h-[380px] lg:h-[520px] aspect-square";
  const textSize = fullWidth
    ? "text-text-l lg:text-heading-s"
    : "text-text-m lg:text-text-l";

  const detailSize = fullWidth
    ? "text-text-s md:text-text-m lg:text-text-l "
    : "text-[10px] md:text-text-m lg:text-text-l";

  return (
    <main className={`relative -z-10 flex  ${width}`} draggable={false}>
      <Image
        fill
        src={imageURL || "/images/PortfolioCardBgImage.webp"}
        alt={""}
        priority
        draggable={false}
        style={{
          objectFit: "cover",
          objectPosition: "center top",
        }}
      />
      <main className="absolute flex h-full w-full items-end bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,1)]">
        <section className="flex w-full flex-col gap-2 p-4 lg:p-6 ">
          <div
            className={`h-fit w-max max-w-[50%] rounded-[26px] border-[1px] border-solid border-primary-normal bg-transparent p-[4px_8px] lg:max-w-[50%] ${textSize} font-semibold text-neutral-light lg:p-[8px_16px] `}
          >
            <span className="line-clamp-1">{title}</span>
          </div>
          <p
            className={`line-clamp-2 h-8 w-full text-ellipsis  text-neutral-normal md:h-10  lg:h-12 ${detailSize} `}
          >
            {description}
          </p>
        </section>
      </main>
    </main>
  );
};

export default ProjectCard;
