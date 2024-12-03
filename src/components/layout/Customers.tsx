import React from "react";
import Heading from "../icons/Heading";
import { testimonials } from "@/constants/testimonials";
import TestimonialCard from "./TestimonialCard";

const Customers = () => {
  return (
    <div>
      {/* Testimonials section */}
      <section id="testimonials" className="flex flex-col gap-8">
        <Heading title="Meet our Customers" isCentered />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </section>
      {/* Testimonials section */}
    </div>
  );
};

export default Customers;
