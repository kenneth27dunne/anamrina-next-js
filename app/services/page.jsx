import React from 'react';
import PageComponent from '../components/pageComponent';

export const metadata = {
  title: "Services - Anamrina Recruitment",
  description: "We offer a wide range of services to help connect businesses from around the world to top professionals."
};

const ServicesPage = () => {
  return (
    <PageComponent isHomepage={false} path="/api/service-page"  fetchOptions={{ next: { revalidate: 1800 } }} />
  );
};

export default ServicesPage;
