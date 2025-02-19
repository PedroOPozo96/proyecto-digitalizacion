
import { Button } from "@/components/ui/button";
import { Server, Database, Network, Code, Users, Shield } from "lucide-react";
import "../css/styles.css";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <div className="logo-container">
              <img 
                src="/lovable-uploads/ac81b455-3339-41d3-a40c-af378cf505dd.png" 
                alt="TechLinux Solutions Logo" 
                className="logo-image animate-float"
              />
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 animate-float">
                TechLinux Solutions
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluciones integrales en sistemas Linux, bases de datos, redes y programación para impulsar su negocio hacia el futuro.
            </p>
            <div className="mt-8">
              <Button className="bg-blue-600 hover:bg-blue-700 transform transition-transform hover:scale-105 button-glow">
                Contactar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Server />}
              title="Sistemas Linux"
              description="Implementación y administración de sistemas basados en Linux para máxima eficiencia y seguridad."
            />
            <ServiceCard
              icon={<Database />}
              title="Bases de Datos"
              description="Gestión y optimización de bases de datos relacionales para un rendimiento óptimo."
            />
            <ServiceCard
              icon={<Network />}
              title="Redes"
              description="Diseño e implementación de infraestructuras de red seguras y escalables."
            />
            <ServiceCard
              icon={<Code />}
              title="Programación"
              description="Desarrollo de soluciones personalizadas adaptadas a sus necesidades específicas."
            />
            <ServiceCard
              icon={<Users />}
              title="Capacitación"
              description="Formación especializada para equipos técnicos y profesionales."
            />
            <ServiceCard
              icon={<Shield />}
              title="Seguridad"
              description="Protección integral de sistemas y datos críticos para su empresa."
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Sobre Nosotros
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              En TechLinux Solutions nos dedicamos a empoderar a empresas y profesionales 
              con el conocimiento y las herramientas necesarias para optimizar sus 
              operaciones tecnológicas y mejorar su competitividad en el mercado. 
              Nuestro equipo de expertos está comprometido con la excelencia y la 
              innovación tecnológica.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-gradient text-gray-300 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <img 
              src="/lovable-uploads/ac81b455-3339-41d3-a40c-af378cf505dd.png" 
              alt="TechLinux Solutions Logo" 
              className="w-16 h-16" /* Aumentado de w-12 h-12 a w-16 h-16 */
            />
            <h3 className="text-2xl font-bold text-white">TechLinux Solutions</h3>
          </div>
          <p className="mb-4">Transformando empresas a través de la tecnología</p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" className="text-white border-white hover:bg-gray-800 transition-colors button-glow">
              Contacto
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-gray-800 transition-colors button-glow">
              Servicios
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }: { 
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="service-card bg-white p-6 rounded-lg shadow-lg">
      <div className="service-icon text-blue-600 w-12 h-12 mb-4 mx-auto">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
        {title}
      </h3>
      <p className="text-gray-600 text-center">
        {description}
      </p>
    </div>
  );
};

export default Index;
