"use client";

import Image from "next/image";

const UpButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main
      title="Scroll To Top"
      className="fixed bottom-4 right-4 z-10 select-none"
    >
      <button
        onClick={scrollToTop}
        className="flex aspect-square h-12 items-center justify-center rounded-[50%] bg-primary-normal opacity-50 duration-300 hover:bg-primary-normal hover:opacity-100 lg:h-14"
      >
        <Image
          alt="up"
          fill
          priority
          src={"/icons/upButton.svg"}
          className="p-[20%]"
          draggable={false}
        />
      </button>
    </main>
  );
};

export default UpButton;
