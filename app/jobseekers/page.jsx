import React from 'react'
import PageComponent from '../components/pageComponent';

export const metadata = {
  title: "Job Seekers - Anamrina Recruitment",
  description: "Connecting business with professions from around the world",
  icons: {
    icon: '/white_icon_web.png',
  },
};

export default function JobSeekers({searchParams}) {  
  return (
    <>
      <PageComponent path="/api/job-seekers-page" isHomepage={false} searchParams={searchParams} />
    </>
  )
}
     
