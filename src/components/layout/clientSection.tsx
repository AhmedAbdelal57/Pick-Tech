import React from "react";
import { clients } from "@/constants/clients";
import Image from "next/image";

const ClientSection = () => {
  return (
    <div>
      {/* Clients section */}
      <section
        id="Customers"
        className="max-w-[300px] mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-4"
      >
        {clients.map((client, index) => (
          <div
            key={index}
            className="text-center flex flex-col justify-around items-center"
          >
            <Image
              src={client.imageUrl}
              width={100}
              height={100}
              alt={client.alt}
              className="w-40 md:w-full mx-auto"
            />
          </div>
        ))}
      </section>
      {/* Clients section */}
    </div>
  );
};

export default ClientSection;
