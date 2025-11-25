import React, { useState } from 'react';
import FAQSchema from './FAQSchema';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services does Anamrina Recruitment offer?",
      answer: "Anamrina Recruitment offers comprehensive recruitment services including talent acquisition, executive search, global recruitment, and professional placement services for businesses worldwide."
    },
    {
      question: "How does Anamrina Recruitment find qualified candidates?",
      answer: "We use advanced sourcing techniques, global networks, and industry expertise to identify and vet top professionals across various industries and skill sets."
    },
    {
      question: "What industries does Anamrina Recruitment specialize in?",
      answer: "We specialize in multiple industries including technology, healthcare, finance, engineering, marketing, and professional services, providing tailored recruitment solutions for each sector."
    },
    {
      question: "How long does the recruitment process take?",
      answer: "Our recruitment process typically takes 2-4 weeks depending on the role complexity and requirements. We work efficiently to provide quality candidates while respecting your timeline."
    },
    {
      question: "Does Anamrina Recruitment offer global recruitment services?",
      answer: "Yes, we provide global recruitment services, helping businesses find talent worldwide and assisting professionals in finding opportunities across different countries and markets."
    }
  ];

  return (
    <>
      <FAQSchema faqs={faqs} />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about our recruitment services and processes.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm mb-4">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <span className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
