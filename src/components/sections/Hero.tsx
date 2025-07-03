
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#3E8A86] via-[#223C30] to-[#3E8A86]">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#223C30] opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3E8A86] opacity-10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white opacity-5 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Building Scalable
            <br />
            <span className="text-[#FAF3E1]">Digital Solutions</span>
            <br />
            with Precision
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-[#A9A298] max-w-3xl mx-auto leading-relaxed">
            Custom software development, cloud infrastructure, and AI-powered automation 
            for forward-thinking businesses.
          </p>
          
          <Button 
            size="lg" 
            className="bg-[#FAF3E1] text-[#223C30] hover:bg-white hover:scale-105 transition-all duration-300 text-lg px-8 py-6 rounded-full group"
          >
            Explore Our Work
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
