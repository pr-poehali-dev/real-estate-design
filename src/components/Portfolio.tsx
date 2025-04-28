import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projects = [
  {
    id: 1,
    title: "Дом на скале",
    category: "жилое",
    clientCompany: "Green Tech Solutions",
    location: "Республика Алтай",
    imageUrl: "https://images.unsplash.com/photo-1622771248911-aa82c871bfec?auto=format&fit=crop&q=80&w=800&h=500",
    tags: ["скала", "минимализм", "панорамные окна"],
    utilities: ["солнечные панели", "сбор дождевой воды", "геотермальный обогрев"]
  },
  {
    id: 2,
    title: "Исследовательская станция «Тайга»",
    category: "коммерческое",
    clientCompany: "Научный институт леса",
    location: "Красноярский край",
    imageUrl: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?auto=format&fit=crop&q=80&w=800&h=500",
    tags: ["научный центр", "модульный", "экологичный"],
    utilities: ["автономное электроснабжение", "спутниковая связь", "очистка воды"]
  },
  {
    id: 3,
    title: "Дом над водопадом",
    category: "жилое",
    clientCompany: "Mountain Retreat",
    location: "Кавказ",
    imageUrl: "https://images.unsplash.com/photo-1598545547693-a9fa661af160?auto=format&fit=crop&q=80&w=800&h=500",
    tags: ["вода", "современный", "стекло"],
    utilities: ["гидроэлектростанция", "умный дом", "теплые полы"]
  },
  {
    id: 4,
    title: "Вышка связи «Пик»",
    category: "инфраструктура",
    clientCompany: "ТелекомПро",
    location: "Урал",
    imageUrl: "https://images.unsplash.com/photo-1591701729564-3b5325d5a4a8?auto=format&fit=crop&q=80&w=800&h=500",
    tags: ["высотный", "техничный", "функциональный"],
    utilities: ["солнечные панели", "ветрогенераторы", "системы антиобледенения"]
  },
  {
    id: 5,
    title: "Лесной ретрит",
    category: "жилое",
    clientCompany: "Digital Nomad Life",
    location: "Карелия",
    imageUrl: "https://images.unsplash.com/photo-1517683468954-5ef474730961?auto=format&fit=crop&q=80&w=800&h=500",
    tags: ["лес", "минимализм", "eco-friendly"],
    utilities: ["интернет через спутник", "солнечные панели", "скважина"]
  },
  {
    id: 6,
    title: "Горная метеостанция",
    category: "инфраструктура",
    clientCompany: "ГидроМетЦентр",
    location: "Камчатка",
    imageUrl: "https://images.unsplash.com/photo-1505816014357-96b5ff457e9a?auto=format&fit=crop&q=80&w=800&h=500",
    tags: ["высокогорье", "модульный", "защищенный"],
    utilities: ["автономное питание", "спутниковая связь", "системы обогрева"]
  }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="проекты" className="py-16 relative">
      {/* Geometric decoration */}
      <div className="geometric-shape diamond bg-nature-clay/20 w-56 h-56 top-20 right-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши проекты</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Реализованные объекты в уникальных локациях, адаптированные под индивидуальные потребности заказчиков
          </p>
        </div>
        
        <Tabs defaultValue="all" className="w-full mb-8">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger 
                value="all" 
                onClick={() => setActiveCategory("all")}
                className="px-6"
              >
                Все
              </TabsTrigger>
              <TabsTrigger 
                value="жилое" 
                onClick={() => setActiveCategory("жилое")}
                className="px-6"
              >
                Жилые
              </TabsTrigger>
              <TabsTrigger 
                value="коммерческое" 
                onClick={() => setActiveCategory("коммерческое")}
                className="px-6"
              >
                Коммерческие
              </TabsTrigger>
              <TabsTrigger 
                value="инфраструктура" 
                onClick={() => setActiveCategory("инфраструктура")}
                className="px-6"
              >
                Инфраструктура
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value={activeCategory} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden group border-2 border-nature-khaki/30 hover:border-nature-sand transition-colors">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h3 className="text-white text-xl font-bold">{project.title}</h3>
                      <p className="text-white/80">{project.location}</p>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="mb-3">
                      <span className="text-sm text-muted-foreground">Заказчик:</span>
                      <span className="font-medium ml-2">{project.clientCompany}</span>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground mb-1">Особенности:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="bg-nature-cream">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Коммуникации:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.utilities.map((utility, index) => (
                          <Badge key={index} variant="secondary" className="bg-nature-khaki text-nature-umber">
                            {utility}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-8">
          <Button className="bg-nature-amber hover:bg-nature-umber text-white">
            Смотреть все проекты
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;