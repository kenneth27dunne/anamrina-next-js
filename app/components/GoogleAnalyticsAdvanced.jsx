'use client';

import { GoogleAnalytics as GA, sendGAEvent } from '@next/third-parties/google';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function GoogleAnalyticsAdvanced() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GA_ID) return;

    // Track page views
    sendGAEvent('page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: pathname,
    });
  }, [pathname, searchParams, GA_ID]);

  if (!GA_ID) {
    console.warn('Google Analytics ID not found. Please set NEXT_PUBLIC_GA_ID in your environment variables.');
    return null;
  }

  return <GA gaId={GA_ID} />;
}

// Utility functions for tracking custom events
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_GA_ID) {
    sendGAEvent(eventName, parameters);
  }
};

// Predefined event tracking functions
export const trackContactForm = (formType = 'contact') => {
  trackEvent('form_submit', {
    form_type: formType,
    event_category: 'engagement',
    event_label: 'contact_form',
  });
};

export const trackJobApplication = (jobTitle, company) => {
  trackEvent('job_application', {
    job_title: jobTitle,
    company: company,
    event_category: 'engagement',
    event_label: 'job_application',
  });
};

export const trackPageView = (pageName) => {
  trackEvent('page_view', {
    page_name: pageName,
    event_category: 'navigation',
  });
};

export const trackButtonClick = (buttonName, location) => {
  trackEvent('button_click', {
    button_name: buttonName,
    button_location: location,
    event_category: 'engagement',
  });
};
