import { Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#223C30] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center">
              <img
                src="/img/logowhite.png"
                alt="Lenaq"
                className="h-9 md:h-11 w-auto"
              />
            </div>
            <p className="text-[#A9A298] mb-6">
              Engineering the future with scalable digital solutions.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group cursor-pointer">
                <Mail className="w-5 h-5 text-[#3E8A86] group-hover:scale-110 transition-transform" />
                <span className="text-[#A9A298] group-hover:text-white transition-colors">
                  contact@lenaq.com
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-[#A9A298]">
              <li className="hover:text-white transition-colors cursor-pointer">
                Web Development
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Cloud Solutions
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                AI Integration
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Tech Consulting
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#3E8A86] border-opacity-30 mt-8 pt-8 text-center">
          <p className="text-[#A9A298]">
            © 2025 Lenaq — Engineering the Future.
          </p>
        </div>
      </div>
    </footer>
  );
};
