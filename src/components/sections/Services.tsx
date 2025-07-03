
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Zap, Users, Cloud, Cog, Bot } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web App Development",
    description: "React, Vue, Node.js solutions",
    color: "bg-[#3E8A86]"
  },
  {
    icon: Zap,
    title: "Platform Integrations",
    description: "APIs, webhooks, data sync",
    color: "bg-[#223C30]"
  },
  {
    icon: Users,
    title: "Tech Consulting",
    description: "Digital transformation advisory",
    color: "bg-[#3E8A86]"
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "AWS, CI/CD, scalability",
    color: "bg-[#223C30]"
  },
  {
    icon: Cog,
    title: "Process Automation",
    description: "Workflow optimization",
    color: "bg-[#3E8A86]"
  },
  {
    icon: Bot,
    title: "AI Solutions",
    description: "Predictive analytics, NLP, OpenAI",
    color: "bg-[#223C30]"
  }
];

export const Services = () => {
  return (
    <section className="py-20 bg-[#FAF3E1]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#223C30] mb-4">
            Our Expertise
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:scale-105 hover:shadow-xl transition-all duration-300 border-none bg-white"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-[#223C30]">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-[#434343]">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
