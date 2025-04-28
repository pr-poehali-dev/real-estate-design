import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceSlider from "@/components/ServiceSlider";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ServiceSlider />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;