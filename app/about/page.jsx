import ReferenceAbout from "../components/reference/ReferenceAbout";

export const metadata = {
  title: "About Us - Anamrina Recruitment",
  description: "Learn about Anamrina Recruitment's mission to connect businesses with top professionals worldwide. Discover our expertise in global talent acquisition.",
  keywords: ["about anamrina", "recruitment company", "global talent", "professional services", "company mission"],
  openGraph: {
    title: "About Us - Anamrina Recruitment",
    description: "Learn about Anamrina Recruitment's mission to connect businesses with top professionals worldwide.",
    url: "https://anamrinarecruitment.com/about",
  },
  alternates: {
    canonical: "https://anamrinarecruitment.com/about",
  },
};

export default function About() {
  return <ReferenceAbout />;
}
