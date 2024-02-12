import Image from "next/image";

interface PortfolioCardProps {
  tag: string;
  name: string;
  display: string;
  imageURL: string;
  onClick?: () => void;
}
const PortfolioCard = (props: PortfolioCardProps) => {
  const { tag, name, display, imageURL, onClick } = props;

  return (
    <button
      draggable={false}
      className={`relative ${display} h-[315px] transition-all duration-300 ease-in-out hover:opacity-90 hover:shadow-xl`}
      onClick={onClick}
    >
      <Image
        fill
        src={imageURL || "/images/PortfolioCardBgImage.webp"}
        alt={name}
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
          <span className="text-left text-heading-s font-semibold text-primary-light">
            {name}
          </span>
        </section>
      </main>
    </button>
  );
};

export default PortfolioCard;
