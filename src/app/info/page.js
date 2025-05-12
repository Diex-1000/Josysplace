import Image from 'next/image';
import {
  Navbar,
  ApartmentPreview,
  Ubicacion,
  Amenities,
  Policies
} from '../../components/index';

import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-slate-200">
      <Navbar />

      {/* Imagen destacada */}
      <div className="relative w-full h-[400px] md:h-[500px]">
        <Image
          src="/playa3.jpg" // Asegúrate de guardar tu imagen en public/fondo-hotel.jpg
          alt="Hotel principal"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <Ubicacion/>
      <Amenities />
      <Policies />
      <Footer />
    </div>
  );
}
