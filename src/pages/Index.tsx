
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";
import LogoProcessor from "../components/LogoProcessor";
import "../css/styles.css";

const Index = () => {
  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475')] bg-cover bg-center bg-fixed">
      {/* Hero Section con Botones de Navegación */}
      <section className="hero-section relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            <div className="logo-container">
              <LogoProcessor 
                imageSrc="/lovable-uploads/f0dfd071-a92c-4ca4-8503-b70c8da3b2cc.png"
                className="logo-image animate-float"
              />
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 animate-float">
                TechLinux Solutions
              </h1>
            </div>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto mb-8">
              Soluciones integrales en sistemas Linux, bases de datos, redes y programación para impulsar su negocio hacia el futuro.
            </p>
            <div className="flex justify-center space-x-6">
              <Link to="/servicios">
                <Button className="bg-blue-600 hover:bg-blue-700 transform transition-transform hover:scale-105 button-glow">
                  Nuestros Servicios
                </Button>
              </Link>
              <Link to="/contacto">
                <Button className="bg-green-600 hover:bg-green-700 transform transition-transform hover:scale-105 button-glow">
                  Contactar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Redes Sociales */}
      <div className="fixed bottom-0 left-0 right-0 py-6 bg-white/80 backdrop-blur-sm">
        <div className="flex justify-center space-x-8">
          <a href="https://www.facebook.com/people/TechLinux-So/pfbid02AVBREFqU442DSS3KSueBrmLBNxDVdUXfkw8jrQNRwfEJ9DNNNZgeuFdaGqdXthZ3l/" target="_blank" rel="noopener noreferrer" 
             className="text-blue-600 hover:text-blue-800 transition-colors">
            <Facebook className="w-8 h-8" />
          </a>
          <a href="https://www.instagram.com/techlinux_oficial/" target="_blank" rel="noopener noreferrer"
             className="text-pink-600 hover:text-pink-800 transition-colors">
            <Instagram className="w-8 h-8" />
          </a>
          <a href="https://x.com/TechlinuxS94520" target="_blank" rel="noopener noreferrer"
             className="text-blue-400 hover:text-blue-600 transition-colors">
            <Twitter className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
