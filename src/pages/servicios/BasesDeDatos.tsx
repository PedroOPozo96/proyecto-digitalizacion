
import { Database } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BasesDeDatos = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-800 to-amber-600 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Database className="w-12 h-12 text-amber-300 mr-4" />
          <h1 className="text-4xl font-bold text-amber-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Bases de Datos
          </h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center items-center p-4 animate-float">
            <div className="relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/30 to-yellow-500/30 z-10"></div>
              <img 
                src="/lovable-uploads/c67f8c9c-7d48-4c09-bb7c-6831872dc4ed.png" 
                alt="Bases de datos" 
                className="w-full h-auto max-w-md rounded-xl"
              />
            </div>
          </div>
          
          <div className="glass-card bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-8 animate-fade-in">
            <h2 className="text-2xl font-semibold text-amber-700 mb-4">
              Gestión experta de datos
            </h2>
            <p className="text-lg text-gray-800 mb-6">
              Gestionamos y optimizamos sus bases de datos para garantizar un rendimiento óptimo y la máxima seguridad:
            </p>
            <ul className="list-disc list-inside text-gray-800 mb-8 space-y-3">
              <li>Diseño e implementación de bases de datos relacionales y NoSQL</li>
              <li>Optimización de consultas y rendimiento de sistemas</li>
              <li>Migración segura de datos entre plataformas</li>
              <li>Soluciones robustas de backup y recuperación</li>
              <li>Monitoreo continuo y mantenimiento preventivo</li>
              <li>Implementación de estrategias avanzadas de seguridad de datos</li>
            </ul>
            <Link to="/servicios">
              <Button className="bg-amber-600 hover:bg-amber-700 transition-all duration-300 shadow-lg">
                Volver a Servicios
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasesDeDatos;
