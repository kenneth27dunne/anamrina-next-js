import React from 'react'
import PageComponent from '../components/pageComponent';

export const metadata = {
  title: "Contact - Anamrina Recruitment",
  description: "Contact us for any inquiries or to learn more about our services."
};

export default async function Contact() {
  return (
    <PageComponent path="/api/contact-page" isHomepage={false} fetchOptions={{ next: { revalidate: 6600 } }} />
  )
}
     