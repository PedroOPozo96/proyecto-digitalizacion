
import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Capacitacion = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-800 to-yellow-600 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <GraduationCap className="w-12 h-12 text-yellow-300 mr-4" />
          <h1 className="text-4xl font-bold text-yellow-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Capacitación
          </h1>
        </div>
        
        <div className="glass-card bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-8 animate-fade-in">
          <h2 className="text-2xl font-semibold text-yellow-700 mb-4">
            Formación especializada para profesionales
          </h2>
          <p className="text-lg text-gray-800 mb-6">
            Ofrecemos capacitación técnica avanzada para equipos técnicos y profesionales:
          </p>
          <ul className="list-disc list-inside text-gray-800 mb-8 space-y-3">
            <li>Cursos avanzados de Linux y administración de sistemas</li>
            <li>Formación completa en gestión de infraestructuras</li>
            <li>Talleres prácticos de seguridad informática</li>
            <li>Certificaciones en redes y comunicaciones</li>
            <li>Especialización en gestión de bases de datos</li>
            <li>Workshops de programación y desarrollo de software</li>
          </ul>
          <Link to="/servicios">
            <Button className="bg-yellow-600 hover:bg-yellow-700 transition-all duration-300 shadow-lg">
              Volver a Servicios
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Capacitacion;
