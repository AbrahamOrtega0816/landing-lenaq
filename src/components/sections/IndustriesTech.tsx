import { Truck, GraduationCap, Brain, BotIcon } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const techStack = [
  { name: "React", level: 95, color: "from-[#3E8A86] to-[#223C30]" },
  { name: "Vue.js", level: 90, color: "from-[#223C30] to-[#3E8A86]" },
  { name: "Angular", level: 85, color: "from-[#3E8A86] to-[#A9A298]" },
  { name: "Node.js", level: 95, color: "from-[#223C30] to-[#3E8A86]" },
  { name: "Python", level: 88, color: "from-[#3E8A86] to-[#223C30]" },
  { name: "AWS", level: 92, color: "from-[#A9A298] to-[#3E8A86]" }
];

export const IndustriesTech = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-40 h-40 bg-[#FAF3E1] rounded-full animate-float opacity-50" />
        <div className="absolute bottom-32 left-16 w-32 h-32 bg-[#A9A298]/20 rounded-full animate-bounce-soft" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Industries */}
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-left' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-3xl font-bold text-[#223C30] mb-8">Our top industries</h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4 group hover-lift cursor-pointer">
                <div className="bg-[#3E8A86] p-3 rounded-full group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg relative">
                  <Truck className="w-6 h-6 text-white" />
                  <div className="absolute inset-0 bg-[#3E8A86] rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-[#223C30] mb-2 group-hover:text-[#3E8A86] transition-colors duration-300">
                    Logistics
                  </h4>
                  <p className="text-[#434343] group-hover:text-[#223C30] transition-colors duration-300">
                    TMS platforms, real-time tracking solutions
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group hover-lift cursor-pointer">
                <div className="bg-[#223C30] p-3 rounded-full group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg relative">
                  <GraduationCap className="w-6 h-6 text-white" />
                  <div className="absolute inset-0 bg-[#223C30] rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-[#223C30] mb-2 group-hover:text-[#3E8A86] transition-colors duration-300">
                    Education
                  </h4>
                  <p className="text-[#434343] group-hover:text-[#223C30] transition-colors duration-300">
                    Learning management systems, educational platforms
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 group hover-lift cursor-pointer">
                <div className="bg-[#2A623E] p-3 rounded-full group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg relative">
                  <BotIcon className="w-6 h-6 text-white" />
                  <div className="absolute inset-0 bg-[#4ADE80] rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-[#223C30] mb-2 group-hover:text-[#3E8A86] transition-colors duration-300">
                    AI
                  </h4>
                  <p className="text-[#434343] group-hover:text-[#223C30] transition-colors duration-300">
                    AI-powered solutions, chatbots, and automation
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tech Stack */}
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-3xl font-bold text-[#223C30] mb-8">Tech Stack</h3>
            
            <div className="space-y-6">
              {techStack.map((tech, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-[#223C30] group-hover:text-[#3E8A86] transition-colors duration-300">
                      {tech.name}
                    </span>
                    <span className="text-[#434343] group-hover:text-[#223C30] transition-colors duration-300">
                      {tech.level}%
                    </span>
                  </div>
                  <div className="w-full bg-[#A9A298]/30 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`bg-gradient-to-r ${tech.color} h-3 rounded-full transition-all duration-1000 group-hover:scale-105 relative overflow-hidden ${
                        isVisible ? 'animate-in' : 'w-0'
                      }`}
                      style={{ 
                        width: isVisible ? `${tech.level}%` : '0%',
                        transitionDelay: `${index * 200}ms`
                      }}
                    >
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
