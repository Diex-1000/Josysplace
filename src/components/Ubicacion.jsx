"use client";

import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Ubicacion() {
  const places = [
    { name: "Chichén Itzá", distance: "112.60 miles" },
    { name: "Cirque du Soleil La Joya", distance: "7 miles" },
    { name: "City Center", distance: "-" },
    { name: "Coba", distance: "67.80 miles" },
    { name: "Coco Bongo", distance: "1 mile" },
    { name: "El Camaleon Golf Course", distance: "3 miles" },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6 justify-center items-start w-full px-4 py-10">
      
      {/* Location */}
      <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-sm h-[400px] flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Location</h2>
          <a
            href="https://www.google.com/maps/place/Calle+38+Nte.+152,+Gonzalo+Guerrero,+Playa+del+Carmen,+Q.R."
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg overflow-hidden hover:opacity-90 transition"
          >
            <Image
              src="/via38.jpg"
              alt="Hotel Location"
              width={600}
              height={300}
              className="rounded-lg object-cover"
            />
          </a>
        </div>
        <p className="text-gray-700 leading-6 mt-4">
          Calle 38 Nte. 152, Gonzalo Guerrero, <br />
          77710 Playa del Carmen, Q.R., México
        </p>
      </div>

      {/* What's Nearby */}
      <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-sm h-[400px] flex flex-col justify-between">
        <h2 className="text-xl font-semibold text-gray-800 mt-6 text-center">
          What's nearby
        </h2>
        <div className="space-y-4 flex-grow flex flex-col justify-center">
          {places.map((place, index) => (
            <div
              key={index}
              className="flex justify-between items-center text-sm text-gray-800"
            >
              <span className="flex items-center gap-2 font-medium">
                <FaMapMarkerAlt className="text-gray-500" /> {place.name}
              </span>
              <span>{place.distance}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Beach Image */}
      <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-sm h-[400px] flex items-center justify-center">
        <Image
          src="/playa.jpg"
          alt="Beach"
          width={600}
          height={300}
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
