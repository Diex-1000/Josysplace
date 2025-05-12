import Image from 'next/image';
import {
  Navbar,
  FrontPage,
  Information,
  ApartmanetPreview,
} from '../../components/index';

import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-slate-200">
      <Navbar />
      <FrontPage />
      <Information />
      <ApartmanetPreview />
      <Footer />
    </div>
  );
}
