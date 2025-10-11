'use client';

import { GoogleAnalytics as GA } from '@next/third-parties/google';

export default function GoogleAnalytics() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  if (!GA_ID) {
    console.warn('Google Analytics ID not found. Please set NEXT_PUBLIC_GA_ID in your environment variables.');
    return null;
  }

  return <GA gaId={GA_ID} />;
}
