import { getIconComponent } from "./icons";
import InfoCardSection from '../components/strapiComponents/InfoCardSection'
import FeatureSection from '../components/strapiComponents/FeatureSection'
import ServicesSection from '../components/strapiComponents/ServicesSection'
import Feature2Section from '../components/strapiComponents/Feature2Section'
import JobListingsSection from '../components/strapiComponents/JobListingsSection'
import GridImageCards from '../components/strapiComponents/GridImageCards'
import ContactForm from "../components/ui/ContactForm";
import TestimonialSlider from "../components/ui/TestimonialSlider";
import { getJobListingsData } from "./fetchHelper";
import DynamicContactFormClient from "../components/ui/DynamicContactFormClient";

export { getIconComponent };

function getBlockKey(block, index) {
  if (typeof block?.id === 'number' || typeof block?.id === 'string') return block.id;
  if (typeof block?.documentId === 'string') return block.documentId;
  return `block-${index}`;
}

export const getBlockComponent = async (block, searchParams, index = 0) => { 
  const key = getBlockKey(block, index);
  switch(block.__component.toLowerCase()) {
    case 'layout.info-card-block':      
      return <InfoCardSection key={key} {...block} />

    case 'layout.feature-block':
      return <FeatureSection key={key} {...block} />

    case 'layout.service-block':
      return <ServicesSection key={key} 
        title={block.Title}
        description={block.Description}
        services={block.Services}
        learnMoreLink={block.CallToActionURL}       
        /> 
    case 'layout.contact-form':
      return <DynamicContactFormClient key={key} {...block} />;
    case 'layout.testimonial-block':
      return <TestimonialSlider key={key} {...block} />
    case 'component.job-listing':      
      let data = await getJobListingsData(searchParams)
      return <JobListingsSection key={key} {...block} {...data} />
    case 'layout.feature2-block':
      return <Feature2Section key={key} {...block} />
    case 'layout.grid-image-cards':
      return <GridImageCards key={key} {...block} />
    default: 
      return null;
  }
}