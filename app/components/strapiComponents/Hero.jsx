import Link from 'next/link'
import React from 'react'
import ReactMarkdown from "react-markdown";

function Hero({ pill, title, description, isHomepage, CTA }) {
  return (
    <div className={`hero ${isHomepage? "min-h-[68vh]": "min-h-[48vh]" } flex justify-center items-center relative`}>
        <div className="hero-content container text-center flex justify-center flex-col">
            <div className="bg-[#0130b5]/20 rounded-[50px] w-fit m-auto py-1 px-3 border border-[#0130b5]">
                <h4 className="font-gilroy text-lg md:text-2xl font-medium capitalize">{pill}</h4>
            </div> 
            <h1 className="hero-title"> 
                <ReactMarkdown>{title.replace(/\n/g, "\n\n")}</ReactMarkdown>
            </h1>
            <p className={`${isHomepage? "max-w-2xl": "max-w-4xl" } block mx-auto mt-4 sm:text-lg`}>{description}</p>

           {
            isHomepage && CTA !== undefined && CTA.length > 0 &&
             <div className="pt-9">
                {
                    CTA.map((e) => (
                        <Link key={e.documentId} href={e.url}>
                            <button className={`btn btn-lg btn-${e.IsPrimary? "primary" : "secondary"} mx-4 inline-block`}>{e.text}</button>
                        </Link>
                    ))
                }
            </div>
           }
            <div className="hero-bg absolute inset-0 bg-[#efefef] bg-[url('/background.png')] rounded-[20px] bg-no-repeat bg-right md:bg-bottom bg-cover opacity-50 content-[''] m-3 mb-0"></div>
        </div>
    </div>
  )
}

export default Hero