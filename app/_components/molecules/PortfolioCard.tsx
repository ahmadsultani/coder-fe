import Image from "next/image";

interface PortfolioCardProps {
  tag: string;
  name: string;
  display: string;
}
const PortfolioCard = (props: PortfolioCardProps) => {
  const { tag, name, display } = props;

  return (
    <main draggable={false} className={`relative ${display} h-[315px]`}>
      <Image
        fill
        src={"/images/PortfolioCardBgImage.webp"}
        alt={""}
        priority
        draggable={false}
        style={{
          objectFit: "cover",
          objectPosition: "center top",
        }}
        className=""
      />
      <main className="absolute flex h-full w-full items-end bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,1)] p-[20px_24px]">
        <section className="flex flex-col gap-2">
          <span className="w-min rounded-[26px] bg-primary-normal p-[4px_16px] text-text-l font-semibold text-primary-light">
            {tag}
          </span>
          <span className="text-heading-s font-semibold text-primary-light">
            {name}
          </span>
        </section>
      </main>
    </main>
  );
};

export default PortfolioCard;
