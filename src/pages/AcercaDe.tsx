
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";
import "../css/styles.css";

const AcercaDe = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900">
              Acerca de Nosotros
            </h1>
            <Link to="/">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Volver al Inicio
              </Button>
            </Link>
          </div>

          {/* Sección 1: Presentación de la Empresa */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/90 mb-16 rounded-lg shadow-lg">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Quiénes Somos</h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Nuestra Misión</h3>
                  <p className="text-gray-600 mb-6">
                    En TechLinux Solutions, nos dedicamos a ofrecer soluciones tecnológicas robustas basadas en sistemas Linux 
                    y software libre. Nuestro objetivo es proporcionar a empresas de todos los tamaños infraestructuras 
                    tecnológicas eficientes, seguras y escalables que se adapten a sus necesidades específicas.
                  </p>
                  <p className="text-gray-600">
                    Con más de 10 años de experiencia en el sector, nuestro equipo de especialistas certificados 
                    garantiza implementaciones exitosas y soporte continuo para mantener sus sistemas funcionando 
                    de manera óptima.
                  </p>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Nuestros Valores</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-2">•</span>
                      <span><strong>Excelencia técnica:</strong> Nos mantenemos actualizados con las últimas tecnologías y mejores prácticas.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-2">•</span>
                      <span><strong>Compromiso:</strong> Nos involucramos completamente en cada proyecto hasta su éxito.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-2">•</span>
                      <span><strong>Transparencia:</strong> Comunicación clara y honesta en todos nuestros servicios.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-2">•</span>
                      <span><strong>Innovación:</strong> Buscamos constantemente soluciones creativas para desafíos tecnológicos.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Sección 2: Anuncio de Radio */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50 mb-16 rounded-lg shadow-lg">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Escucha Nuestro Anuncio</h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-center mb-6">
                  <p className="text-lg text-gray-700 italic">
                    "Descubre cómo TechLinux Solutions puede transformar tu infraestructura tecnológica"
                  </p>
                </div>
                <div className="flex justify-center">
                  <iframe 
                    width="100%" 
                    height="166" 
                    scrolling="no" 
                    frameBorder="no" 
                    allow="autoplay" 
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1809414128%3Fsecret_token%3Ds-Bt3tY8wObJR&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
                  </iframe>
                </div>
              </div>
            </div>
          </section>

          {/* Sección 3: Anuncio de Video */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50 to-gray-100 mb-16 rounded-lg shadow-lg">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4"> Nuestro video corporativo </h2>

                <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center justify-center h-full">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/3wRNM0z5nxk?si=DqZL579t76D_Aclt" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Sección de Redes Sociales */}
      <div className="fixed bottom-0 left-0 right-0 py-6 bg-white/80 backdrop-blur-sm">
        <div className="flex justify-center space-x-8">
          <a href="https://www.facebook.com/people/TechLinux-So/pfbid02AVBREFqU442DSS3KSueBrmLBNxDVdUXfkw8jrQNRwfEJ9DNNNZgeuFdaGqdXthZ3l/" target="_blank" rel="noopener noreferrer" 
             className="text-blue-600 hover:text-blue-800 transition-colors">
            <Facebook className="w-8 h-8" />
          </a>
          <a href="https://www.instagram.com/techlinux_oficial/" target="_blank" rel="noopener noreferrer"
             className="text-pink-600 hover:text-pink-800 transition-colors">
            <Instagram className="w-8 h-8" />
          </a>
          <a href="https://x.com/TechlinuxS94520" target="_blank" rel="noopener noreferrer"
             className="text-blue-400 hover:text-blue-600 transition-colors">
            <Twitter className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AcercaDe;
