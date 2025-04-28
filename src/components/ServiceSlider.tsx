import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Mountain, 
  RadioTower, 
  Trees, 
  Warehouse, 
  PlaneTakeoff 
} from "lucide-react";

const services = [
  {
    title: "Жилые дома",
    description: "Индивидуальные, эко-дружественные дома на природе с учетом потребностей заказчика",
    icon: <Home className="h-8 w-8 text-nature-forest mb-2" />,
    image: "https://images.unsplash.com/photo-1618489517022-bdea86bf7810?auto=format&fit=crop&q=80&w=600&h=400"
  },
  {
    title: "Горные шале",
    description: "Устойчивые к природным условиям шале для любителей уединенного отдыха в горах",
    icon: <Mountain className="h-8 w-8 text-nature-forest mb-2" />,
    image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&q=80&w=600&h=400"
  },
  {
    title: "Станции связи",
    description: "Коммуникационные объекты в труднодоступных местах с учетом особенностей местности",
    icon: <RadioTower className="h-8 w-8 text-nature-forest mb-2" />,
    image: "https://images.unsplash.com/photo-1583475020830-1ae160b8d2fb?auto=format&fit=crop&q=80&w=600&h=400"
  },
  {
    title: "Лесные убежища",
    description: "Экологичные постройки, интегрированные в окружающую природную среду",
    icon: <Trees className="h-8 w-8 text-nature-forest mb-2" />,
    image: "https://images.unsplash.com/photo-1547393813-5f1abb79e94e?auto=format&fit=crop&q=80&w=600&h=400"
  },
  {
    title: "Производственные базы",
    description: "Функциональные рабочие пространства для удаленных производств и исследований",
    icon: <Warehouse className="h-8 w-8 text-nature-forest mb-2" />,
    image: "https://images.unsplash.com/photo-1498409785966-ab341407de6e?auto=format&fit=crop&q=80&w=600&h=400"
  },
  {
    title: "Вертолетные площадки",
    description: "Транспортная инфраструктура для доступа к удаленным объектам",
    icon: <PlaneTakeoff className="h-8 w-8 text-nature-forest mb-2" />,
    image: "https://images.unsplash.com/photo-1523603868240-4fcbccb617df?auto=format&fit=crop&q=80&w=600&h=400"
  }
];

const ServiceSlider = () => {
  return (
    <section id="услуги" className="py-16 relative overflow-hidden">
      {/* Geometric decoration */}
      <div className="geometric-shape triangle bg-nature-khaki/20 w-64 h-64 -top-32 -left-20"></div>
      <div className="geometric-shape hexagon bg-nature-sand/20 w-80 h-80 -bottom-40 -right-20"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши Услуги</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Проектируем и строим нестандартные объекты в самых необычных местах, 
            воплощая индивидуальность каждого заказчика
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {services.map((service, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full border-2 border-nature-khaki/30 hover:border-nature-forest transition-colors">
                  <div className="aspect-video w-full relative overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="object-cover w-full h-full transition-transform duration-500 hover:scale-110" 
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      {service.icon}
                      <CardTitle>{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="border-nature-forest text-nature-forest hover:bg-nature-forest hover:text-white">
                      Подробнее
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default ServiceSlider;