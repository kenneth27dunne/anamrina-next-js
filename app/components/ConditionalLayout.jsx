'use client';

import { usePathname } from 'next/navigation';
import Navbar from './ui/Navbar';
import Footer from './ui/Footer';

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();
  const isUnderConstruction = pathname === '/under-construction';

  return (
    <div
      className="anamrina-ref-site"
      style={{
        fontFamily: '"Plus Jakarta Sans", "Segoe UI", system-ui, sans-serif',
        color: "#111C28",
        background: "#FDFEFE",
        minHeight: "100vh",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      {!isUnderConstruction && <Navbar />}
      {children}
      {!isUnderConstruction && <Footer />}
    </div>
  );
}

