/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
interface HeadingProps {
  title: string; // The title to display
  isCentered?: boolean; // Optional, determines if the heading is centered
}
const Heading: React.FC<HeadingProps> = ({ title, isCentered }) => {
  return (
    <h1 className="bg-clip-text text-transparent bg-gradient-to-tr from-sky-200 via-sky-500 to-sky-200 font-extrabold text-3xl sm:text-4xl lg:text-5xl">
      {title}
    </h1>
  );
};

export default Heading;
