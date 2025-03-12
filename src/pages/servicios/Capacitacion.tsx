
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
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Programas de Formación Tecnológica Especializada</h2>
          
          <p className="text-lg text-gray-800 mb-6">
            Desarrollamos e impartimos programas de capacitación personalizados en tecnologías de la información,
            diseñados para potenciar las habilidades técnicas de su equipo y maximizar el aprovechamiento de sus recursos tecnológicos.
          </p>
          
          <div className="mb-8">
            <h3 className="text-xl font-medium text-gray-800 mb-3">Áreas de Capacitación:</h3>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>Administración avanzada de sistemas Linux (Ubuntu, CentOS, Red Hat)</li>
              <li>Gestión de infraestructuras de servidores</li>
              <li>Virtualización y containerización (VMware, Docker, Kubernetes)</li>
              <li>Diseño e implementación de redes empresariales</li>
              <li>Seguridad informática y ethical hacking</li>
              <li>Administración de bases de datos SQL y NoSQL</li>
              <li>DevOps y automatización de infraestructuras (Ansible, Terraform)</li>
              <li>Desarrollo de software y metodologías ágiles</li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-medium text-gray-800 mb-3">Modalidades de Formación:</h3>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>Cursos intensivos presenciales en sus instalaciones</li>
              <li>Formación online con sesiones en vivo</li>
              <li>Workshops prácticos con laboratorios reales</li>
              <li>Certificaciones oficiales en tecnologías específicas</li>
              <li>Mentorías personalizadas para roles técnicos clave</li>
              <li>Programas de formación continua para equipos de TI</li>
            </ul>
          </div>
          
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
