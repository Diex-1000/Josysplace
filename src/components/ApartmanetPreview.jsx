'use client';

import React from 'react';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';

const data = [
  {
    img: '/A22.jpg',
    title: 'Three‑Bedroom Apartment',
    desc: 'Spacious with a living room, kitchen, and three guest rooms.',
    href: '/dept3',
  },
  {
    img: '/A17.jpg',
    title: 'Two‑Bedroom Apartment',
    desc: 'Cozy and modern, with a living room, kitchen, and two guest rooms.',
    href: '/dept2',
  },
  {
    img: '/B11.jpg',
    title: 'One‑Bedroom Apartment',
    desc: 'Comfortable with a living room, kitchen, and one guest room.',
    href: '/dept1',
  },
];

export default function ApartmentPreview() {
  return (
    <section className="w-full bg-slate-300 py-12 px-4">
      <h2 className="text-center text-3xl font-bold mb-10 text-gray-900">
        Our Apartments
      </h2>

      <div className="mx-auto max-w-7xl grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map(({ img, title, desc, href }, i) => (
          <div
            key={i}
            className="max-w-sm rounded-lg bg-gray-800 shadow-xl overflow-hidden transition transform hover:scale-105"
          >
            <img src={img} alt={title} className="w-full h-64 object-cover" />
            <div className="p-5">
              <h3 className="mb-2 text-2xl font-bold tracking-tight text-white">
                {title}
              </h3>
              <p className="mb-4 font-normal text-gray-400">{desc}</p>
              <Link href={href} className="inline-flex items-center px-3 py-2 text-sm font-medium text-white rounded-lg bg-neutral-950 hover:bg-neutral-900">
                See more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
