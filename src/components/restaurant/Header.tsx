
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-black/90 backdrop-blur-sm py-2" : "bg-transparent py-4"
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="relative">
            <span className="font-serif text-3xl font-bold text-purple-400">
              Иллюзия
            </span>
            <span className="absolute -top-1 -right-2 text-xs text-yellow-400">®</span>
          </div>
        </div>
        
        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-8">
          {["Концепция", "Меню", "Галерея", "Контакты"].map((item) => (
            <a 
              href={`#${item.toLowerCase()}`} 
              key={item}
              className="font-medium text-white hover:text-purple-400 transition-colors relative 
                after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 
                after:bg-purple-400 after:scale-x-0 hover:after:scale-x-100 
                after:transition-transform after:duration-300"
            >
              {item}
            </a>
          ))}
        </nav>
        
        <Button 
          className="hidden md:flex bg-purple-700 hover:bg-purple-800 text-white"
          onClick={() => window.location.href = "#бронирование"}
        >
          Забронировать
        </Button>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Меню"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-sm"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {["Концепция", "Меню", "Галерея", "Контакты"].map((item) => (
                <a 
                  href={`#${item.toLowerCase()}`} 
                  key={item}
                  className="font-medium py-2 text-white border-b border-purple-900/30"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Button 
                className="bg-purple-700 hover:bg-purple-800 text-white mt-4"
                onClick={() => {
                  window.location.href = "#бронирование";
                  setIsMenuOpen(false);
                }}
              >
                Забронировать
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
