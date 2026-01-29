import { useState, useEffect } from 'react';

interface HeaderProps {
  darkMode: boolean;
}

export default function Header({ darkMode }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detect which section is in view
      const extracurricularSection = document.getElementById("extracurricular");
      const projectsSection = document.getElementById("projects");
      const workSection = document.getElementById("work");
      
      if (extracurricularSection) {
        const extracurricularRect = extracurricularSection.getBoundingClientRect();
        if (extracurricularRect.top < window.innerHeight * 0.5) {
          setActiveSection("extra");
          return;
        }
      }
      
      if (projectsSection) {
        const projectsRect = projectsSection.getBoundingClientRect();
        if (projectsRect.top < window.innerHeight * 0.5) {
          setActiveSection("projects");
          return;
        }
      }
      
      if (workSection) {
        const workRect = workSection.getBoundingClientRect();
        if (workRect.top < window.innerHeight * 0.5) {
          setActiveSection("experience");
          return;
        }
      }
      
      setActiveSection("home");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center">
      <header
        className={`flex justify-between items-center sticky top-0 z-50 transition-all duration-500 ease-in-out px-6 py-2 ${
          isScrolled
            ? `mt-3 lg:min-w-[50%] min-w-[85%] max-w-5xl rounded-full backdrop-blur-md shadow-lg ${
                darkMode 
                  ? 'bg-gray-900/95 border border-purple-500/30' 
                  : 'bg-white/95 border border-gray-200/50'
              }`
            : `mt-0 min-w-full ${
                darkMode 
                  ? 'bg-gray-900/95 border-b border-purple-500/20' 
                  : 'bg-white shadow-sm border-b border-gray-100'
              }`
        }`}
      >
        <div
          className={`w-full flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-12" : "h-14 px-2 lg:px-10"
          }`}
        >
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className={`flex items-center gap-1 font-bold transition-all duration-500 hover:scale-105 ${
              isScrolled ? "text-xl" : "text-2xl"
            } ${
              darkMode ? 'text-white hover:text-purple-400' : 'text-gray-800 hover:text-purple-600'
            }`}
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif' }}
          >
            <img 
              src="/icon.png" 
              alt="Portfolio Logo"
              className={`object-contain transition-all duration-500 ${isScrolled ? "h-7" : "h-9"}`}
            />
            <span 
              className={`transition-all duration-500 font-light tracking-wide ${
                isScrolled ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'
              }`}
            >
              ffan Shahid
            </span>
          </button>

          {/* Navigation Links - Centered */}
          <nav
            className={`absolute left-1/2 -translate-x-1/2 hidden md:flex items-center transition-all duration-500 ${
              isScrolled
                ? `rounded-full px-2 py-1 space-x-1 ${
                    darkMode 
                      ? 'bg-gray-800/80' 
                      : 'bg-gray-100/80'
                  }`
                : "space-x-8"
            }`}
          >
            <button
              onClick={() => scrollToSection('work')}
              className={`font-semibold transition-all duration-300 text-sm ${
                isScrolled
                  ? `px-4 py-2 rounded-full ${
                      activeSection === "experience" 
                        ? darkMode 
                          ? "bg-gray-700 shadow-sm text-purple-400" 
                          : "bg-white shadow-sm text-gray-700"
                        : darkMode
                          ? "text-gray-300 hover:bg-gray-700 hover:shadow-sm"
                          : "text-gray-600 hover:bg-white hover:shadow-sm"
                    }`
                  : `${
                      activeSection === "experience" 
                        ? darkMode 
                          ? "text-purple-400" 
                          : "text-purple-600"
                        : darkMode
                          ? "text-gray-300 hover:text-purple-400"
                          : "text-gray-700 hover:text-purple-600"
                    }`
              }`}
            >
              Experience
            </button>
            
            <button
              onClick={() => scrollToSection('projects')}
              className={`font-semibold transition-all duration-300 text-sm ${
                isScrolled
                  ? `px-4 py-2 rounded-full ${
                      activeSection === "projects" 
                        ? darkMode 
                          ? "bg-gray-700 shadow-sm text-purple-400" 
                          : "bg-white shadow-sm text-gray-700"
                        : darkMode
                          ? "text-gray-300 hover:bg-gray-700 hover:shadow-sm"
                          : "text-gray-600 hover:bg-white hover:shadow-sm"
                    }`
                  : `${
                      activeSection === "projects" 
                        ? darkMode 
                          ? "text-purple-400" 
                          : "text-purple-600"
                        : darkMode
                          ? "text-gray-300 hover:text-purple-400"
                          : "text-gray-700 hover:text-purple-600"
                    }`
              }`}
            >
              Projects
            </button>
            
            <button
              onClick={() => scrollToSection('extracurricular')}
              className={`font-semibold transition-all duration-300 text-sm ${
                isScrolled
                  ? `px-4 py-2 rounded-full ${
                      activeSection === "extra" 
                        ? darkMode 
                          ? "bg-gray-700 shadow-sm text-purple-400" 
                          : "bg-white shadow-sm text-gray-700"
                        : darkMode
                          ? "text-gray-300 hover:bg-gray-700 hover:shadow-sm"
                          : "text-gray-600 hover:bg-white hover:shadow-sm"
                    }`
                  : `${
                      activeSection === "extra" 
                        ? darkMode 
                          ? "text-purple-400" 
                          : "text-purple-600"
                        : darkMode
                          ? "text-gray-300 hover:text-purple-400"
                          : "text-gray-700 hover:text-purple-600"
                    }`
              }`}
            >
              Extra
            </button>
          </nav>

          {/* Resume Button */}
          <a
            href="/affanportfolio.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:block font-semibold transition-all duration-500 hover:scale-105 border ${
              isScrolled
                ? "px-5 py-2 text-sm rounded-full"
                : "px-6 py-2.5 text-base rounded-full"
            } ${
              darkMode
                ? 'border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500'
                : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
            }`}
          >
            Resume
          </a>
        </div>
      </header>
    </div>
  );
}


