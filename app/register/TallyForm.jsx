'use client';

import Script from 'next/script';

export default function TallyForm() {
  const tallySrc = "https://tally.so/embed/kddVBo?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";

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
            // Optionally check origin:
            // if (event.origin !== "https://tally.so") return;
        
            const data = event.data;
        
            // Tally sends an object like:
            // {event: 'Tally.FormSubmitted', formId: 'xxxxxx', ...}
            if (data?.event === "Tally.FormSubmitted") {
              console.log("Tally form submitted", data);
        
              // Your logic here:
              // - Fire GTM/GA event
              // - Show thank-you message
              // - Trigger redirect
              // - Mark a flag in your app, etc.
            }
          });

        }}
      />
    </>
  );
}

