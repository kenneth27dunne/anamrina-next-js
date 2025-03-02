import React from 'react'
import Hero from '../components/strapiComponents/Hero'
import { getStrapiData } from '../helpers/fetchHelper'
import { getBlockComponent } from '../helpers/helpers';


export default async function PageComponent({ isHomepage, path, fetchOptions, searchParams }) {  

  const strapiData = await getStrapiData(path, fetchOptions);

  if(strapiData.data === null) {
    return <main />
  }

  const { HeroSection, Blocks } = strapiData.data;

  return (
    <>
      {
        HeroSection &&
        <header>
          <Hero isHomepage={isHomepage} 
                pill={HeroSection.Pill} 
                title={HeroSection.Title} 
                description={HeroSection.Description} 
                CTA={HeroSection.CTA} />
        </header>
      }
      <main>
        { Blocks.map(e => (getBlockComponent(e, searchParams))) }
      </main>
    </>
  )
}
     