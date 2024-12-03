/* eslint-disable @typescript-eslint/no-empty-object-type */
import { featureBlock } from "@/types/interfaces";
import Image from "next/image";
import React from "react";
import Heading from "../icons/Heading";

interface FeatureBlockProps extends featureBlock {}

const FeatureBlock: React.FC<FeatureBlockProps> = ({
  imageUrl,
  title,
  content,
  isReversed,
}) => {
  return (
    <article
      className={`flex flex-col lg:flex-row items-center justify-between gap-8 ${
        isReversed && "lg:flex-row-reverse"
      }`}
    >
      <Image
        src={imageUrl}
        width={370}
        height={370}
        alt="feature"
        className="basis-5/12 w-full shadow-lg"
      />
      <div className="basis-6/12 flex flex-col md:text-center lg:text-start gap-4 md:gap-6">
        <Heading title={title} />
        <p className="lg:max-w-[40rem]">{content}</p>
      </div>
    </article>
  );
};

export default FeatureBlock;
