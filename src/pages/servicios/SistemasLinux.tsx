
import { Server } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SistemasLinux = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Server className="w-12 h-12 text-blue-600 mr-4" />
          <h1 className="text-4xl font-bold text-gray-900">Sistemas Linux</h1>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg text-gray-600 mb-6">
            Ofrecemos servicios completos de implementación y administración de sistemas Linux, incluyendo:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
            <li>Instalación y configuración de servidores Linux</li>
            <li>Optimización de rendimiento del sistema</li>
            <li>Mantenimiento y actualización de sistemas</li>
            <li>Solución de problemas y soporte técnico</li>
            <li>Servicios de virtualización</li>
            <li>Configuración de servicios y aplicaciones</li>
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

export default SistemasLinux;
