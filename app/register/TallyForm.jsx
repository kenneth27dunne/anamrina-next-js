'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Script from 'next/script';

export default function TallyForm({ showSuccess = false }) {
  const router = useRouter();
  const tallySrc = "https://tally.so/embed/kddVBo?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        router.push('/register');
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [showSuccess, router]);

  if (showSuccess) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
        <div className="mb-4">
          <svg className="w-16 h-16 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
        <p className="text-lg text-gray-600 mb-2">Your interest has been registered successfully.</p>
        <p className="text-sm text-gray-500">We'll be in touch with you soon.</p>
      </div>
    );
  }

  return (
    <>
      <iframe
        src={tallySrc}
        data-tally-src={tallySrc}
        loading="eager"
        width="100%"
        height="595"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Register Your Interest"
        style={{ border: 'none' }}
      />
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined' && typeof window.Tally) {
            window.Tally.loadEmbeds();
          }

          window.addEventListener("message", function (event) {
            if (event.origin !== "https://tally.so") return;
        
            const data = event.data;
        
            if (data?.event === "Tally.FormSubmitted") {
              console.log("Tally form submitted", data);
              router.push('/register?success=true');
            }
          });

        }}
      />
    </>
  );
}

