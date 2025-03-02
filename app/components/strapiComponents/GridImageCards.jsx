import React from 'react'
import ReactMarkdown from 'react-markdown'
import ImageComponent from '../ui/ImageComponent'

function GridImageCards({Title, Description, Cards}) {
  return (
    <section className="text-center">
        <h2 className="section-title">
          <ReactMarkdown>{Title}</ReactMarkdown>  
        </h2>
        <p className="mt-4 text-lg max-w-4xl mx-auto text-gray-600">
            {Description}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {Cards.map((card, i) => (
            <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition h-auto">
                <div className="relative h-72 w-full">
                
                  <ImageComponent localSrc={card.ImagePath} strapiImage={card.Image}
                    imgProps={{alt: card.Title ?? "service Image", fill: true, className: "border-gray-200", style: {objectFit: "cover",
                      borderRadius: '10px' }}} />
                </div>
                {card.Title && <h4>{card.Title}</h4>}
                <p className="text-lg mt-4">{card.Description}</p>
            </div>
            ))}
        </div>
    </section>
  )
}

export default GridImageCards