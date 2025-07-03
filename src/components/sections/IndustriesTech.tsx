
import { Truck, GraduationCap } from "lucide-react";

const techStack = [
  { name: "React", level: 95 },
  { name: "Vue.js", level: 90 },
  { name: "Angular", level: 85 },
  { name: "Node.js", level: 95 },
  { name: "Python", level: 88 },
  { name: "AWS", level: 92 }
];

export const IndustriesTech = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Industries */}
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-[#223C30] mb-8">Industries We Serve</h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4 group">
                <div className="bg-[#3E8A86] p-3 rounded-full group-hover:scale-110 transition-transform">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[#223C30] mb-2">Logistics</h4>
                  <p className="text-[#434343]">TMS platforms, real-time tracking solutions</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="bg-[#223C30] p-3 rounded-full group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[#223C30] mb-2">Education</h4>
                  <p className="text-[#434343]">Learning management systems, educational platforms</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tech Stack */}
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-[#223C30] mb-8">Tech Stack</h3>
            
            <div className="space-y-6">
              {techStack.map((tech, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-[#223C30]">{tech.name}</span>
                    <span className="text-[#434343]">{tech.level}%</span>
                  </div>
                  <div className="w-full bg-[#A9A298] bg-opacity-30 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-[#3E8A86] to-[#223C30] h-3 rounded-full transition-all duration-1000 group-hover:scale-105"
                      style={{ width: `${tech.level}%` }}
                    ></div>
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
