
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, MapPin, Brain, BookOpen } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const caseStudies = [
  {
    title: "Transport Management System",
    description: "Complete TMS platform with real-time tracking and logistics optimization",
    tech: ["Node.js", "PostgreSQL", "AWS"],
    icon: MapPin,
    color: "bg-[#3E8A86]",
    gradient: "from-[#3E8A86] to-[#223C30]"
  },
  {
    title: "AI Talent Marketplace", 
    description: "Intelligent matching system connecting talents with opportunities using AI",
    tech: ["OpenAI", "Vue.js", "MongoDB"],
    icon: Brain,
    color: "bg-[#223C30]",
    gradient: "from-[#223C30] to-[#3E8A86]"
  },
  {
    title: "Learning Platform",
    description: "Interactive language learning system with progress tracking",
    tech: ["Xano", "Webflow", "Firebase"],
    icon: BookOpen,
    color: "bg-[#3E8A86]",
    gradient: "from-[#3E8A86] to-[#A9A298]"
  }
];

export const CaseStudies = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-[#FAF3E1] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-[#3E8A86]/10 to-[#223C30]/5 rounded-full animate-float -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-l from-[#A9A298]/10 to-[#3E8A86]/5 rounded-full animate-bounce-soft translate-x-1/2" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#223C30] mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-[#434343] max-w-2xl mx-auto">
            Discover how we've transformed businesses with cutting-edge solutions
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-[#3E8A86] via-[#223C30] to-[#A9A298] mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((project, index) => (
            <Card 
              key={index}
              className={`group hover-lift border-none bg-white/90 backdrop-blur-sm overflow-hidden transform-3d transition-all duration-700 ${
                isVisible ? `animate-scale-in animate-stagger-${index + 1}` : 'opacity-0 scale-90'
              }`}
            >
              {/* Card background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <CardHeader className="pb-4 relative z-10">
                <div className={`w-16 h-16 ${project.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg relative`}>
                  <project.icon className="w-8 h-8 text-white" />
                  {/* Glow effect */}
                  <div className={`absolute inset-0 ${project.color} rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                </div>
                <CardTitle className="text-xl font-semibold text-[#223C30] group-hover:text-[#3E8A86] transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <p className="text-[#434343] mb-4 group-hover:text-[#223C30] transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-[#A9A298]/30 text-[#223C30] text-sm rounded-full group-hover:bg-[#3E8A86]/20 group-hover:scale-105 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
