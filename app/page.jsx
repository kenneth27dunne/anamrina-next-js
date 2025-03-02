import Hero from './components/strapiComponents/Hero'
import { getBlockComponent } from './helpers/helpers'
import { getStrapiData } from './helpers/fetchHelper'

export default async function Home() {

  const strapiData = await getStrapiData('/api/home-page');//, { next: { revalidate: 3600 } });
  const { HeroSection, Blocks } = strapiData.data;

  // console.log(strapiData)

  return (
    <>
      <header>
        <Hero isHomepage={true} 
              pill={HeroSection.Pill} 
              title={HeroSection.Title} 
              description={HeroSection.Description} 
              CTA={HeroSection.CTA} />
      </header>
      <main>
        { Blocks.map(e => (getBlockComponent(e))) }
      </main>
    </>
  )
}


// const jobFeatureSection = {
//   title: "Your Perfect Job is <br />just a <span>Step Away</span>",
//   description:
//     "Your ideal career opportunity is within reach. With Anamrina Recruitment, we connect talented professionals to the best roles, ensuring a perfect match between skills and company needs. Take the next step towards your dream job today!",
//   featureBullets: [
//     "Find job listings tailored to your skills.",    
//     "Apply easily with our intuitive platform.",
//     "Work remotely with state-of-the-art facilities.",
//     "Discover leading companies eager to hire top talent."
//   ],
//   featureImage: "/peopleBackToBack.png",
//   callToAction: {
//     title: "Explore Jobs",
//     href: "/jobseekers"
//   }
// };

// const servicesData = {
//   header: {
//     title: "Our Expert Services, Your Success",
//     description:
//       "We provide tailored recruitment solutions, connecting Irish businesses with top global talent for seamless remote work, ensuring your success through skilled professionals and efficient processes.",
//   },
//   services: [
//     {
//       title: "Managed Office Facilities",
//       description:
//         "State-of-the-art infrastructure, ensuring professionals have everything they need to succeed.",
//       image: "/office-facilities.png",
//     },
//     {
//       title: "Specialized Recruitment Solutions",
//       description:
//         "Connecting businesses with top-tier talent in diverse industries.",
//       image: "/office-facilities.png",
//     },
//     {
//       title: "Temporary Staffing Services",
//       description:
//         "Quick and reliable staffing solutions for short-term needs.",
//       image: "/office-facilities.png",
//     },
//   ],
//   learnMoreLink: "/services",
// };

// var infoCardSection = {
//   title: "Why Choose Anamrina Recruitment?", 
//   description: "",
//   cards: [
//     { title: "Skilled Talent", description: "Access to highly qualified professionals.", iconName: "FaUserGraduate" },
//     { title: "Seamless Integration", description: "Effortless remote work solutions tailored to your needs.", iconName: "MdOutlineSyncAlt"  },
//     { title: "Customized Approach", description: "Tailored recruitment to fit your business goals.", iconName: "AiOutlineControl     "  },
//     { title: "Proven Success", description: "Trusted by businesses to boost productivity and growth.", iconName: "FaChartLine"  },
//     // { title: "Global Reach", description: "Connecting talent worldwide for your business needs." }, // This will move to the second row
//   ]
// }

// const homepageJson = {
//   servicesData,
//   jobFeatureSection,
//   infoCardSection
// }