import Link from "next/link";
import Image from "next/image";

interface PrimaryButtonProps {
  children: React.ReactNode;
  iconLeft?: boolean;
  icon?: React.ReactElement;
}
const PrimaryButton = (props: PrimaryButtonProps) => {
  const { children, iconLeft = false, icon } = props;
  const flexDirection = iconLeft ? "flex-row-reverse" : "flex-row";
  return (
    <button
      className={`flex ${flexDirection}  items-center gap-1 rounded-lg bg-primary-normal p-[12px_24px] duration-300 hover:bg-primary-normal-hover `}
    >
      <span className="text-heading-s font-medium text-white">{children}</span>
      {icon}
    </button>
  );
};

export default PrimaryButton;
