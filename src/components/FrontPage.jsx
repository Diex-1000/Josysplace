import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const images = [
  '/via34.jpg',
  '/via35.jpg',
  '/via36.jpg',
  '/via37.jpg',
  '/via38.jpg',
  '/gym37.jpg',
  '/gym38.jpg',
];

function FrontPage() {
  return (
    <div className="w-full pt-4">
      <Carousel opts={{ loop: true }} className="w-full">
        <CarouselContent>
          {images.map((src, i) => (
            <CarouselItem key={i} className="basis-full md:basis-1/3">
              <img
                src={src}
                alt={`slide-${i + 1}`}
                className="h-[450px] w-full object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2" />
        <CarouselNext className="right-4 top-1/2 -translate-y-1/2" />
      </Carousel>
    </div>
  );
}

export default FrontPage;
