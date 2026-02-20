import React from 'react';
import { ArrowRight, Star, ShieldCheck, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative pt-24 pb-16 md:pt-40 md:pb-32 overflow-hidden min-h-[60vh] flex items-center">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-bl from-purple-100/50 to-blue-50/30 blur-3xl opacity-60 rounded-bl-full transform translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-2/3 bg-gradient-to-tr from-blue-100/40 to-purple-50/20 blur-3xl opacity-60 rounded-tr-full transform -translate-x-1/4"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-purple-600 animate-pulse"></span>
              Servicio Disponible 24/7
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Expertos en <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 gradient-text text-transparent">
              Cuidar tu Lavadora
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Reparación rápida, confiable y con garantía. Recupera la tranquilidad de tu hogar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-purple-500/30 transition-all transform hover:scale-105">
              Solicitar Técnico
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#services" className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold rounded-xl text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 hover:border-purple-200 transition-all">
              Ver Servicios
            </a>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 pt-8 text-sm font-medium text-gray-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-green-500 h-5 w-5" />
              Garantía Incluida
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-blue-500 h-5 w-5" />
              Atención Rápida
            </div>
            <div className="flex items-center gap-2">
              <Star className="text-yellow-400 h-5 w-5 fill-current" />
              4.9/5 Calificación
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;