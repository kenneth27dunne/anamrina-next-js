import "./styles/global.css";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { Quicksand, Poppins, Montserrat } from 'next/font/google';
import localFont from 'next/font/local';
import Script from "next/script";
// import { getNavigation } from "./helpers/fetchHelper";

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-quicksand',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-montserrat',
});

const gilroy = localFont({
  src: [
    { path: './fonts/Gilroy-Thin.ttf', weight: '100', style: 'normal' },
    { path: './fonts/Gilroy-ThinItalic.ttf', weight: '100', style: 'italic' },
    { path: './fonts/Gilroy-UltraLight.ttf', weight: '200', style: 'normal' },
    { path: './fonts/Gilroy-UltraLightItalic.ttf', weight: '200', style: 'italic' },
    { path: './fonts/Gilroy-Light.ttf', weight: '300', style: 'normal' },
    { path: './fonts/Gilroy-LightItalic.ttf', weight: '300', style: 'italic' },
    { path: './fonts/Gilroy-Regular.ttf', weight: '400', style: 'normal' },
    { path: './fonts/Gilroy-RegularItalic.ttf', weight: '400', style: 'italic' },
    { path: './fonts/Gilroy-Medium.ttf', weight: '500', style: 'normal' },
    { path: './fonts/Gilroy-MediumItalic.ttf', weight: '500', style: 'italic' },
    { path: './fonts/Gilroy-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: './fonts/Gilroy-SemiBoldItalic.ttf', weight: '600', style: 'italic' },
    { path: './fonts/Gilroy-Bold.ttf', weight: '700', style: 'normal' },
    { path: './fonts/Gilroy-BoldItalic.ttf', weight: '700', style: 'italic' },
    { path: './fonts/Gilroy-ExtraBold.ttf', weight: '800', style: 'normal' },
    { path: './fonts/Gilroy-ExtraBoldItalic.ttf', weight: '800', style: 'italic' },
    { path: './fonts/Gilroy-Black.ttf', weight: '900', style: 'normal' },
    { path: './fonts/Gilroy-BlackItalic.ttf', weight: '900', style: 'italic' },
    { path: './fonts/Gilroy-Heavy.ttf', weight: '950', style: 'normal' },
    { path: './fonts/Gilroy-HeavyItalic.ttf', weight: '950', style: 'italic' },
  ],
  variable: '--font-gilroy',
});

export const metadata = {
  title: {
    default: "Anamrina Recruitment - Global Professional Services",
    template: "%s | Anamrina Recruitment"
  },
  description: "Connecting businesses with top professionals from around the world. Expert recruitment services for companies and job seekers globally.",
  keywords: ["recruitment", "global professionals", "hiring", "job placement", "talent acquisition", "international recruitment"],
  authors: [{ name: "Anamrina Recruitment" }],
  creator: "Anamrina Recruitment",
  publisher: "Anamrina Recruitment",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://anamrinarecruitment.com',
    siteName: 'Anamrina Recruitment',
    title: 'Anamrina Recruitment - Global Professional Services',
    description: 'Connecting businesses with top professionals from around the world. Expert recruitment services for companies and job seekers globally.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Anamrina Recruitment - Global Professional Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anamrina Recruitment - Global Professional Services',
    description: 'Connecting businesses with top professionals from around the world.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://anamrinarecruitment.com',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default async function RootLayout({ children }) {  
  // const navOptions = await getNavigation()
  return (
    <html lang="en" className={`${gilroy.variable} ${quicksand.variable} ${poppins.variable} ${montserrat.variable}`}>
      <head>
        <meta name="apple-mobile-web-app-title" content="Anamrina" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Anamrina Recruitment",
              "description": "Connecting businesses with top professionals from around the world. Expert recruitment services for companies and job seekers globally.",
              "url": "https://anamrinarecruitment.com",
              "logo": "https://anamrinarecruitment.com/logo.png",
              "image": "https://anamrinarecruitment.com/og-image.jpg",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "url": "https://anamrinarecruitment.com/contact",
                "email": "info@anamrinarecruitment.com"
              },
              "sameAs": [
                "https://www.linkedin.com/company/anamrina-recruitment",
                "https://twitter.com/anamrinarecruit"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Global"
              },
              "serviceType": "Recruitment Services",
              "areaServed": "Worldwide",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Recruitment Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Talent Acquisition",
                      "description": "Finding and recruiting top talent for businesses"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Executive Search",
                      "description": "Specialized recruitment for senior-level positions"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Global Recruitment",
                      "description": "International talent acquisition services"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "150"
              }
            })
          }}
        />
      <Script
        id="layout-vars-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            function updateLayoutVars() {
              const header = document.querySelector("nav");
              const footer = document.querySelector("footer");
              
              document.documentElement.style.setProperty("--header-height", (header?.offsetHeight || 0) + "px");
              document.documentElement.style.setProperty("--footer-height", (footer?.offsetHeight || 0) + "px");
            }
            updateLayoutVars()
            window.addEventListener("load", updateLayoutVars);
            window.addEventListener("resize", updateLayoutVars);
          `,
        }}
      />
      </head>
      <body>
        <GoogleAnalytics />
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
