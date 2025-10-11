import React from "react";
import ImageComponent from "../ui/ImageComponent";
import ReactMarkdown from "react-markdown";

const Feature2Section = ({Title, Description, Features, Image, ImagePath}) => {
  return (
    <section className="skilled-professionals-section">
      <div className="content-wrapper inner-wrapper">
        {/* Left Side Content */}
        <div className="text-content">
          <h2 className="section-title">
            <ReactMarkdown>{Title}</ReactMarkdown>
          </h2>
          <p>
            {Description}
          </p>

          {/* Bullet Points */}
          <div className="bullet-points">
            {Features.map((item, index) => (
              <div key={index} className="bullet">
                <ImageComponent 
                  localSrc={item.IconImagePath}
                  strapiImage={item.IconImage}
                  alt={item.Title}
                  loading="lazy"
                  imgProps={{ width:40, height:40, className:"bullet-icon", sizes: "40px" }} 
                />
                <div>
                  <h3>{item.Title}</h3>
                  <p>{item.Description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Image */}
        <div className="image-container">
          <ImageComponent
            localSrc={ImagePath}
            strapiImage={Image}
            alt="Professionals discussing work"
            loading="lazy"
            imgProps={{
              width: 500,
              height: 400,
              className: "main-image",
              sizes: "(max-width: 768px) 100vw, 500px"
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Feature2Section;
