
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Globe } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#3E8A86] via-[#223C30] to-[#3E8A86]">
      {/* Simplified Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Static geometric shapes with subtle opacity */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-48 md:h-48 bg-[#223C30] opacity-10 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 md:w-60 md:h-60 bg-[#3E8A86] opacity-5 rounded-full"></div>
        
        {/* Minimal floating icons - reduced animation */}
        <div className="absolute top-20 left-20 animate-float">
          <Code className="w-8 h-8 text-[#FAF3E1] opacity-20" />
        </div>
        <div className="absolute bottom-32 right-32">
          <Zap className="w-10 h-10 text-[#A9A298] opacity-15" />
        </div>
        <div className="absolute top-1/3 right-20">
          <Globe className="w-8 h-8 text-[#FAF3E1] opacity-15" />
        </div>
        
        {/* Subtle gradient orbs */}
        <div className="absolute top-10 right-1/3 w-20 h-20 bg-gradient-to-r from-[#3E8A86] to-[#223C30] rounded-full opacity-15"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-gradient-to-r from-[#FAF3E1] to-[#A9A298] rounded-full opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center text-white">
        <div className="max-w-5xl mx-auto">
          {/* Simplified title animation */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight animate-fade-in-up">
            <span className="inline-block">Building</span>{" "}
            <span className="inline-block">Scalable</span>
            <br />
            <span className="inline-block text-[#FAF3E1]">Digital</span>{" "}
            <span className="inline-block text-[#FAF3E1]">Solutions</span>
            <br />
            <span className="inline-block">with</span>{" "}
            <span className="inline-block">Precision</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-[#A9A298] max-w-3xl mx-auto leading-relaxed px-4 animate-fade-in-up opacity-0 [animation-fill-mode:forwards] [animation-delay:0.3s]">
            Custom software development, cloud infrastructure, and AI-powered automation 
            for forward-thinking businesses.
          </p>
          
          <div className="animate-fade-in-up opacity-0 [animation-fill-mode:forwards] [animation-delay:0.5s]">
            <Button 
              onClick={() => scrollToSection('case-studies')}
              size="lg" 
              className="bg-[#FAF3E1] text-[#223C30] hover:bg-white hover:scale-105 transition-all duration-300 text-base md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-full group"
            >
              Explore Our Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Simplified scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-[#FAF3E1] rounded-full flex justify-center opacity-60">
          <div className="w-1 h-3 bg-[#FAF3E1] rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};
