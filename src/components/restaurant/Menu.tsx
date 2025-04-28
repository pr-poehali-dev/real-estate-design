
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
  surprise: string;
}

const menuCategories = [
  { id: "starters", label: "Закуски" },
  { id: "mains", label: "Основные блюда" },
  { id: "desserts", label: "Десерты" },
  { id: "drinks", label: "Напитки" }
];

const menuItems: Record<string, MenuItem[]> = {
  starters: [
    {
      id: 1,
      name: "Сад иллюзий",
      description: "Выглядит как композиция из садовых камней и мха, на самом деле - закуска из пармезана с трюфельным соусом и съедобной землей из оливок",
      price: 850,
      image: "https://images.unsplash.com/photo-1547496502-affa22d38842?q=80&w=800",
      tags: ["Вегетарианское", "Хит"],
      surprise: "Съедобные камни"
    },
    {
      id: 2,
      name: "Морской обман",
      description: "Похоже на устрицы с жемчугом, но это ферментированный дайкон со сферами из юзу и белого вина",
      price: 920,
      image: "https://images.unsplash.com/photo-1576577445504-6af96477db52?q=80&w=800",
      tags: ["Веган", "Новинка"],
      surprise: "Несуществующие морепродукты"
    },
    {
      id: 3,
      name: "Лесной туман",
      description: "Выглядит как туман над лесной подстилкой, на самом деле - крем из белых грибов с эспумой из сосновых шишек",
      price: 780,
      image: "https://images.unsplash.com/photo-1621797341630-2c2036b4a0fd?q=80&w=800",
      tags: ["Вегетарианское"],
      surprise: "Съедобный туман"
    }
  ],
  mains: [
    {
      id: 4,
      name: "Антигравитационный стейк",
      description: "На первый взгляд парящий в воздухе кусок мяса - на самом деле это сувид из говядины вагю с магнитной подачей и соусом из красного вина",
      price: 2450,
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800",
      tags: ["Хит", "Премиум"],
      surprise: "Левитирующее блюдо"
    },
    {
      id: 5,
      name: "Пепел феникса",
      description: "Выглядит как обугленное блюдо, но внутри сочная форель су-вид с черным рисом и кремом из спаржи",
      price: 1950,
      image: "https://images.unsplash.com/photo-1518288774672-b94e808873ff?q=80&w=800",
      tags: ["Авторское"],
      surprise: "Черное снаружи, яркое внутри"
    },
    {
      id: 6,
      name: "Хроматическая иллюзия",
      description: "Блюдо, меняющее цвет в зависимости от угла обзора - филе палтуса с соусом из эдамаме и пюре из батата",
      price: 1850,
      image: "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?q=80&w=800",
      tags: ["Инновация", "Новинка"],
      surprise: "Меняет цвет при просмотре"
    }
  ],
  desserts: [
    {
      id: 7,
      name: "Запретный плод",
      description: "Выглядит как яблоко, но внутри мусс из белого шоколада с центром из малинового кули",
      price: 950,
      image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=800",
      tags: ["Вегетарианское", "Хит"],
      surprise: "Фальшивый фрукт"
    },
    {
      id: 8,
      name: "Искаженная реальность",
      description: "Десерт-обманка в виде чашки кофе, который на самом деле является панна-коттой с кофейным желе",
      price: 880,
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=800",
      tags: ["Вегетарианское"],
      surprise: "Несъедобная чашка"
    },
    {
      id: 9,
      name: "Зеркальная галактика",
      description: "Зеркальный муссовый торт с созвездиями из съедобного золота и внутренней начинкой из черной смородины",
      price: 1100,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800",
      tags: ["Премиум", "Новинка"],
      surprise: "Космос на тарелке"
    }
  ],
  drinks: [
    {
      id: 10,
      name: "Дым без огня",
      description: "Коктейль, создающий иллюзию дыма - джин, настоянный на лаванде, с тоником и молекулярной пеной",
      price: 750,
      image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=800",
      tags: ["Хит", "С алкоголем"],
      surprise: "Дымящийся коктейль"
    },
    {
      id: 11,
      name: "Жидкая тайна",
      description: "Прозрачный коктейль, меняющий вкус с каждым глотком - водка, кларифицированный лимонный сок и эдибл глиттер",
      price: 820,
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800",
      tags: ["Премиум", "С алкоголем"],
      surprise: "Меняет вкус во время питья"
    },
    {
      id: 12,
      name: "Эликсир ясности",
      description: "Безалкогольный напиток, который выглядит как химический эксперимент - сироп голубой матча, лимонная кислота и тоник",
      price: 650,
      image: "https://images.unsplash.com/photo-1616266025928-7a9bee8b0edd?q=80&w=800",
      tags: ["Безалкогольный", "Новинка"],
      surprise: "Светится в темноте"
    }
  ]
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("starters");

  return (
    <section id="меню" className="py-20 bg-black relative">
      {/* Декоративные элементы */}
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-purple-900/20 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-teal-900/20 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-purple-400 font-medium mb-2">ГАСТРОНОМИЧЕСКИЕ ИЛЛЮЗИИ</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Меню обманчивых впечатлений
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Каждое блюдо в нашем меню — это оптический и вкусовой обман, 
            который заставит вас усомниться в реальности происходящего
          </p>
        </div>
        
        <Tabs defaultValue="starters" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-2xl mx-auto mb-12 bg-gray-900/50">
            {menuCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="data-[state=active]:bg-purple-700 data-[state=active]:text-white"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {menuCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {menuItems[category.id].map((item) => (
                  <Card key={item.id} className="bg-gray-900/50 border-gray-800 overflow-hidden hover:border-purple-700 transition-all duration-300 group">
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute top-2 right-2 flex flex-wrap justify-end gap-1">
                        {item.tags.map((tag, index) => (
                          <Badge key={index} className="bg-purple-700 text-white text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-medium text-white">{item.name}</h3>
                        <span className="text-lg font-bold text-purple-400">{item.price} ₽</span>
                      </div>
                      <p className="text-white/70 text-sm mb-3">{item.description}</p>
                      <div className="flex items-center mt-4 pt-3 border-t border-gray-800">
                        <span className="text-xs text-yellow-400 mr-2">✨</span>
                        <span className="text-sm text-yellow-400 italic">Сюрприз: {item.surprise}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Menu;
