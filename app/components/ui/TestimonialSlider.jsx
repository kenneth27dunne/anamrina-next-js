"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ReactMarkdown from "react-markdown";

const TestimonialSlider = ({Title, Description, testimonials}) => {
  const [currentIndex, setCurrentIndex] = useState(testimonials.length >= 2? 1 : 0);

  // Handle next & previous buttons
  const handleNext = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Enable swipe gestures
  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
  });

  return (
    <section className="testimonial-slider">
      <h2 className="section-title text-center">
        <ReactMarkdown>{Title}</ReactMarkdown>
      </h2>
      <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
        {Description}
      </p>

      {/* Slider Container */}
      <div className="slider-container h-[300px]" {...handlers}>
        <AnimatePresence>
          {testimonials.map((testimonial, index) => {
            const position =
              index === currentIndex
                ? "active"
                : index === currentIndex - 1
                ? "prev"
                : index === currentIndex + 1
                ? "next"
                : "hidden";

                const rotateVal = position === "prev"? '-2.761deg' : position === "next" ? '2.761deg' : '0deg';
                const translateVal = position === "prev"? '-385px, 15px' : position === "next" ? '385px, 15px' : '0px, -15px';
            return (
              <motion.div
                key={index}
                className={`testimonial-card ${position}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, transform: `translate(${translateVal}) rotate(${rotateVal}) scale(${position === "active" ? 1 : 0.9})` }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <p className="testimonial-text">{testimonial.Description}</p>
                <div className="client-info">
                  <Image src={testimonial.ImagePath} alt={testimonial.ClientName} width={50} height={50} className="client-img" />
                  <div>
                    <h3 className="client-name">{testimonial.ClientName}</h3>
                    <p className="client-role">{testimonial.BusinessName}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div className="slider-controls">
        <button className={`arrow left ${currentIndex === 0 ? "hidden" : ""}`} onClick={handlePrev}>
          <ArrowLeft />
        </button>
        <div className="dots">
          {testimonials.map((_, index) => (
            <span key={index} className={`dot ${index === currentIndex ? "active" : ""}`} onClick={() => setCurrentIndex(index)}></span>
          ))}
        </div>
        <button className={`arrow right ${currentIndex === testimonials.length - 1 ? "hidden" : ""}`} onClick={handleNext}>
          <ArrowRight />
        </button>
      </div>
    </section>
  );
};

export default TestimonialSlider;
