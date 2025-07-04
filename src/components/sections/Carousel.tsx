import React, { useState, useEffect, useRef } from 'react';
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const LogoCarousel = () => {
  // Datos de los logos con sus versiones y colores
  const logos = [
    {
      name: "Calendly",
      dark: "../img/calendlydark.svg",
      light: "../img/calendlylight.svg",
      color: "#006bff"
    },
    {
      name: "Calendly",
      dark: "../img/calendlydark.svg",
      light: "../img/calendlylight.svg",
      color: "#006bff"
    },
    {
      name: "Slack",
      dark: "../img/slackdark.svg",
      light: "../img/slacklight.svg",
      color: "#4a154b"
    },
    {
      name: "Phyton",
      dark: "../img/pythondark.svg",
      light: "../img/pythonlight.svg",
      color: "#3776AB"
    },
    {
      name: "Stripe",
      dark: "../img/stripedark.svg",
      light: "../img/stripelight.svg",
      color: "#635bff"
    },
    {
      name: "Aws",
      dark: "../img/awsdark.svg",
      light: "../img/awslight.svg",
      color: "#FF9900"
    },
    {
      name: "Next",
      dark: "../img/nextdark.svg",
      light: "../img/nextlight.svg",
      color: "#000000"
    },
    
    {
      name: "Webflow",
      dark: "../img/webflowdark.svg",
      light: "../img/webflowlight.svg",
      color: "#4353FF"
    },
    {
      name: "Vue",
      dark: "../img/vuedark.svg",
      light: "../img/vuelight.svg",
      color: "#42b883"
    },
    {
      name: "Zapier",
      dark: "../img/zapierdark.svg",
      light: "../img/zapierlight.svg",
      color: "#FF4F00"
    }
  ];

  const [isPaused, setIsPaused] = useState(false);
  const [ref, isVisible] = useScrollAnimation();
  const upperTrackRef = useRef(null);
  const lowerTrackRef = useRef(null);

  useEffect(() => {
    const upperTrack = upperTrackRef.current;
    const lowerTrack = lowerTrackRef.current;
    
    let animationFrameId;
    let position = 0;
    const speed = 0.5;

    const animate = () => {
      if (!isPaused) {
        position -= speed;
        
        if (position <= -upperTrack.scrollWidth / 3) {
          position = 0;
        }
        
        upperTrack.style.transform = `translateX(${position}px)`;
        lowerTrack.style.transform = `translateX(${-position}px)`;
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused]);

  return (
    <section ref={ref} className="py-20 bg-[#FAF3E1] relative overflow-hidden">
    <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
    <h2 className="text-4xl md:text-5xl font-bold text-[#223C30] mb-4">
    Tech Stack
          </h2>
      </div>
    <div className="integrations-container">
      <div className="integrations-carousel-container">
        {/* Carrusel superior */}
        <div 
          className="integrations-carousel upper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            ref={upperTrackRef}
            className="integrations-carousel-track"
          >
            {[...Array(3)].map((_, i) => (
              <div key={`upper-${i}`} className="integrations-carousel-group">
                {logos.map((logo, index) => (
                  <LogoItem key={`${logo.name}-${i}-${index}`} logo={logo} />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Carrusel inferior */}
        <div 
          className="integrations-carousel lower"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            ref={lowerTrackRef}
            className="integrations-carousel-track"
          >
            {[...Array(3)].map((_, i) => (
              <div key={`lower-${i}`} className="integrations-carousel-group">
                {logos.map((logo, index) => (
                  <LogoItem key={`${logo.name}-${i}-${index}-lower`} logo={logo} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

// Componente individual para cada logo
const LogoItem = ({ logo }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="logo-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? `${logo.color}` : '#fff',
      }}
    >
      <img 
        src={isHovered ? logo.light : logo.dark} 
        alt={logo.name} 
        className="logo-img" 
      />
     
    </div>
  );
};

export default LogoCarousel;