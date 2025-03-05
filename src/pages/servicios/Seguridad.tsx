
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Seguridad = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Shield className="w-12 h-12 text-blue-600 mr-4" />
          <h1 className="text-4xl font-bold text-gray-900">Seguridad</h1>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg text-gray-600 mb-6">
            Protección integral de sistemas y datos críticos para su empresa:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
            <li>Auditorías de seguridad</li>
            <li>Implementación de firewalls</li>
            <li>Detección y prevención de intrusiones</li>
            <li>Gestión de accesos</li>
            <li>Cifrado de datos</li>
            <li>Planes de recuperación ante desastres</li>
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

export default Seguridad;
