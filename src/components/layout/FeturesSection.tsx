import Image from "next/image";
import React from "react";
import Heading from "../icons/Heading";
import Button from "../icons/Button";
import FeatureCard from "./FeatureCard";
import FeatureBlock from "./FeatureBlock";
import { features, featuresBlock } from "@/constants/feature";

const FeturesSection = () => {
  return (
    <div>
      {/* Features section */}
      <section
        id="features"
        className="flex flex-col gap-y-12 md:gap-y-20 lg:gap-y-28"
      >
        {/* Part 1 */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <Image
            src="/bg2.png"
            width={1920}
            height={1080}
            alt="second banner"
            className="absolute -z-50 w-[1400px] h-[670px] top-0 left-0 opacity-5"
          />
          <div className="flex flex-col gap-4 items-center text-center lg:items-start lg:text-start">
            <Heading title="Powerful features to help you manage all your leads." />
            <p className="lg:max-w-[34rem] leading-normal sm:text-lg sm:leading-8">
              Apsum dolor sit amet consectetur. Aliquam elementum elementum in
              ultrices. Dui maecenas ut eros turpis ultrices metus morbi aliquet
              vel.
            </p>
            <Button>get started</Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-4">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
        {/* Part 1 */}

        {/* Part 2 */}
        {featuresBlock.map((item, index) => (
          <FeatureBlock key={index} {...item} />
        ))}
        {/* Part 2 */}
      </section>
      {/* Features section */}
    </div>
  );
};

export default FeturesSection;