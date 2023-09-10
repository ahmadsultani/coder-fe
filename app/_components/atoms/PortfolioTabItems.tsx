import React from "react";

interface PortfolioTabItemsProps {
  name: string;
  setActive: (id: number | null) => void;
  active: number | null;
  id: number;
}

const PortfolioTabItems = (props: PortfolioTabItemsProps) => {
  const { name, setActive, active, id } = props;
  const handleClick = () => {
    setActive(id);
  };

  const activeTab =
    active === id
      ? "after:w-[140%] text-primary-normal"
      : "after:w-0 text-black";

  return (
    <button
      onClick={handleClick}
      className={`${activeTab} relative py-2 duration-300 after:absolute after:left-[-20%] after:h-[2px] after:rounded-lg  after:bg-primary-normal after:duration-300 after:content-['']`}
    >
      <span
        className={` relative flex h-full w-full flex-col items-center justify-center text-text-l font-semibold tracking-[-0.34px] duration-300  md:text-text-l lg:text-heading-s `}
      >
        {name}
      </span>
    </button>
  );
};

export default PortfolioTabItems;
