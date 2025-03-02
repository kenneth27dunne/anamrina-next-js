import "./styles/global.css";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import { Quicksand, Poppins } from 'next/font/google';
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
  title: "Anamrina Recruitment",
  description: "Connecting business with professions from around the world",
  icons: {
    icon: '/white_icon_web.png',
  },
};

export default async function RootLayout({ children }) {  
  // const navOptions = await getNavigation()
  return (
    <html lang="en" className={`${gilroy.variable} ${quicksand.variable} ${poppins.variable}`}>
      <head>
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
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
