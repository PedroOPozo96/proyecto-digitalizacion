
import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Capacitacion = () => {
  return (
    <div className="min-h-screen bg-[url('/lovable-uploads/f0dfd071-a92c-4ca4-8503-b70c8da3b2cc.png')] bg-cover bg-center bg-no-repeat py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <GraduationCap className="w-12 h-12 text-yellow-300 mr-4" />
          <h1 className="text-4xl font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Capacitación
          </h1>
        </div>
        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8">
          <p className="text-lg text-gray-800 mb-6">
            Ofrecemos capacitación técnica avanzada para equipos técnicos y profesionales:
          </p>
          <ul className="list-disc list-inside text-gray-800 mb-8 space-y-2">
            <li>Cursos avanzados de Linux y administración de sistemas</li>
            <li>Formación completa en gestión de infraestructuras</li>
            <li>Talleres prácticos de seguridad informática</li>
            <li>Certificaciones en redes y comunicaciones</li>
            <li>Especialización en gestión de bases de datos</li>
            <li>Workshops de programación y desarrollo de software</li>
          </ul>
          <Link to="/servicios">
            <Button className="bg-yellow-600 hover:bg-yellow-700">
              Volver a Servicios
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Capacitacion;
