interface EmptyContainerProps {
  className?: string;
  message?: string;
}

const EmptyContainer: React.FC<EmptyContainerProps> = ({
  className,
  message = "Belum ada Data nih!",
}) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <p className="text-center text-xl font-semibold">{message}</p>
    </div>
  );
};

export default EmptyContainer;
