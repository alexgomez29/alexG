import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 gradient-text text-transparent">
                LavaFix
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Expertos certificados en reparación y mantenimiento de línea blanca. Tu satisfacción es nuestra prioridad número uno.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-purple-600 transition-colors">Reparación de Lavadoras</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Secadoras Industriales</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Mantenimiento Preventivo</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Instalación</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-purple-600 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Testimonios</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Garantías</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Bolsa de Trabajo</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/share/16mjWr1DLz/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/al_gm29966?igsh=MXZ5NXE5bm9hcjltYw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-pink-100 hover:text-pink-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} LavaFix. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-purple-600">Privacidad</a>
            <a href="#" className="hover:text-purple-600">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;