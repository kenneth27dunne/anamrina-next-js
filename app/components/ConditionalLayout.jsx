'use client';

import { usePathname } from 'next/navigation';
import Navbar from './ui/Navbar';
import Footer from './ui/Footer';

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();
  const isUnderConstruction = pathname === '/under-construction';

  return (
    <>
      {!isUnderConstruction && <Navbar />}
      {children}
      {!isUnderConstruction && <Footer />}
    </>
  );
}

