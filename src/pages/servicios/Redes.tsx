
import { Network } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Redes = () => {
  return (
    <div className="min-h-screen bg-[url('/lovable-uploads/3d42191b-7954-4435-a40b-c9ffa6505301.png')] bg-cover bg-center bg-no-repeat py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Network className="w-12 h-12 text-cyan-300 mr-4" />
          <h1 className="text-4xl font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Redes
          </h1>
        </div>
        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8">
          <p className="text-lg text-gray-800 mb-6">
            Diseñamos e implementamos infraestructuras de red seguras y escalables para su negocio:
          </p>
          <ul className="list-disc list-inside text-gray-800 mb-8 space-y-2">
            <li>Diseño y planificación de redes empresariales</li>
            <li>Implementación de infraestructura escalable</li>
            <li>Configuración de equipos y dispositivos de red</li>
            <li>Soluciones de seguridad de red avanzadas</li>
            <li>Monitoreo y mantenimiento proactivo</li>
            <li>VPNs y soluciones de acceso remoto seguro</li>
          </ul>
          <Link to="/servicios">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Volver a Servicios
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Redes;
