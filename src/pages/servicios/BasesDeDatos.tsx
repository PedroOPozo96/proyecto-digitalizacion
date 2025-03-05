
import { Database } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BasesDeDatos = () => {
  return (
    <div className="min-h-screen bg-[url('/lovable-uploads/c67f8c9c-7d48-4c09-bb7c-6831872dc4ed.png')] bg-cover bg-center bg-no-repeat py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Database className="w-12 h-12 text-amber-300 mr-4" />
          <h1 className="text-4xl font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Bases de Datos
          </h1>
        </div>
        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8">
          <p className="text-lg text-gray-800 mb-6">
            Gestionamos y optimizamos sus bases de datos para garantizar un rendimiento óptimo y la máxima seguridad:
          </p>
          <ul className="list-disc list-inside text-gray-800 mb-8 space-y-2">
            <li>Diseño e implementación de bases de datos relacionales y NoSQL</li>
            <li>Optimización de consultas y rendimiento de sistemas</li>
            <li>Migración segura de datos entre plataformas</li>
            <li>Soluciones robustas de backup y recuperación</li>
            <li>Monitoreo continuo y mantenimiento preventivo</li>
            <li>Implementación de estrategias avanzadas de seguridad de datos</li>
          </ul>
          <Link to="/servicios">
            <Button className="bg-amber-600 hover:bg-amber-700">
              Volver a Servicios
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BasesDeDatos;
