
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1621871908119-295c8ce5cee4?q=80&w=1920&h=1080",
    "https://images.unsplash.com/photo-1621972750749-0fbb1abb7736?q=80&w=1920&h=1080",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1920&h=1080"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with fade effect */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt="Фото блюда"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-[15%] w-16 h-16 rounded-full bg-purple-500/20 animate-float-slow"></div>
      <div className="absolute bottom-1/3 right-[20%] w-24 h-24 rounded-full bg-teal-500/20 animate-float-medium"></div>
      <div className="absolute top-1/2 left-[30%] w-8 h-8 rounded-full bg-yellow-500/20 animate-float-fast"></div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-2xl mx-auto text-center text-white animate-fade-in">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Мы не то,<br />
            <span className="text-purple-400">чем кажемся</span>
          </h1>
          
          <p className="text-xl mb-8 text-white/80 max-w-xl mx-auto">
            Ресторан молекулярной кухни, где внешний вид блюд обманывает ваши ожидания, 
            а вкус превосходит самые смелые фантазии
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-purple-700 hover:bg-purple-800 text-white"
              onClick={() => window.location.href = "#меню"}
            >
              Исследовать меню
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-purple-900"
              onClick={() => window.location.href = "#бронирование"}
            >
              Забронировать стол
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center">
        <button 
          className="flex flex-col items-center group"
          onClick={() => {
            window.scrollBy({
              top: window.innerHeight,
              behavior: 'smooth'
            });
          }}
        >
          <span className="text-sm mb-2 opacity-80">Откройте для себя</span>
          <ChevronDown size={24} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
