import React from "react";

interface ButtonPrimaryProps {
  children: React.ReactNode;
}

export default function ButtonPrimary(props: ButtonPrimaryProps) {
  return (
    <button
      className="
            flex 
            w-fit 
            items-center 
            justify-center gap-1 
            rounded 
            bg-primary-normal 
            px-4 
            py-3 
            text-heading-s 
            font-medium 
            text-primary-light 
            hover:bg-primary-normal-hover
          "
    >
      {props.children}
    </button>
  );
}
