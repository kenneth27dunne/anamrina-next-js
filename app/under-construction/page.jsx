import Link from 'next/link';
import Image from 'next/image';
import DarkLogo from '../assets/full name globe dark_300x87.png';
import LightLogo from '../assets/full name globe dark_300x87.png';

export default function UnderConstructionPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .uc-logo .dark-logo {
          display: none;
        }
        .uc-logo .light-logo {
          display: block;
        }
        @media (prefers-color-scheme: dark) {
          .uc-logo .dark-logo {
            display: block;
          }
          .uc-logo .light-logo {
            display: none;
          }
        }
      `}} />
      <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-12 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="w-full max-w-4xl mx-auto text-center">
          <div className="mb-8 sm:mb-12 md:mb-16 flex justify-center">
            <div className="uc-logo inline-flex flex-col items-center h-[80px] w-[240px] sm:h-[100px] sm:w-[300px] md:h-[120px] md:w-[360px] relative">
              <Image 
                src={DarkLogo} 
                alt="Anamrina Recruitment - Global Professional Services Logo" 
                fill 
                sizes="(max-width: 640px) 240px, (max-width: 1024px) 300px, 360px" 
                priority={true} 
                className="dark-logo object-contain" 
              />    
              <Image 
                src={LightLogo} 
                alt="Anamrina Recruitment - Global Professional Services Logo" 
                fill 
                sizes="(max-width: 640px) 240px, (max-width: 1024px) 300px, 360px" 
                priority={true} 
                className="light-logo object-contain" 
              />            
            </div>
          </div>
        
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h1 className="hero-title text-[#08163b] mb-4 sm:mb-6">
              Under Construction
            </h1>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-primary mx-auto mb-4 sm:mb-6"></div>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#08163b] mb-6 sm:mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-quicksand)' }}>
            We're currently working on improving our website to serve you better.
          </p>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-xl mx-auto" style={{ fontFamily: 'var(--font-quicksand)' }}>
            Please check back soon. In the meantime, you can still{' '}
            <Link 
              href="/register" 
              className="text-primary hover:text-primary-dark font-semibold underline transition-colors"
            >
              register your interest
            </Link>
            {' '}with us.
          </p>
          
          <div className="flex justify-center">
            <Link href="/register">
              <button className="btn btn-primary text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4">
                Register Your Interest
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

