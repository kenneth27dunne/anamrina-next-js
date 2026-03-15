import Link from 'next/link'
import React from 'react'
import ReactMarkdown from "react-markdown";
import Image from 'next/image';
import { getIconComponent } from "../../helpers/icons";

function Hero({ pill, title, description, isHomepage, CTA, isMini = false }) {

  // Floating cards data (sample, adjust as needed)
  let floatingCards = [
    { id: 1, type: 'image', src: '/face1.jpg', style: 'rotate-2 hidden md:block absolute top-6 left-8 w-[170px] h-[140px]' },
    { id: 2, type: 'image', src: '/face2.jpg', style: '-rotate-2 hidden md:block absolute top-4 right-8 w-[170px] h-[140px]' },
    { id: 3, type: 'info', content: { 
            title: 'Complete Your Profile',
            subtitle: '2 of 10 Data',
            desc: 'Complete Your Profile Now And Let Us Help You Navigate' 
        }, 
        style: 'rotate-3 hidden md:block absolute top-[12em] left-32 w-[170px] h-[170px]' },

        
    { id: 4, type: 'image', src: '/office-facilities.png', style: 'rotate-3 hidden md:block absolute bottom-8 left-16 w-[170px] h-[170px]' },
    { id: 5, type: 'info', content: { title: 'Product Designer', subtitle: 'Google Inc', desc: 'Design  Full Time' },
     style: '-rotate-3 hidden md:block absolute bottom-16 right-16 top-[12em] w-[170px] h-[170px]' },
    { id: 6, type: 'image', src: '/office-icon.png', style: '-rotate-3 hidden md:block absolute bottom-8 right-8 w-[170px] h-[170px]' },
  ];

  
  // Card data for hero section (horizontal, below description)
  let heroCards = [
    { id: 1, iconName: 'MdCheckCircle', title: 'Pre-vetted Professionals' },
    { id: 2, iconName: 'FiRefreshCw', title: 'Seamless Onboarding' },
    { id: 3, iconName: 'FiHeadphones', title: '24/7 Support' },
    { id: 4, iconName: 'BiWorld', title: 'Global Reach' },
  ];
  floatingCards = [];
  heroCards = [];

  return (
    <div className={`hero ${isHomepage? "min-h-[68vh]": isMini? "min-h-[15vh]": "min-h-[48vh]" } flex justify-center items-center relative py-12`}>
      {/* Floating Cards */}
      {floatingCards.map(card => (
        <div key={card.id} className={card.style + ' z-10'}>
          {card.type === 'image' ? (
            <Image 
              src={card.src} 
              alt={`Professional ${card.src.includes('face') ? 'profile' : 'office environment'}`} 
              className="rounded-xl shadow-lg w-full h-full object-cover" 
              width={170}
              height={140}
              loading="lazy"
              sizes="(max-width: 768px) 0px, 170px"
            />
          ) : (
            <div className="bg-white rounded-xl shadow-lg p-3 flex flex-col items-start justify-center h-full w-full text-left">
              <span className="text-xs font-semibold text-gray-700 mb-1">{card.content.title}</span>
              <span className="text-xs text-green-600 font-bold mb-1">{card.content.subtitle}</span>
              <span className="text-[10px] text-gray-500">{card.content.desc}</span>
            </div>
          )}
        </div>
      ))}
      <div className="hero-content container text-center flex justify-center flex-col">
            {
                pill &&
                <div className="bg-[#0130b5]/20 rounded-[50px] w-fit m-auto py-1 px-3 border border-[#0130b5]">
                    <h4 className="font-gilroy text-lg md:text-2xl font-medium capitalize">{pill}</h4>
                </div> 
            }
            {
                title &&
                <h1 className="hero-title"> 
                    <ReactMarkdown>{title.replace(/\n/g, "\n\n")}</ReactMarkdown>
                </h1>
            }
            {
                description &&
                <p className={`${isHomepage? "max-w-2xl": "max-w-4xl" } block mx-auto mt-4 sm:text-lg`}>{description}</p>
            }
            {/* Hero Section Cards (horizontal) */}
           {isHomepage && (
             <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 mt-8 mb-4">
               {heroCards.map(card => {
                 const IconComponent = getIconComponent(card.iconName);
                 return (
                   <div key={card.id} className="bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center px-6 py-7 w-full max-w-xs min-h-[150px] text-center">
                     {IconComponent && <IconComponent className="text-4xl mb-3 text-blue-700" />}
                     <span className="text-lg font-bold text-gray-900">{card.title}</span>
                   </div>
                 );
               })}
             </div>
           )}
           {
            isHomepage && CTA !== undefined && CTA.length > 0 &&
             <div className="pt-9">
                {
                    CTA.map((e, i) => {
                      const key = (typeof e?.id === 'number' || typeof e?.id === 'string') ? e.id : (e?.url || `cta-${i}`);
                      return (
                        <Link key={key} href={e.url}>
                            <button className={`btn btn-lg btn-${e.IsPrimary? "primary" : "secondary"} mx-4 inline-block`}>{e.text}</button>
                        </Link>
                      );
                    })
                }
            </div>
           }
           
           {/* #efefef */}
            <div className="hero-bg absolute inset-0 bg-[#9eb5f9] bg-[url('/background.png')]  bg-no-repeat bg-right md:bg-bottom bg-cover opacity-50 content-[''] mb-0"></div>
        </div>
    </div>
  )
}

export default Hero