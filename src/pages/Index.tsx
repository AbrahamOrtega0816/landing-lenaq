
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { IndustriesTech } from "@/components/sections/IndustriesTech";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <IndustriesTech />
      <CaseStudies />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
