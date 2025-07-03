
import { Button } from "@/components/ui/button";
import { MessageCircle, Github } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#FAF3E1] to-[#A9A298]">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#223C30] mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-[#434343] mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help you build scalable solutions that drive growth and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[#3E8A86] hover:bg-[#223C30] text-white hover:scale-105 transition-all duration-300 px-8 py-6 rounded-full group"
            >
              <MessageCircle className="mr-2 group-hover:scale-110 transition-transform" />
              Get a Free Consultation
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-[#223C30] text-[#223C30] hover:bg-[#223C30] hover:text-white hover:scale-105 transition-all duration-300 px-8 py-6 rounded-full group"
            >
              <Github className="mr-2 group-hover:scale-110 transition-transform" />
              View GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
