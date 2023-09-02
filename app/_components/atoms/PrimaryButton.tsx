interface PrimaryButtonProps {
  children: React.ReactNode;
}

const PrimaryButton = (props: PrimaryButtonProps) => {
  const { children } = props;
  return (
    <button className="flex items-center gap-2 rounded-[4px] bg-primary-normal p-[12px_24px] text-heading-s font-medium text-primary-light duration-300 hover:bg-primary-normal-hover">
      {children}
    </button>
  );
};

export default PrimaryButton;
