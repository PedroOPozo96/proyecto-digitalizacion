import { Server, Database, Network, GraduationCap, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import "../css/index.css"; // Updated import to use the new CSS index file

const Servicios = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900">
              Nuestros Servicios
            </h1>
            <Link to="/">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Volver al Inicio
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/servicios/sistemas-linux">
              <ServiceCard
                icon={<Server />}
                title="Sistemas Linux"
                description="Implementación y administración de sistemas basados en Linux para máxima eficiencia y seguridad."
              />
            </Link>
            <Link to="/servicios/bases-de-datos">
              <ServiceCard
                icon={<Database />}
                title="Bases de Datos"
                description="Gestión y optimización de bases de datos relacionales para un rendimiento óptimo."
              />
            </Link>
            <Link to="/servicios/redes">
              <ServiceCard
                icon={<Network />}
                title="Redes"
                description="Diseño e implementación de infraestructuras de red seguras y escalables."
              />
            </Link>
            <Link to="/servicios/capacitacion">
              <ServiceCard
                icon={<GraduationCap />}
                title="Capacitación"
                description="Formación especializada para equipos técnicos y profesionales."
              />
            </Link>
            <Link to="/servicios/seguridad">
              <ServiceCard
                icon={<Shield />}
                title="Seguridad"
                description="Protección integral de sistemas y datos críticos para su empresa."
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }: { 
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="service-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
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

export default Servicios;
