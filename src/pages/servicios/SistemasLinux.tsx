
import { Server } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SistemasLinux = () => {
  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7')] bg-cover bg-center bg-no-repeat py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Server className="w-12 h-12 text-blue-600 mr-4" />
          <h1 className="text-4xl font-bold text-green-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Sistemas Linux</h1>
        </div>
        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Soluciones Linux para Empresas</h2>
          
          <p className="text-lg text-gray-800 mb-6">
            Brindamos servicios integrales de implementación, configuración y administración de sistemas Linux 
            adaptados a las necesidades específicas de su empresa, garantizando estabilidad, seguridad y rendimiento óptimo.
          </p>
          
          <div className="mb-8">
            <h3 className="text-xl font-medium text-gray-800 mb-3">Nuestros Servicios Incluyen:</h3>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>Instalación y configuración personalizada de distribuciones Linux (Ubuntu, Debian, CentOS, Red Hat)</li>
              <li>Migración desde otros sistemas operativos a entornos Linux</li>
              <li>Optimización de rendimiento y recursos del sistema</li>
              <li>Monitorización proactiva y mantenimiento preventivo</li>
              <li>Implementación de soluciones de virtualización (KVM, Docker, LXC)</li>
              <li>Configuración de servicios críticos (Apache, Nginx, MySQL, PostgreSQL)</li>
              <li>Automatización de tareas mediante scripts y herramientas especializadas</li>
              <li>Respaldo y recuperación de datos</li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-medium text-gray-800 mb-3">Beneficios de Linux para su Empresa:</h3>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>Mayor estabilidad y tiempo de actividad para sus servicios críticos</li>
              <li>Reducción significativa de costos de licenciamiento</li>
              <li>Flexibilidad y adaptabilidad a sus necesidades específicas</li>
              <li>Seguridad mejorada contra malware y vulnerabilidades</li>
              <li>Rendimiento superior en hardware existente</li>
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

export default SistemasLinux;
