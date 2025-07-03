import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { IndustriesTech } from "@/components/sections/IndustriesTech";
import { AboutMe } from "@/components/sections/AboutUs";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16 md:pt-20">
        <Hero />
        <AboutMe />
        <div id="services">
          <Services />
        </div>
        <div id="industries">
          <IndustriesTech />
        </div>
        <div id="case-studies">
          <CaseStudies />
        </div>
        <div id="contact">
          <CTA />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
