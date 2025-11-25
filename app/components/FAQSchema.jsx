export default function FAQSchema({ faqs = [] }) {
  const defaultFAQs = [
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

  const faqData = faqs.length > 0 ? faqs : defaultFAQs;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  );
}
