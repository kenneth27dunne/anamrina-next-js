import React from 'react'
import PageComponent from '../components/pageComponent';

export default async function Contact() {
  return (
    <PageComponent path="/api/contact-page" isHomepage={false} fetchOptions={{ next: { revalidate: 6600 } }} />
  )
}
     