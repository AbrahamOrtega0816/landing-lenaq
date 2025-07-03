
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, MapPin, Brain, BookOpen } from "lucide-react";

const caseStudies = [
  {
    title: "Transport Management System",
    description: "Complete TMS platform with real-time tracking and logistics optimization",
    tech: ["Node.js", "PostgreSQL", "AWS"],
    icon: MapPin,
    color: "bg-[#3E8A86]"
  },
  {
    title: "AI Talent Marketplace",
    description: "Intelligent matching system connecting talents with opportunities using AI",
    tech: ["OpenAI", "Vue.js", "MongoDB"],
    icon: Brain,
    color: "bg-[#223C30]"
  },
  {
    title: "English Learning Platform",
    description: "Interactive language learning system with progress tracking",
    tech: ["Xano", "Webflow", "Firebase"],
    icon: BookOpen,
    color: "bg-[#3E8A86]"
  }
];

export const CaseStudies = () => {
  return (
    <section className="py-20 bg-[#FAF3E1]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#223C30] mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-[#434343] max-w-2xl mx-auto">
            Discover how we've transformed businesses with cutting-edge solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((project, index) => (
            <Card 
              key={index}
              className="group hover:scale-105 hover:shadow-2xl transition-all duration-500 border-none bg-white overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 ${project.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-[#223C30] group-hover:text-[#3E8A86] transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#434343] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-[#A9A298] bg-opacity-30 text-[#223C30] text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-[#3E8A86] font-medium group-hover:translate-x-2 transition-transform">
                  View Details <ExternalLink className="ml-2 w-4 h-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
