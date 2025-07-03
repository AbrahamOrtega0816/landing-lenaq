
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#3E8A86] via-[#223C30] to-[#3E8A86] animate-gradient">
      {/* Enhanced Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-[#223C30] opacity-20 rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-[#3E8A86] opacity-10 rounded-full animate-bounce-soft delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-80 md:h-80 bg-white opacity-5 rounded-full animate-pulse-glow delay-500"></div>
        
        {/* 3D floating icons */}
        <div className="absolute top-20 left-20 animate-float transform-3d rotate-y-12">
          <Code className="w-12 h-12 text-[#FAF3E1] opacity-30" />
        </div>
        <div className="absolute bottom-32 right-32 animate-bounce-soft delay-300 transform-3d rotate-x-12">
          <Zap className="w-16 h-16 text-[#A9A298] opacity-25" />
        </div>
        <div className="absolute top-1/3 right-20 animate-rotate-slow">
          <Globe className="w-10 h-10 text-[#FAF3E1] opacity-20" />
        </div>
        
        {/* Gradient orbs */}
        <div className="absolute top-10 right-1/3 w-24 h-24 bg-gradient-to-r from-[#3E8A86] to-[#223C30] rounded-full opacity-30 animate-pulse-glow"></div>
        <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-gradient-to-r from-[#FAF3E1] to-[#A9A298] rounded-full opacity-20 animate-float delay-700"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center text-white">
        <div className="max-w-5xl mx-auto">
          {/* Animated title with staggered effect */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            <span className="inline-block animate-fade-in-up animate-stagger-1">Building</span>{" "}
            <span className="inline-block animate-fade-in-up animate-stagger-2">Scalable</span>
            <br />
            <span className="inline-block text-[#FAF3E1] animate-fade-in-up animate-stagger-3">Digital</span>{" "}
            <span className="inline-block text-[#FAF3E1] animate-fade-in-up animate-stagger-4">Solutions</span>
            <br />
            <span className="inline-block animate-fade-in-up animate-stagger-5">with</span>{" "}
            <span className="inline-block animate-fade-in-up animate-stagger-6">Precision</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-[#A9A298] max-w-3xl mx-auto leading-relaxed px-4 animate-fade-in-up delay-700 opacity-0 [animation-fill-mode:forwards]">
            Custom software development, cloud infrastructure, and AI-powered automation 
            for forward-thinking businesses.
          </p>
          
          <div className="animate-scale-in delay-1000 opacity-0 [animation-fill-mode:forwards]">
            <Button 
              onClick={() => scrollToSection('case-studies')}
              size="lg" 
              className="bg-[#FAF3E1] text-[#223C30] hover:bg-white hover:scale-110 transition-all duration-500 text-base md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-full group hover-glow"
            >
              Explore Our Work
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-soft">
        <div className="w-6 h-10 border-2 border-[#FAF3E1] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#FAF3E1] rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};
