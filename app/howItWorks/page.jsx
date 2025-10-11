import React from 'react';
import PageComponent from '../components/pageComponent';

export const metadata = {
  title: "How It Works - Anamrina Recruitment",
  description: "Discover how Anamrina Recruitment connects businesses with top professionals. Learn about our streamlined recruitment process and global talent network.",
  keywords: ["how recruitment works", "recruitment process", "talent acquisition", "hiring process", "global recruitment"],
  openGraph: {
    title: "How It Works - Anamrina Recruitment",
    description: "Discover how Anamrina Recruitment connects businesses with top professionals through our streamlined process.",
    url: "https://anamrinarecruitment.com/howItWorks",
  },
  alternates: {
    canonical: "https://anamrinarecruitment.com/howItWorks",
  },
};

const HowItWorksPage = () => {
  return (
    <PageComponent isHomepage={false} path="/api/how-it-works-page"  fetchOptions={{ next: { revalidate: 3200 } }} />
  );
};

export default HowItWorksPage;
