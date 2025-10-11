import Head from 'next/head';

export default function SEOHead({ 
  title, 
  description, 
  keywords = [], 
  canonical, 
  ogImage = '/og-image.jpg',
  noindex = false 
}) {
  const fullTitle = title ? `${title} | Anamrina Recruitment` : 'Anamrina Recruitment - Global Professional Services';
  const fullDescription = description || 'Connecting businesses with top professionals from around the world. Expert recruitment services for companies and job seekers globally.';
  
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical || 'https://anamrinarecruitment.com'} />
      <meta property="og:image" content={`https://anamrinarecruitment.com${ogImage}`} />
      <meta property="og:site_name" content="Anamrina Recruitment" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={`https://anamrinarecruitment.com${ogImage}`} />
      
      {/* Additional SEO */}
      <meta name="author" content="Anamrina Recruitment" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
    </Head>
  );
}
