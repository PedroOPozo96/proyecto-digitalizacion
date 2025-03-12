
import { Network } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Redes = () => {
  return (
    <div className="min-h-screen bg-[url('/lovable-uploads/3d42191b-7954-4435-a40b-c9ffa6505301.png')] bg-cover bg-center bg-no-repeat py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Network className="w-12 h-12 text-cyan-300 mr-4" />
          <h1 className="text-4xl font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Redes
          </h1>
        </div>
        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Servicios Integrales de Redes Empresariales</h2>
          
          <p className="text-lg text-gray-800 mb-6">
            Diseñamos, implementamos y mantenemos infraestructuras de red robustas y escalables que potencian 
            la conectividad y productividad de su organización, garantizando un rendimiento óptimo y seguro.
          </p>
          
          <div className="mb-8">
            <h3 className="text-xl font-medium text-gray-800 mb-3">Soluciones de Redes:</h3>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>Diseño e implementación de redes LAN/WAN/WLAN corporativas</li>
              <li>Configuración avanzada de equipos Cisco, Juniper, HP y otros fabricantes</li>
              <li>Implementación de redes definidas por software (SDN)</li>
              <li>Soluciones de conectividad redundante y alta disponibilidad</li>
              <li>Configuración de VLANs, enrutamiento y QoS para optimizar el tráfico</li>
              <li>Implementación de redes inalámbricas empresariales seguras</li>
              <li>Servicios de VPN site-to-site y acceso remoto</li>
              <li>Monitoreo proactivo del rendimiento de la red</li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-medium text-gray-800 mb-3">Ventajas de Nuestros Servicios:</h3>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>Mejora significativa en la velocidad y confiabilidad de su red</li>
              <li>Reducción de tiempos de inactividad y resolución rápida de problemas</li>
              <li>Optimización del ancho de banda y priorización inteligente del tráfico</li>
              <li>Escalabilidad para adaptarse al crecimiento de su empresa</li>
              <li>Segmentación eficiente para mejorar el rendimiento y la seguridad</li>
              <li>Análisis detallado del tráfico y generación de informes personalizados</li>
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

export default Redes;
