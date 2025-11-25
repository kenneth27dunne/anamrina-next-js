import React from 'react';
import TallyForm from './TallyForm';
import Hero from '../components/strapiComponents/Hero';

export const metadata = {
  title: "Register Your Interest - Anamrina Recruitment",
  description: "Register your interest with Anamrina Recruitment to connect with top professionals and opportunities worldwide.",
  keywords: ["register interest", "recruitment", "job opportunities", "career", "professional services"],
  openGraph: {
    title: "Register Your Interest - Anamrina Recruitment",
    description: "Register your interest with Anamrina Recruitment to connect with top professionals and opportunities worldwide.",
    url: "https://anamrinarecruitment.com/register",
  },
  alternates: {
    canonical: "https://anamrinarecruitment.com/register",
  },
};

export default function RegisterPage() {
  return (
<>
        <header>
          <Hero isHomepage={false} 
                pill={"Anamrina Recruitment"} 
                title={"Register Your Interest"} 
                description={"Register your interest with Anamrina Recruitment to connect with top professionals and opportunities worldwide."} 
                CTA={null} isMini={true} />
        </header>
      <main>
      <section>
          <div className="inner-wrapper !py-8">
            <TallyForm />
          </div>
        </section>
      </main>
    </>
  );
}
