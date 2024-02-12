import Spinner from "@atoms/Spinner";

interface LoaderContainerProps {
  className?: string;
}

const LoaderContainer: React.FC<LoaderContainerProps> = ({ className }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Spinner fill="#EBB702" height={40} width={40} />
    </div>
  );
};

export default LoaderContainer;
