
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Map, Phone, Mail, Clock } from "lucide-react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

const timeSlots = [
  "17:00", "17:30", "18:00", "18:30", "19:00", 
  "19:30", "20:00", "20:30", "21:00", "21:30"
];

const Contact = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [guests, setGuests] = useState("2");

  return (
    <section id="бронирование" className="py-20 bg-gray-950 relative">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-purple-900/30 blur-3xl"></div>
      <div className="absolute bottom-0 left-10 w-40 h-40 rounded-full bg-teal-900/20 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-purple-400 font-medium mb-2">СТАНЬТЕ ЧАСТЬЮ ИЛЛЮЗИИ</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Забронируйте свой опыт
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Откройте для себя мир гастрономических иллюзий и незабываемых вкусовых впечатлений
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact info */}
          <div className="bg-gray-900/50 p-8 rounded-xl">
            <h3 className="text-2xl font-serif font-bold text-white mb-6">Информация</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-purple-900/30 p-3 rounded-lg mr-4">
                  <Map className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Адрес</h4>
                  <p className="text-white/70">Москва, ул. Пятницкая, 25/1</p>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 text-sm mt-1 inline-block hover:underline">Посмотреть на карте</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-900/30 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Телефон</h4>
                  <p className="text-white/70">+7 (495) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-900/30 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Email</h4>
                  <p className="text-white/70">info@неточемкажемся.рф</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-900/30 p-3 rounded-lg mr-4">
                  <Clock className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Часы работы</h4>
                  <p className="text-white/70">Вт-Чт: 17:00-22:00</p>
                  <p className="text-white/70">Пт-Сб: 17:00-23:00</p>
                  <p className="text-white/70">Вс: 17:00-22:00</p>
                  <p className="text-white/70">Пн: выходной</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Booking form */}
          <div className="bg-gray-900/50 p-8 rounded-xl">
            <h3 className="text-2xl font-serif font-bold text-white mb-6">Бронирование стола</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Имя</Label>
                  <Input id="name" placeholder="Введите ваше имя" className="bg-gray-800 border-gray-700 text-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">Телефон</Label>
                  <Input id="phone" placeholder="+7 (___) ___-__-__" className="bg-gray-800 border-gray-700 text-white" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input id="email" type="email" placeholder="ваш@email.com" className="bg-gray-800 border-gray-700 text-white" />
              </div>
              
              <div className="space-y-2">
                <Label className="text-white">Дата</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal bg-gray-800 border-gray-700 text-white"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP", { locale: ru }) : <span>Выберите дату</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-gray-800 border-gray-700">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => date < new Date() || date > new Date(new Date().setMonth(new Date().getMonth() + 2))}
                      initialFocus
                      className="bg-gray-800 text-white"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div className="space-y-2">
                <Label className="text-white">Время</Label>
                <div className="grid grid-cols-5 gap-2">
                  {timeSlots.map((time) => (
                    <Button
                      key={time}
                      type="button"
                      variant={selectedTime === time ? "default" : "outline"}
                      className={`${selectedTime === time ? "bg-purple-700 text-white" : "bg-gray-800 border-gray-700 text-white"}`}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <Label className="text-white">Количество гостей</Label>
                <RadioGroup defaultValue="2" value={guests} onValueChange={setGuests} className="flex space-x-4">
                  {["1", "2", "3", "4", "5+"].map((num) => (
                    <div key={num} className="flex items-center space-x-1">
                      <RadioGroupItem id={`guests-${num}`} value={num} className="text-purple-400" />
                      <Label htmlFor={`guests-${num}`} className="text-white">{num}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="notes" className="text-white">Особые пожелания</Label>
                <Textarea id="notes" placeholder="Аллергии, предпочтения, особые поводы..." className="bg-gray-800 border-gray-700 text-white" />
              </div>
              
              <Button type="submit" className="w-full bg-purple-700 hover:bg-purple-800 text-white">
                Забронировать стол
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
