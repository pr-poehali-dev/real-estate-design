
import { Helmet } from "react-helmet";
import Header from "@/components/restaurant/Header";
import Hero from "@/components/restaurant/Hero";
import Concept from "@/components/restaurant/Concept";
import Menu from "@/components/restaurant/Menu";
import Gallery from "@/components/restaurant/Gallery";
import Contact from "@/components/restaurant/Contact";
import Footer from "@/components/restaurant/Footer";

const RestaurantPage = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Helmet>
        <title>Мы не то, чем кажемся | Ресторан модифицированной еды</title>
        <meta name="description" content="Уникальный ресторан с молекулярной кухней и модифицированной едой - кулинарные иллюзии и гастрономические открытия" />
      </Helmet>
      <Header />
      <Hero />
      <Concept />
      <Menu />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default RestaurantPage;
