import React from 'react'
import PageComponent from '../components/pageComponent';

export const metadata = {
  title: "Job Seekers - Anamrina Recruitment",
  description: "Find the perfect job for you. We have a wide range of job listings for you to choose from.",
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
  },
};

export default function JobSeekers({searchParams}) {  
  return (
    <>
      <PageComponent path="/api/job-seekers-page" isHomepage={false} searchParams={searchParams} fetchOptions={{ next: { revalidate: 1200 } }} />
    </>
  )
}
     
