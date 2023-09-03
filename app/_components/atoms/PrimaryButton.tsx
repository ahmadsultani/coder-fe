interface PrimaryButtonProps {
  children: React.ReactNode;
}

const PrimaryButton = (props: PrimaryButtonProps) => {
  const { children } = props;
  return (
    <button className="flex w-fit items-center gap-2 rounded bg-primary-normal p-[6px_12px]  text-text-m font-medium text-primary-light duration-300 hover:bg-primary-normal-hover lg:p-[12px_24px] lg:text-heading-s">
      {children}
    </button>
  );
};

export default PrimaryButton;
