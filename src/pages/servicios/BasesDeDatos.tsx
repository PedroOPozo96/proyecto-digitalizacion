
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
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Gestión Profesional de Bases de Datos</h2>
          
          <p className="text-lg text-gray-800 mb-6">
            Ofrecemos servicios especializados de diseño, implementación, optimización y administración de bases de datos,
            garantizando la integridad, disponibilidad y rendimiento óptimo de sus datos empresariales críticos.
          </p>
          
          <div className="mb-8">
            <h3 className="text-xl font-medium text-gray-800 mb-3">Nuestros Servicios de Bases de Datos:</h3>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>Diseño y modelado de bases de datos relacionales (MySQL, PostgreSQL, Oracle, SQL Server)</li>
              <li>Implementación de soluciones NoSQL (MongoDB, Redis, Cassandra, Elasticsearch)</li>
              <li>Migración segura entre diferentes sistemas de gestión de bases de datos</li>
              <li>Optimización de rendimiento y consultas</li>
              <li>Implementación de alta disponibilidad y replicación</li>
              <li>Monitoreo continuo y resolución de cuellos de botella</li>
              <li>Diseño e implementación de estrategias de backup y recuperación</li>
              <li>Auditoría y mejora de seguridad de datos</li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-medium text-gray-800 mb-3">Beneficios para su Organización:</h3>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>Mejora significativa en el rendimiento de sus aplicaciones</li>
              <li>Reducción de tiempos de respuesta y procesamiento de datos</li>
              <li>Mayor consistencia e integridad de la información</li>
              <li>Sistemas preparados para manejar grandes volúmenes de datos</li>
              <li>Minimización del riesgo de pérdida de datos</li>
              <li>Recuperación rápida ante incidentes</li>
            </ul>
          </div>
          
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

export default BasesDeDatos;
