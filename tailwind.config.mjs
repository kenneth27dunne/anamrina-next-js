/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-light": "var(--color-primary-light)",
        "primary-lighter": "var(--color-primary-lighter)",
        "primary-dark": "var(--color-primary-dark)",
      },
      screens: { 
        'xxs': "425px",
        'xs': "480px",
        'sm': '640px', 
        'nvMd': '890px', 
        'md': '1024px', 
        'lg': '1280px', 
        'xl': '1920px', 
      },
      fontFamily: {
        sans: ['var(--font-quicksand)', 'sans-serif'],
        gilroy: ["var(--font-montserrat)", 'var(--font-montserrat)', 'sans-serif'],
        montserrat: ["var(--font-montserrat)", 'var(--font-montserrat)', 'sans-serif'],
      },
      backgroundImage: {
        'hero-bg': "url('/backgroundImage.jpg')",
      },
    },
  },
  plugins: []
};
