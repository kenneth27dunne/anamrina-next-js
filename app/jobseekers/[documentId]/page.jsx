
import { MapPin } from "lucide-react";
import ContactForm from "../../components/ui/ContactForm";
import { getJobListing } from "../../helpers/fetchHelper";
import { BlocksRenderer } from "@strapi/blocks-react-renderer" 
import ImageComponent from "../../components/ui/ImageComponent";
import Hero from "../../components/strapiComponents/Hero";


async function JobListing({ params }) {
  const strapiData = await getJobListing(params.documentId);
  const { FullDescription, Title, Location, Company, CompanyLogo } = strapiData.data[0];

  return (
    <>
    <header>
        <Hero isHomepage={false} pill={"Apply now"} title={`Turn Your **Talent** \nInto **Success!**`} isMini={true} />
    </header>
    
    <main className="!mt-9">
      <section className="!pb-0 mb-0">
        <div className="flex items-center gap-3">
            {
              CompanyLogo &&   
              <div className="flex items-center bg-white justify-center rounded-lg p-2 h-[120px] w-[120px] drop-shadow">
                  <ImageComponent strapiImage={CompanyLogo} imgProps={{
                      alt: Title,
                      width: 100,
                      height: 100
                  }} />
              </div>
            }
            <div>
              <h3 className="font-semibold !text-5xl">{Title}</h3>
              <p className="text-gray-500 font-medium text-lg">{Company}</p>

              <div className="flex items-center text-gray-500 text-sm mt-2">
                  <MapPin size={16} className="mr-1" />
                  {Location}
              </div>
            </div>   
        </div>
          {
            FullDescription &&
            <div className="border mt-9 p-6 rounded-lg ">
              <div className="mb-9">                
                <h3 className="mb-6">Full Description</h3>
                <BlocksRenderer content={FullDescription} />                
              </div>
              <ContactForm Title={"Apply today"} Description={"Give us a short introduction to express your interest in applying for this position"} isApply={true} />
            </div> 
          }
      </section>
      {!FullDescription && <ContactForm Title={"Apply today"} Description={"Give us a short introduction to express your interest in applying for this position"} isApply={true} /> }
    </main>
    </>
  )
}

export default JobListing