
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Seguridad = () => {
  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6')] bg-cover bg-center bg-no-repeat py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Shield className="w-12 h-12 text-blue-600 mr-4" />
          <h1 className="text-4xl font-bold text-rose-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Seguridad</h1>
        </div>
        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8">
          <p className="text-lg text-gray-800 mb-6">
            Protección integral de sistemas y datos críticos para su empresa:
          </p>
          <ul className="list-disc list-inside text-gray-800 mb-8 space-y-2">
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
