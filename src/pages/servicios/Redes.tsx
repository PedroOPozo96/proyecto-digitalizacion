
import { Network } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Redes = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Network className="w-12 h-12 text-blue-600 mr-4" />
          <h1 className="text-4xl font-bold text-gray-900">Redes</h1>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg text-gray-600 mb-6">
            Diseñamos e implementamos soluciones de red seguras y escalables:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
            <li>Diseño y planificación de redes</li>
            <li>Implementación de infraestructura</li>
            <li>Configuración de equipos de red</li>
            <li>Seguridad de red</li>
            <li>Monitoreo y mantenimiento</li>
            <li>VPNs y acceso remoto</li>
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
