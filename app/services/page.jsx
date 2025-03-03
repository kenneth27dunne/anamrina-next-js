import React from 'react';
import PageComponent from '../components/pageComponent';

const ServicesPage = () => {
  return (
    <PageComponent isHomepage={false} path="/api/service-page"  fetchOptions={{ next: { revalidate: 1800 } }} />
  );
};

export default ServicesPage;
