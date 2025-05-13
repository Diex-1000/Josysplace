import Image from 'next/image';
import {
  Navbar,
  FrontPage,
  Information,
  ApartmanetPreview,
  Departamento2
} from '../../components/index';

import Footer from '@/components/Footer';
import Reservaciones1 from '@/components/Reservaciones1';

export default function Home() {
  return (
    <div className="bg-slate-200">
      <Navbar />
      <Departamento2 />
      <Reservaciones1 />
      <Footer />
    </div>
  );
}
