
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/img/1fa81a76-0bcc-4738-9c44-8deb2e324066.png" 
              alt="Lenaq" 
              className="h-9 md:h-11 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-[#434343] hover:text-[#3E8A86] transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('industries')}
              className="text-[#434343] hover:text-[#3E8A86] transition-colors font-medium"
            >
              Industries
            </button>
            <button 
              onClick={() => scrollToSection('case-studies')}
              className="text-[#434343] hover:text-[#3E8A86] transition-colors font-medium"
            >
              Case Studies
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-[#3E8A86] hover:bg-[#223C30] text-white px-6 py-2 rounded-full transition-all duration-300"
            >
              Contact
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-[#434343] hover:text-[#3E8A86] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
            <nav className="flex flex-col py-4 px-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left py-3 text-[#434343] hover:text-[#3E8A86] transition-colors font-medium border-b border-gray-50"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('industries')}
                className="text-left py-3 text-[#434343] hover:text-[#3E8A86] transition-colors font-medium border-b border-gray-50"
              >
                Industries
              </button>
              <button 
                onClick={() => scrollToSection('case-studies')}
                className="text-left py-3 text-[#434343] hover:text-[#3E8A86] transition-colors font-medium border-b border-gray-50"
              >
                Case Studies
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="mt-4 bg-[#3E8A86] hover:bg-[#223C30] text-white px-6 py-3 rounded-full transition-all duration-300 w-full"
              >
                Contact
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
