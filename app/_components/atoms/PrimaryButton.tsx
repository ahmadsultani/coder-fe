import Link from "next/link";
import Image from "next/image";

interface PrimaryButtonProps {
  btnText: string;
  btnLinkTo?: string;
  showIcon?: boolean;
  iconLeft?: boolean;
  iconSrc?: string;
}
const PrimaryButton = (props: PrimaryButtonProps) => {
  const {
    btnLinkTo = "",
    btnText,
    showIcon = false,
    iconLeft = true,
    iconSrc = "/",
  } = props;
  const flexDirection = iconLeft ? "flex-row-reverse" : "flex-row";
  const visibility = showIcon ? "" : "hidden";
  return (
    <Link href={btnLinkTo}>
      <button
        className={`flex ${flexDirection}  gap-1 items-center p-[12px_24px] bg-primary-normal rounded-lg`}
      >
        <span className="text-white text-heading-s font-medium">{btnText}</span>
        <Image
          src={iconSrc}
          alt=""
          height={20}
          width={20}
          className={`${visibility}`}
        />
      </button>
    </Link>
  );
};

export default PrimaryButton;
