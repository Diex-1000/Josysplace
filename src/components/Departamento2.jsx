'use client';

import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import { X } from 'lucide-react';

const visibleImages = [
  { src: '/A17.jpg', index: 0 },
  { src: '/habitacion38.jpg', index: 1 },
  { src: '/habitacion37.jpg', index: 2 },
  { src: '/habitacion36.jpg', index: 3 },
  { src: '/habitacion35.jpg', index: 4 },
];

const galleryImages = [
  // ✅ Visible images (same order as above)
  { original: '/A17.jpg', thumbnail: '/A22.jpg' },
  { original: '/habitacion38.jpg', thumbnail: '/habitacion38.jpg' },
  { original: '/habitacion37.jpg', thumbnail: '/habitacion37.jpg' },
  { original: '/habitacion36.jpg', thumbnail: '/habitacion36.jpg' },
  { original: '/habitacion35.jpg', thumbnail: '/habitacion35.jpg' },

  // ✅ Hidden extra images for the gallery only:
  { original: '/playa.jpg', thumbnail: '/playa.jpg' },
  { original: '/playa2.jpg', thumbnail: '/playa2.jpg' },
  { original: '/playa3.jpg', thumbnail: '/playa3.jpg' },
  // Agrega más imágenes aquí si deseas
];

export default function Departamento2() {
  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const openGallery = (index) => {
    setStartIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="bg-white px-6 lg:px-24 pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-10 rounded-xl overflow-hidden">
        {/* Imagen principal */}
        <div className="h-[500px] cursor-pointer" onClick={() => openGallery(0)}>
          <img
            src={visibleImages[0].src}
            alt="Main"
            className="h-full w-full object-cover rounded-xl lg:rounded-r-none hover:brightness-75 transition duration-200"
          />
        </div>

        {/* Cuadrícula de 4 imágenes secundarias */}
        <div className="grid grid-cols-2 grid-rows-2 gap-2 h-[500px]">
          {visibleImages.slice(1).map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={`Room ${i + 2}`}
              onClick={() => openGallery(img.index)}
              className={`object-cover w-full h-full cursor-pointer hover:brightness-75 transition duration-200 ${
                i === 0 ? 'rounded-tr-xl lg:rounded-tr-none' : ''
              } ${i === 3 ? 'rounded-br-xl' : ''}`}
            />
          ))}
        </div>
      </div>

      {/* Modal carrusel */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            className="absolute top-5 left-5 text-white z-50"
            onClick={() => setIsOpen(false)}
          >
            <X size={30} />
          </button>
          <div className="w-full max-w-5xl px-4">
            <ImageGallery
              items={galleryImages}
              startIndex={startIndex}
              showThumbnails={true}
              showFullscreenButton={false}
              showPlayButton={false}
            />
          </div>
        </div>
      )}
    </div>
  );
}
