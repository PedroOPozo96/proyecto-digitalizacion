
import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Capacitacion = () => {
  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')] bg-cover bg-center bg-no-repeat py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <GraduationCap className="w-12 h-12 text-blue-600 mr-4" />
          <h1 className="text-4xl font-bold text-white">Capacitación</h1>
        </div>
        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8">
          <p className="text-lg text-gray-800 mb-6">
            Formación especializada para equipos técnicos y profesionales:
          </p>
          <ul className="list-disc list-inside text-gray-800 mb-8 space-y-2">
            <li>Cursos de Linux</li>
            <li>Administración de sistemas</li>
            <li>Seguridad informática</li>
            <li>Redes y comunicaciones</li>
            <li>Bases de datos</li>
            <li>Programación y desarrollo</li>
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

export default Capacitacion;
