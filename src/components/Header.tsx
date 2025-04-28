import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 shadow-md backdrop-blur-sm py-2" : "bg-transparent py-4"}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-nature-forest text-white p-2 mr-2 rounded">
            <span className="font-bold">ЭКО</span>
          </div>
          <span className="font-bold text-xl text-nature-umber">ПОСТРОЙКИ</span>
        </div>
        
        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-8">
          {["Главная", "Проекты", "Услуги", "О нас", "Контакты"].map((item) => (
            <a 
              href={`#${item.toLowerCase()}`} 
              key={item}
              className="font-medium hover:text-nature-forest transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-nature-forest after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              {item}
            </a>
          ))}
        </nav>
        
        <Button 
          className="hidden md:flex bg-nature-forest hover:bg-nature-moss text-white"
        >
          Связаться
        </Button>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-nature-umber"
          onClick={toggleMenu}
          aria-label="Меню"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {["Главная", "Проекты", "Услуги", "О нас", "Контакты"].map((item) => (
              <a 
                href={`#${item.toLowerCase()}`} 
                key={item}
                className="font-medium py-2 border-b border-nature-khaki/30"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button 
              className="bg-nature-forest hover:bg-nature-moss text-white mt-4"
            >
              Связаться
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;