import React from "react";
import { Check } from "lucide-react";
import Link from "next/link";
import ImageComponent from "../ui/ImageComponent";

const ServicesSection = ({ title, description, services, learnMoreLink }) => {
  
  return (
    <section className="services-section">
      <div className="inner-wrapper">
        <div className="services-header">
          <h2 className="section-title">{title}</h2>
          <p>{description}</p>
        </div>

        {/* Service Cards */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 text-left">
          {services.map((service, index) => (
            <div key={index} className="service-card h-[345px] group overflow-hidden" 
              style={{
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}>
      
              {/* Service Image */}
              <div className="relative w-full h-48 rounded-xl overflow-hidden">
                <ImageComponent 
                  localSrc={service.ImagePath} 
                  strapiImage={service.Image} 
                  alt={service.Title || "Service image"}
                  loading="lazy"
                  imgProps={{ 
                    fill: true, 
                    style: { objectFit: "cover" },
                    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  }} 
                />
              </div>

              {/* Service Info */}
              <h3 className="service-title">{service.Title}</h3>
              <p className="service-text max-w-[260px] md:max-w-[295px]">{service.Description}</p>

              {/* Arrow Button */}
              <div className="service-arrow">                
                  <Check />
              </div>
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <Link href={learnMoreLink}>
          <button className="services-btn btn btn-primary">Learn More</button>
        </Link>
      </div>
    </section>
  );
};

export default ServicesSection;
