
import { Network } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Redes = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Network className="w-12 h-12 text-cyan-300 mr-4" />
          <h1 className="text-4xl font-bold text-cyan-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Redes
          </h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="glass-card bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-8 order-2 lg:order-1 animate-fade-in">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Soluciones de redes profesionales
            </h2>
            <p className="text-lg text-gray-800 mb-6">
              Diseñamos e implementamos infraestructuras de red seguras y escalables para su negocio:
            </p>
            <ul className="list-disc list-inside text-gray-800 mb-8 space-y-3">
              <li>Diseño y planificación de redes empresariales</li>
              <li>Implementación de infraestructura escalable</li>
              <li>Configuración de equipos y dispositivos de red</li>
              <li>Soluciones de seguridad de red avanzadas</li>
              <li>Monitoreo y mantenimiento proactivo</li>
              <li>VPNs y soluciones de acceso remoto seguro</li>
            </ul>
            <Link to="/servicios">
              <Button className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg">
                Volver a Servicios
              </Button>
            </Link>
          </div>
          
          <div className="flex justify-center items-center p-4 order-1 lg:order-2 animate-float">
            <div className="relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 z-10"></div>
              <img 
                src="/lovable-uploads/3d42191b-7954-4435-a40b-c9ffa6505301.png" 
                alt="Servicios de redes" 
                className="w-full h-auto max-w-md rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Redes;
