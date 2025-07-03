
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Zap, Users, Cloud, Cog, Bot } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Globe,
    title: "Web App Development",
    description: "React, Vue, Node.js solutions",
    color: "bg-[#3E8A86]",
    delay: "animate-stagger-1"
  },
  {
    icon: Zap,
    title: "Platform Integrations",
    description: "APIs, webhooks, data sync",
    color: "bg-[#223C30]",
    delay: "animate-stagger-2"
  },
  {
    icon: Users,
    title: "Tech Consulting",
    description: "Digital transformation advisory",
    color: "bg-[#3E8A86]",
    delay: "animate-stagger-3"
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "AWS, CI/CD, scalability",
    color: "bg-[#223C30]",
    delay: "animate-stagger-4"
  },
  {
    icon: Cog,
    title: "Process Automation",
    description: "Workflow optimization",
    color: "bg-[#3E8A86]",
    delay: "animate-stagger-5"
  },
  {
    icon: Bot,
    title: "AI Solutions",
    description: "Predictive analytics, NLP, OpenAI",
    color: "bg-[#223C30]",
    delay: "animate-stagger-6"
  }
];

export const Services = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-[#FAF3E1] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-[#3E8A86] opacity-5 rounded-full animate-float" />
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-[#223C30] opacity-10 rounded-full animate-bounce-soft" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#223C30] mb-4">
            Our Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3E8A86] to-[#223C30] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`group hover-lift border-none bg-white/80 backdrop-blur-sm transform-3d transition-all duration-700 ${
                isVisible ? `animate-scale-in ${service.delay}` : 'opacity-0 scale-90'
              }`}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-[#223C30] group-hover:text-[#3E8A86] transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-[#434343] group-hover:text-[#223C30] transition-colors duration-300">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
