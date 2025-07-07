import {
  Truck,
  GraduationCap,
  Brain,
  BotIcon,
  ArrowRight,
  Star,
  Sparkles,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

const industries = [
  {
    id: 1,
    title: "Logistics",
    description: "TMS platforms, real-time tracking solutions",
    icon: Truck,
    gradient: "from-[#3E8A86] via-[#4ADE80] to-[#10B981]",
    bgColor: "bg-gradient-to-br from-[#3E8A86]/10 to-[#4ADE80]/10",
    iconColor: "text-[#3E8A86]",
    features: [
      "Real-time tracking",
      "Route optimization",
      "Fleet management",
      "Analytics dashboard",
    ],
  },
  {
    id: 2,
    title: "Education",
    description: "Learning management systems, educational platforms",
    icon: GraduationCap,
    gradient: "from-[#223C30] via-[#2A623E] to-[#3E8A86]",
    bgColor: "bg-gradient-to-br from-[#223C30]/10 to-[#2A623E]/10",
    iconColor: "text-[#223C30]",
    features: [
      "LMS platforms",
      "Student portals",
      "Assessment tools",
      "Progress tracking",
    ],
  },
  {
    id: 3,
    title: "AI & Automation",
    description: "AI-powered solutions, chatbots, and automation",
    icon: BotIcon,
    gradient: "from-[#2A623E] via-[#4ADE80] to-[#10B981]",
    bgColor: "bg-gradient-to-br from-[#2A623E]/10 to-[#4ADE80]/10",
    iconColor: "text-[#2A623E]",
    features: [
      "Chatbot development",
      "Process automation",
      "ML models",
      "Data analytics",
    ],
  },
  {
    id: 4,
    title: "Healthcare",
    description: "Medical software, patient management systems",
    icon: Brain,
    gradient: "from-[#3E8A86] via-[#223C30] to-[#2A623E]",
    bgColor: "bg-gradient-to-br from-[#3E8A86]/10 to-[#223C30]/10",
    iconColor: "text-[#3E8A86]",
    features: [
      "Patient management",
      "Medical records",
      "Telemedicine",
      "Healthcare analytics",
    ],
  },
  {
    id: 5,
    title: "E-commerce",
    description: "Online retail platforms, payment systems",
    icon: ArrowRight,
    gradient: "from-[#223C30] via-[#3E8A86] to-[#4ADE80]",
    bgColor: "bg-gradient-to-br from-[#223C30]/10 to-[#3E8A86]/10",
    iconColor: "text-[#223C30]",
    features: [
      "Shopping platforms",
      "Payment integration",
      "Inventory management",
      "Customer analytics",
    ],
  },
  {
    id: 6,
    title: "Finance",
    description: "Financial software, banking solutions",
    icon: Star,
    gradient: "from-[#2A623E] via-[#3E8A86] to-[#223C30]",
    bgColor: "bg-gradient-to-br from-[#2A623E]/10 to-[#3E8A86]/10",
    iconColor: "text-[#2A623E]",
    features: [
      "Banking systems",
      "Payment processing",
      "Risk management",
      "Financial analytics",
    ],
  },
];

export const IndustriesTech = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-white via-[#FAF3E1]/30 to-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-[#3E8A86]/20 to-[#4ADE80]/20 rounded-full animate-float opacity-50 blur-xl" />
        <div className="absolute bottom-32 left-16 w-32 h-32 bg-gradient-to-br from-[#223C30]/20 to-[#A9A298]/20 rounded-full animate-bounce-soft blur-lg" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#3E8A86]/10 to-[#223C30]/10 rounded-full animate-pulse opacity-30" />

        {/* Floating sparkles */}
        <div className="absolute top-32 left-1/4 text-[#3E8A86] animate-bounce">
          <Sparkles className="w-6 h-6" />
        </div>
        <div className="absolute bottom-40 right-1/4 text-[#223C30] animate-pulse">
          <Star className="w-4 h-4" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#223C30] mb-4">
            Our top
            <span className="bg-gradient-to-r from-[#3E8A86] to-[#4ADE80] bg-clip-text text-transparent">
              {" "}
              industries
            </span>
          </h2>
          <p className="text-xl text-[#434343] max-w-3xl mx-auto">
            Specialized in innovative technology solutions across multiple
            sectors
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {industries.map((industry, index) => (
            <div
              key={industry.id}
              className={`relative group cursor-pointer transition-all duration-500 ${
                isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredIndustry(industry.id)}
              onMouseLeave={() => setHoveredIndustry(null)}
            >
              {/* Card */}
              <div
                className={`
                relative overflow-hidden rounded-2xl p-8 h-full
                ${industry.bgColor} backdrop-blur-sm
                border border-white/20 shadow-lg
                transform transition-all duration-500
                ${hoveredIndustry === industry.id ? "scale-105 shadow-2xl" : ""}
              `}
              >
                {/* Background gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div className="relative mb-6">
                  <div
                    className={`
                    w-16 h-16 mx-auto mb-4 rounded-full
                    bg-gradient-to-br ${industry.gradient} 
                    flex items-center justify-center
                    transform transition-all duration-500
                    ${
                      hoveredIndustry === industry.id
                        ? "scale-125 rotate-12"
                        : ""
                    }
                  `}
                  >
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3
                    className={`text-2xl font-bold mb-3 transition-colors duration-300 ${industry.iconColor}`}
                  >
                    {industry.title}
                  </h3>
                  <p className="text-[#434343] mb-6 leading-relaxed">
                    {industry.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {industry.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${industry.gradient}`}
                        />
                        <span className="text-sm text-[#434343]">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating particles */}
                {hoveredIndustry === industry.id && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-4 left-4 w-2 h-2 bg-[#3E8A86] rounded-full animate-ping" />
                    <div className="absolute bottom-4 right-4 w-1 h-1 bg-[#4ADE80] rounded-full animate-pulse" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
