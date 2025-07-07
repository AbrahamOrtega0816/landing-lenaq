import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-[#FAF3E1] via-[#A9A298]/30 to-[#FAF3E1] relative">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#223C30] mb-4 md:mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg sm:text-xl text-[#434343] mb-8 md:mb-10 max-w-2xl mx-auto px-4">
            Let's discuss how we can help you build scalable solutions that
            drive growth and innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button
              size="lg"
              className="bg-[#3E8A86] hover:bg-[#223C30] text-white hover:scale-105 transition-all duration-300 px-6 md:px-8 py-4 md:py-6 rounded-full group w-full sm:w-auto"
            >
              <MessageCircle className="mr-2 group-hover:scale-110 transition-transform" />
              Get a Free Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Degradado de transición inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-[#FAF3E1]"></div>
    </section>
  );
};
