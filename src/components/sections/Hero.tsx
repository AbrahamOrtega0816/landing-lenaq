
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#3E8A86] via-[#223C30] to-[#3E8A86]">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-[#223C30] opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-[#3E8A86] opacity-10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-80 md:h-80 bg-white opacity-5 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center text-white">
        <div className="animate-fade-in max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            Building Scalable
            <br />
            <span className="text-[#FAF3E1]">Digital Solutions</span>
            <br />
            with Precision
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-[#A9A298] max-w-3xl mx-auto leading-relaxed px-4">
            Custom software development, cloud infrastructure, and AI-powered automation 
            for forward-thinking businesses.
          </p>
          
          <Button 
            onClick={() => scrollToSection('case-studies')}
            size="lg" 
            className="bg-[#FAF3E1] text-[#223C30] hover:bg-white hover:scale-105 transition-all duration-300 text-base md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-full group"
          >
            Explore Our Work
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
