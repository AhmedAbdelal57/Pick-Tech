import React from "react";
import { clients } from "@/constants/clients";
import Image from "next/image";

const ClientSection = () => {
  return (
    <div>
      {/* Clients section */}
      <section
        id="clients"
        className="max-w-[62rem] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-4"
      >
        {clients.map((client, index) => (
          <div key={index} className="text-center">
            <Image
              src={client.imageUrl}
              width={120}
              height={80}
              alt={client.alt}
              className="w-40 md:w-full mx-auto"
            />
            <p className="mt-2 text-sm text-gray-600">{client.alt}</p>
          </div>
        ))}
      </section>
      {/* Clients section */}
    </div>
  );
};

export default ClientSection;
