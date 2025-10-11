import React from 'react'
import PageComponent from '../components/pageComponent'

export const metadata = {
  title: "Employers - Anamrina Recruitment",
  description: "Find the perfect candidate for your business. We have a wide range of professionals ready for hire.",
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
  },
};

export default function Employers() {
  return (
    <PageComponent 
      path="/api/employer-page"
      isHomepage={false}
      fetchOptions={{ next: { revalidate: 1800 } }} 
     />
  )
}
