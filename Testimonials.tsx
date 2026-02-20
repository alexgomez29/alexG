import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'María González',
    role: 'Ama de Casa',
    content: '¡Increíble servicio! Mi lavadora dejó de funcionar un domingo y llegaron en menos de 2 horas. El técnico fue super amable y limpio.',
    avatar: 'https://picsum.photos/100/100?random=2'
  },
  {
    id: '2',
    name: 'Carlos Rodríguez',
    role: 'Dueño de Restaurante',
    content: 'Utilizamos LavaFix para el mantenimiento de nuestras lavadoras industriales. La puntualidad y profesionalismo son inigualables.',
    avatar: 'https://picsum.photos/100/100?random=3'
  },
  {
    id: '3',
    name: 'Elena Torres',
    role: 'Arquitecta',
    content: 'Me encantó que me explicaran exactamente qué estaba fallando. Precios justos y sin sorpresas. Muy recomendados.',
    avatar: 'https://picsum.photos/100/100?random=4'
  }
];

const Testimonials: React.FC = () => {
  return (
    <div id="about" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-purple-400 font-semibold uppercase tracking-wide text-sm mb-2">Testimonios</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Lo que dicen nuestros clientes</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl relative">
              <Quote className="absolute top-6 right-6 text-purple-500/30 w-10 h-10" />
              
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 italic leading-relaxed">"{t.content}"</p>
              
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-purple-500" />
                <div>
                  <h5 className="font-bold text-white">{t.name}</h5>
                  <span className="text-sm text-gray-400">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
