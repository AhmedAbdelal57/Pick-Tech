/* eslint-disable @typescript-eslint/no-unused-vars */
import Button from "@/components/icons/Button";
import Heading from "@/components/icons/Heading";
import ClientSection from "@/components/layout/clientSection";
import ContactSection from "@/components/layout/ContactSection";
import Customers from "@/components/layout/Customers";
import FeturesSection from "@/components/layout/FeturesSection";
import PricingSection from "@/components/layout/PricingSection";
import { ArrowRightCircle, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-hidden pt-24 lg:pt-28 antialiased">
      <div className="relative container ">
        <Image
          src="/bg.png"
          width={1920}
          height={1080}
          alt="test"
          className="absolute -z-50 w-full min-h-screen md:max-h-[670px] md:h-full lg:min-h-screen -top-20 left-0 opacity-10"
        />
        {/* Home section */}
        <section id="home" className="relative">
          {/* bubbles light */}
          <figure className="bubble w-96 lg:w-[520px] h-96 bg-indigo-600 top-16 -left-40" />
          <figure className="bubble w-96 lg:w-[430px] h-96 bg-sky-600 bottom-16 md:bottom-44  -right-20 md:right-20" />
          <div className="flex flex-col text-center space-y-12">
            <div className="flex flex-col items-center space-y-6">
              <p className="capitalize border border-slate-700 py-1 px-3 text-xs rounded-3xl cursor-pointer hover:border-sky-500 hover:bg-slate-800 shadow-md transition-all">
                new features is now available.
                <ArrowRightCircle className="inline ml-1 w-4 h-4" />
              </p>
              <Heading title="Transform Your Premium environment" />
              <Heading title=" with the perfect solution" />
              <p className="max-w-[46rem] leading-normal sm:text-lg sm:leading-8">
                Fully integrated solution allowing you to take the lead of your
                industry &rsquo;
              </p>
              <div className="flex items-center gap-4">
                <Button>
                  get started
                  <MoveRight className="w-4 h-4" />
                </Button>
                <Link href="#pricing">
                  <Button variant="outline">view pricing</Button>
                </Link>
              </div>
            </div>
            <Image
              src="/cards/card-02.jpg"
              width={670}
              height={370}
              alt="banner"
              className="mx-auto shadow-xl"
            />
          </div>
        </section>
        {/* Home section */}
        {/* Clients section */}
        <ClientSection />
        {/* Clients section */}
        {/* Fetures section */}
        <FeturesSection />
        {/* Fetures section */}
        {/* Pricing section */}
        <PricingSection />
        {/* Pricing section */}
        {/* Customers section */}
        {/* <Customers /> */}
        {/* Customers section */}
        {/* Contact section */}
        <ContactSection />
        {/* Contact section */}
      </div>
    </main>
  );
}
