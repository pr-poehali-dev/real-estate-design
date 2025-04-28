import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('проекты');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&q=80&w=1920&h=1080" 
          alt="Дом в природе" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-nature-umber/80 via-nature-forest/50 to-transparent"></div>
      </div>
      
      {/* Geometric shapes */}
      <div className="geometric-shape triangle bg-nature-amber/20 w-72 h-72 top-20 right-20"></div>
      <div className="geometric-shape hexagon bg-nature-moss/20 w-96 h-96 -bottom-20 left-40"></div>
      
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-2xl text-white animate-fade-in">
          <span className="inline-block bg-nature-amber px-4 py-1 rounded-full text-sm font-semibold mb-6">
            Нестандартная недвижимость
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Создаем уникальные постройки в труднодоступных местах
          </h1>
          <p className="text-xl mb-8 text-white/90">
            Мы проектируем и строим индивидуальные дома и объекты, отражающие характер и потребности 
            нестандартных заказчиков в самых необычных локациях.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-nature-forest hover:bg-nature-moss text-white"
              onClick={scrollToProjects}
            >
              Наши проекты
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-nature-forest"
            >
              Рассчитать стоимость
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
          <span className="text-sm mb-2 opacity-80">Прокрутите вниз</span>
          <ChevronDown size={24} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;