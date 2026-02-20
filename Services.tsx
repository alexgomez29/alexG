import React from 'react';
import { Wrench, Settings, RefreshCw, AlertTriangle, CheckCircle2, Zap } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Reparación General',
    description: 'Diagnóstico y reparación de cualquier falla mecánica o electrónica. Ruidos, fugas, tambores trabados y más.',
    icon: Wrench,
  },
  {
    id: '2',
    title: 'Mantenimiento Preventivo',
    description: 'Limpieza profunda, descalcificación y ajuste de componentes para extender la vida útil de tu equipo.',
    icon: Settings,
  },
  {
    id: '3',
    title: 'Instalación y Configuración',
    description: 'Instalación profesional de equipos nuevos, nivelación y pruebas de funcionamiento inicial.',
    icon: RefreshCw,
  },
  {
    id: '4',
    title: 'Urgencias 24/7',
    description: '¿Se rompió en el peor momento? Contamos con servicio express para emergencias.',
    icon: Zap,
  }
];

const Services: React.FC = () => {
  return (
    <div id="services" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-semibold uppercase tracking-wide text-sm mb-2">Nuestros Servicios</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Soluciones Integrales para tu Lavandería</h3>
          <p className="text-gray-600 text-lg">
            Combinamos tecnología moderna con experiencia técnica para resolver cualquier problema que tenga tu lavadora.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={service.id} className="group relative p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                <service.icon size={28} />
              </div>
              
              <h4 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed relative z-10">
                {service.description}
              </p>
              
              <div className="mt-6 flex items-center text-blue-600 font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                Saber más <CheckCircle2 size={16} className="ml-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
