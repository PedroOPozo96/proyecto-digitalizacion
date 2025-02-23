
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import LogoProcessor from "../components/LogoProcessor";
import "../css/styles.css";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section con Botones de Navegación */}
      <section className="hero-section relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <div className="logo-container">
              <LogoProcessor 
                imageSrc="/lovable-uploads/f0dfd071-a92c-4ca4-8503-b70c8da3b2cc.png"
                className="logo-image animate-float"
              />
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 animate-float">
                TechLinux Solutions
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
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

      {/* Footer */}
      <footer className="footer-gradient text-gray-300 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <LogoProcessor 
              imageSrc="/lovable-uploads/f0dfd071-a92c-4ca4-8503-b70c8da3b2cc.png"
              className="w-32 h-32"
            />
            <h3 className="text-2xl font-bold text-white">TechLinux Solutions</h3>
          </div>
          <p className="mb-4">Transformando empresas a través de la tecnología</p>
          <div className="flex justify-center space-x-4">
            <Link to="/contacto">
              <Button variant="outline" className="text-white border-white hover:bg-gray-800 transition-colors button-glow">
                Contacto
              </Button>
            </Link>
            <Link to="/servicios">
              <Button variant="outline" className="text-white border-white hover:bg-gray-800 transition-colors button-glow">
                Servicios
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
