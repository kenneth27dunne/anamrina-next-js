import React from 'react';
import PageComponent from '../components/pageComponent';

export const metadata = {
  title: "How It Works - Anamrina Recruitment",
  description: "We offer a wide range of services to help connect businesses from around the world to top professionals."
};

const HowItWorksPage = () => {
  return (
    <PageComponent isHomepage={false} path="/api/how-it-works-page"  fetchOptions={{ next: { revalidate: 3200 } }} />
  );
};

export default HowItWorksPage;
