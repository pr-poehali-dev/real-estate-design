import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Instagram, Facebook, Compass } from "lucide-react";

const Contact = () => {
  return (
    <section id="контакты" className="py-16 bg-nature-cream/50 relative">
      {/* Geometric decoration */}
      <div className="geometric-shape hexagon bg-nature-olive/10 w-64 h-64 top-20 left-10"></div>
      <div className="geometric-shape triangle bg-nature-sand/10 w-80 h-80 bottom-10 right-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Связаться с нами</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Готовы обсудить ваш нестандартный проект? Оставьте заявку или свяжитесь с нами удобным способом
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-white/80 backdrop-blur-sm border-nature-khaki/30">
            <CardContent className="p-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Имя
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Ваше имя" 
                      className="border-nature-khaki/50 focus:border-nature-forest"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="example@mail.com" 
                      className="border-nature-khaki/50 focus:border-nature-forest"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium">
                    Тема
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="Тема сообщения" 
                    className="border-nature-khaki/50 focus:border-nature-forest"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Сообщение
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Опишите ваш проект и потребности..." 
                    rows={5}
                    className="border-nature-khaki/50 focus:border-nature-forest"
                  />
                </div>
                
                <Button className="w-full bg-nature-forest hover:bg-nature-moss text-white">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-nature-khaki/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Контактная информация</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-nature-forest mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Адрес</p>
                      <p className="text-muted-foreground">г. Москва, ул. Природная, д. 15, офис 301</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-nature-forest mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Телефон</p>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-nature-forest mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">info@ecobuilding.ru</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Compass className="h-5 w-5 text-nature-forest mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Работаем по всей России</p>
                      <p className="text-muted-foreground">Специализируемся на труднодоступных локациях</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex items-center space-x-4">
                  <Button variant="outline" size="icon" className="rounded-full border-nature-forest">
                    <Instagram className="h-5 w-5 text-nature-forest" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full border-nature-forest">
                    <Facebook className="h-5 w-5 text-nature-forest" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <div className="aspect-[16/9] bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1486744328743-c1a0b9ff98f2?auto=format&fit=crop&q=80&w=800&h=450" 
                alt="Карта расположения"
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;