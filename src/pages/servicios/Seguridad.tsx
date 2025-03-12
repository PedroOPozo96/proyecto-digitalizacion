
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
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Soluciones Integrales de Ciberseguridad</h2>
          
          <p className="text-lg text-gray-800 mb-6">
            Protegemos los activos digitales de su organización con soluciones avanzadas de seguridad informática,
            diseñadas para identificar vulnerabilidades, prevenir amenazas y garantizar la continuidad de su negocio.
          </p>
          
          <div className="mb-8">
            <h3 className="text-xl font-medium text-gray-800 mb-3">Servicios de Seguridad:</h3>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>Auditorías completas de seguridad y análisis de vulnerabilidades</li>
              <li>Pruebas de penetración (pentesting) y evaluación de riesgos</li>
              <li>Implementación de soluciones de firewall de nueva generación</li>
              <li>Sistemas de detección y prevención de intrusiones (IDS/IPS)</li>
              <li>Gestión centralizada de identidades y accesos (IAM)</li>
              <li>Cifrado avanzado de datos en reposo y en tránsito</li>
              <li>Protección contra malware y ransomware</li>
              <li>Desarrollo de políticas de seguridad y cumplimiento normativo</li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-medium text-gray-800 mb-3">Servicios de Respuesta y Continuidad:</h3>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>Monitoreo de seguridad 24/7 y detección de amenazas en tiempo real</li>
              <li>Respuesta a incidentes de seguridad y análisis forense digital</li>
              <li>Implementación de planes de continuidad de negocio</li>
              <li>Recuperación ante desastres y ataques cibernéticos</li>
              <li>Formación en concientización sobre seguridad para empleados</li>
              <li>Gestión de vulnerabilidades y actualizaciones de seguridad</li>
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

export default Seguridad;
