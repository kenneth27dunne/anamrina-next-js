import React from 'react'
import ReactMarkdown from 'react-markdown'
import ImageComponent from '../ui/ImageComponent'

function GridImageCards({Title, Description, Cards}) {
  return (
    <section className="text-center">
      <div className='inner-wrapper'> 
        <h2 className="section-title">
          <ReactMarkdown>{Title}</ReactMarkdown>  
        </h2>
        <p className="mt-4 text-lg max-w-4xl mx-auto text-gray-600">
            {Description}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {Cards.map((card, i) => {
              return (<div
                  key={i}
                  className="bg-white p-6 rounded-lg shadow-md shadow-primary-lighter border hover:shadow-primary-light hover:shadow-xl transition h-auto">
                  <div className="relative w-full max-h-[18rem] min-h-[12rem]">
                    <ImageComponent 
                      localSrc={card.ImagePath} 
                      strapiImage={card.Image}
                      alt={card.Title ?? "service Image"}
                      loading="lazy"
                      imgProps={{
                        fill: true, 
                        className: "border-gray-200", 
                        style: {objectFit: "cover", borderRadius: '10px'},
                        sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      }} 
                    />
                  </div>
                  {card.Title && <h4 className='info-card-title'>{card.Title}</h4>}
                  <p className="text-lg mt-4">{card.Description}</p>
              </div>)
            })}
        </div>
      </div>
    </section>
  )
}

export default GridImageCards