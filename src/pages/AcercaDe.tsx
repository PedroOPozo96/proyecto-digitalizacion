
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Users, Target, Award, Radio, Play, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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
          <section className="mb-16 overflow-hidden rounded-xl shadow-xl transform transition-all hover:scale-[1.01] duration-300">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-6 px-8">
              <div className="flex items-center space-x-3">
                <Building className="w-8 h-8 text-white" />
                <h2 className="text-3xl font-bold text-white">Quiénes Somos</h2>
              </div>
            </div>
            <div className="bg-white p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4">
                    <div className="flex items-center space-x-2">
                      <Target className="h-6 w-6 text-white" />
                      <h3 className="text-xl font-semibold text-white">Nuestra Misión</h3>
                    </div>
                  </div>
                  <CardContent className="p-6 bg-gradient-to-b from-blue-50 to-white">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      En TechLinux Solutions, nos dedicamos a ofrecer soluciones tecnológicas robustas basadas en sistemas Linux 
                      y software libre. Nuestro objetivo es proporcionar a empresas de todos los tamaños infraestructuras 
                      tecnológicas eficientes, seguras y escalables que se adapten a sus necesidades específicas.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Con más de 10 años de experiencia en el sector, nuestro equipo de especialistas certificados 
                      garantiza implementaciones exitosas y soporte continuo para mantener sus sistemas funcionando 
                      de manera óptima.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-4">
                    <div className="flex items-center space-x-2">
                      <Award className="h-6 w-6 text-white" />
                      <h3 className="text-xl font-semibold text-white">Nuestros Valores</h3>
                    </div>
                  </div>
                  <CardContent className="p-6 bg-gradient-to-b from-indigo-50 to-white">
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-start rounded-lg p-3 hover:bg-gray-50 transition-colors">
                        <span className="text-blue-600 font-bold mr-2 text-lg">•</span>
                        <div>
                          <span className="font-bold text-blue-700">Excelencia técnica:</span>
                          <p className="mt-1">Nos mantenemos actualizados con las últimas tecnologías y mejores prácticas.</p>
                        </div>
                      </li>
                      <li className="flex items-start rounded-lg p-3 hover:bg-gray-50 transition-colors">
                        <span className="text-blue-600 font-bold mr-2 text-lg">•</span>
                        <div>
                          <span className="font-bold text-blue-700">Compromiso:</span>
                          <p className="mt-1">Nos involucramos completamente en cada proyecto hasta su éxito.</p>
                        </div>
                      </li>
                      <li className="flex items-start rounded-lg p-3 hover:bg-gray-50 transition-colors">
                        <span className="text-blue-600 font-bold mr-2 text-lg">•</span>
                        <div>
                          <span className="font-bold text-blue-700">Transparencia:</span>
                          <p className="mt-1">Comunicación clara y honesta en todos nuestros servicios.</p>
                        </div>
                      </li>
                      <li className="flex items-start rounded-lg p-3 hover:bg-gray-50 transition-colors">
                        <span className="text-blue-600 font-bold mr-2 text-lg">•</span>
                        <div>
                          <span className="font-bold text-blue-700">Innovación:</span>
                          <p className="mt-1">Buscamos constantemente soluciones creativas para desafíos tecnológicos.</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Sección 2: Anuncio de Radio */}
          <section className="mb-16 overflow-hidden rounded-xl shadow-xl transform transition-all hover:scale-[1.01] duration-300">
            <div className="bg-gradient-to-r from-purple-600 to-pink-500 py-6 px-8">
              <div className="flex items-center space-x-3">
                <Radio className="w-8 h-8 text-white animate-pulse" />
                <h2 className="text-3xl font-bold text-white">Escucha Nuestro Anuncio</h2>
              </div>
            </div>
            <div className="bg-gradient-to-b from-purple-50 to-white p-8 md:p-12">
              <Card className="border-none shadow-lg overflow-hidden">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <p className="text-xl text-gray-700 italic font-medium bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                      "Descubre cómo TechLinux Solutions puede transformar tu infraestructura tecnológica"
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-full max-w-md p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg shadow-md">
                      <audio 
                        controls 
                        className="w-full audio-player"
                      >
                        <source src="/Anuncio de Radio.mp3" type="audio/mpeg" />
                        Tu navegador no soporta el elemento de audio.
                      </audio>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Sección 3: Anuncio de Video */}
          <section className="mb-16 overflow-hidden rounded-xl shadow-xl transform transition-all hover:scale-[1.01] duration-300">
            <div className="bg-gradient-to-r from-green-600 to-teal-500 py-6 px-8">
              <div className="flex items-center space-x-3">
                <Play className="w-8 h-8 text-white" />
                <h2 className="text-3xl font-bold text-white">Nuestro video corporativo</h2>
              </div>
            </div>
            <div className="bg-gradient-to-b from-green-50 to-white p-8 md:p-12">
              <Card className="border-none shadow-lg overflow-hidden">
                <CardContent className="p-8">
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                    <iframe 
                      className="w-full h-[400px]" 
                      src="https://www.youtube.com/embed/3wRNM0z5nxk?si=DqZL579t76D_Aclt" 
                      title="YouTube video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin" 
                      allowFullScreen
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </section>

      {/* Sección de Redes Sociales */}
      <div className="fixed bottom-0 left-0 right-0 py-6 bg-white/80 backdrop-blur-sm">
        <div className="flex justify-center space-x-8">
          <a href="https://www.facebook.com/people/TechLinux-So/pfbid02AVBREFqU442DSS3KSueBrmLBNxDVdUXfkw8jrQNRwfEJ9DNNNZgeuFdaGqdXthZ3l/" target="_blank" rel="noopener noreferrer" 
             className="text-blue-600 hover:text-blue-800 transition-colors transform hover:scale-110">
            <Facebook className="w-8 h-8" />
          </a>
          <a href="https://www.instagram.com/techlinux_oficial/" target="_blank" rel="noopener noreferrer"
             className="text-pink-600 hover:text-pink-800 transition-colors transform hover:scale-110">
            <Instagram className="w-8 h-8" />
          </a>
          <a href="https://x.com/TechlinuxS94520" target="_blank" rel="noopener noreferrer"
             className="text-blue-400 hover:text-blue-600 transition-colors transform hover:scale-110">
            <Twitter className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AcercaDe;
