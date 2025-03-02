'use client'
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import InfoCard from "../ui/InfoCard";
import { getIconComponent }  from "../../helpers/helpers";

function InfoCardSection({ Title, Description, cards }) {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="py-12 ">
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <h2 className="section-title max-w-[17ch] md:mr-8">
          <ReactMarkdown>{Title}</ReactMarkdown>
        </h2>
        <p className="max-w-[49ch] mt-4 md:mt-0">
          {Description}
        </p>
      </div>

      {/* Grid Container */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${cards.length >= 4? "lg:grid-cols-4" : "lg:grid-cols-3"} gap-5 mt-11 w-full`}>
        {cards.map((card, index) => { 
          const IconComponent = getIconComponent(card.iconName);
          return (
            <InfoCard
              IconComponent={IconComponent}
              key={index}
              title={card.Title}
              description={card.Description}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          )}
        )}
      </div>
    </section>
  );
}

export default InfoCardSection;
