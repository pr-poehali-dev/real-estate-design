import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-nature-forest text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-white text-nature-forest p-1 mr-2 rounded">
                <span className="font-bold">ЭКО</span>
              </div>
              <span className="font-bold text-xl">ПОСТРОЙКИ</span>
            </div>
            <p className="text-nature-khaki mb-4">
              Индивидуальные строительные решения для нестандартных локаций и требований
            </p>
            <p className="text-sm text-nature-khaki">
              © 2025 ЭкоПостройки. Все права защищены.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Разделы</h4>
            <ul className="space-y-2">
              {["Главная", "Проекты", "Услуги", "О нас", "Контакты"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-nature-khaki hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Услуги</h4>
            <ul className="space-y-2">
              {["Жилые дома", "Коммерческие объекты", "Инфраструктура", "Проектирование", "Индивидуальные решения"].map((item) => (
                <li key={item}>
                  <a 
                    href="#услуги" 
                    className="text-nature-khaki hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Контакты</h4>
            <ul className="space-y-2 text-nature-khaki">
              <li>г. Москва, ул. Природная, д. 15</li>
              <li>+7 (495) 123-45-67</li>
              <li>info@ecobuilding.ru</li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-nature-moss/30 my-6" />
        
        <div className="flex flex-wrap justify-between items-center">
          <p className="text-sm text-nature-khaki">
            Разработка сайта: <span className="text-white">DigitalStudio</span>
          </p>
          <div className="space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-sm text-nature-khaki hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-sm text-nature-khaki hover:text-white transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;