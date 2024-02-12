interface PrimaryButtonProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  onClick?: () => void;
}

const PrimaryButton = (props: PrimaryButtonProps) => {
  const { fullWidth = false, children, onClick } = props;
  const width = fullWidth ? "w-full" : "w-fit";
  return (
    <button
      onClick={onClick}
      className={`${width} flex items-center gap-2 rounded bg-primary-normal p-[6px_12px] text-text-l font-medium text-primary-light duration-300 hover:bg-primary-normal-hover lg:p-[12px_24px] lg:text-heading-s`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
