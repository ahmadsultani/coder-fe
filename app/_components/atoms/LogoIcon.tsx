import Image from "next/image";

interface CoderLogoProps {
  size: number;
}

export default function CoderLogo(props: CoderLogoProps) {
  return (
    <Image
      draggable={false}
      src="./icons/logo-coder.svg"
      alt="Coder's Logo"
      width={props.size}
      height={props.size}
      priority
    />
  );
}
