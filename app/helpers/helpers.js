import * as MdIcons from "react-icons/md";
import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import * as HiIcons from "react-icons/hi";
import * as BiIcons from "react-icons/bi";
import * as TbIcons from "react-icons/tb";
import * as AiIcons from "react-icons/ai";

import InfoCardSection from '../components/strapiComponents/InfoCardSection'
import FeatureSection from '../components/strapiComponents/FeatureSection'
import ServicesSection from '../components/strapiComponents/ServicesSection'
import Feature2Section from '../components/strapiComponents/Feature2Section'
import JobListingsSection from '../components/strapiComponents/JobListingsSection'
import GridImageCards from '../components/strapiComponents/GridImageCards'
import ContactForm from "../components/ui/ContactForm";
import TestimonialSlider from "../components/ui/TestimonialSlider";
import { getJobListingsData } from "./fetchHelper";


export const getIconComponent = (iconName) => {
  if(iconName === undefined || iconName.length <= 0) 
    return null;

  iconName = iconName.trim();
  return MdIcons[iconName] || FaIcons[iconName] || FiIcons[iconName] || AiIcons[iconName] 
      || RiIcons[iconName] || HiIcons[iconName] || BiIcons[iconName] || TbIcons[iconName]
      || null; // Default icon if not found
};


export const getBlockComponent = async (block, searchParams) => { 
  switch(block.__component.toLowerCase()) {
    case 'layout.info-card-block':      
      return <InfoCardSection key={block.id} {...block} />

    case 'layout.feature-block':
      return <FeatureSection key={block.id} {...block} />

    case 'layout.service-block':
      return <ServicesSection key={block.id} 
        title={block.Title}
        description={block.Description}
        services={block.Services}
        learnMoreLink={block.CallToActionURL}       
        /> 
    case 'layout.contact-form':
      return <ContactForm key={block.id} {...block} />
    case 'layout.testimonial-block':
      return <TestimonialSlider key={block.id} {...block} />
    case 'component.job-listing':      
      let data = await getJobListingsData(searchParams)
      return <JobListingsSection key={block.documentId} {...block} {...data} />
    case 'layout.feature2-block':
      return <Feature2Section key={block.id} {...block} />
    case 'layout.grid-image-cards':
      return <GridImageCards key={block.id} {...block} />
    default: 
      null
  }
}