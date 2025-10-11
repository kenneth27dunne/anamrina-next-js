import React from "react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import Star from "../ui/IconStar";
import ImageComponent from "../ui/ImageComponent";

function FeatureSection({Title, Description, FeatureBullets, featureImagePath, featureImage, callToAction}) {
  return (
    <section className="">
     <div className="inner-wrapper flex flex-col md:flex-row items-center justify-between">
         {/* Left Side - Image */}
      <div className="feature-image relative">
        <ImageComponent 
          localSrc={featureImagePath} 
          strapiImage={featureImage} 
          alt="Professionals"
          loading="lazy"
          imgProps={{ 
            width: 500, 
            height: 500, 
            className: "relative z-10",
            sizes: "(max-width: 768px) 100vw, 500px"
          }} 
        />
      </div>

      {/* Right Side - Content */}
      <div className="feature-content max-w-xl text-center md:text-left">
        <h2 className="section-title">
           <ReactMarkdown>{Title}</ReactMarkdown> 
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          {Description}
        </p>

        {/* Feature Bullet Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {
            FeatureBullets.map((f, i) => (
              <div key={i} className="feature-card">
                <span className="feature-icon">
                    <Star />
                </span>
                {f.Bullet}
              </div>
            ))
          }          
        </div>

        {/* Call to Action */}
        {
          callToAction &&
          <Link href={callToAction.url}>
              <button className="btn btn-primary mt-6">{callToAction.text}</button>
          </Link>
        }
      </div>
     </div>
    </section>
  );
}

export default FeatureSection;
