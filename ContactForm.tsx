import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    issue: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', phone: '', issue: '' });
    }, 3000);
  };

  return (
    <div id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid md:grid-cols-5">
            
            {/* Contact Info Sidebar */}
            <div className="md:col-span-2 bg-gradient-to-br from-blue-600 to-purple-700 p-10 text-white flex flex-col justify-between relative overflow-hidden">
               {/* Decor circles */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
               <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-12 -mb-12"></div>
               
               <div>
                 <h3 className="text-2xl font-bold mb-6">Ponte en contacto</h3>
                 <p className="text-blue-100 mb-8 leading-relaxed">
                   Agenda tu visita técnica hoy mismo. Respondemos en menos de 24 horas.
                 </p>
                 
                 <div className="space-y-6">
                   <div className="flex items-center gap-4">
                     <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                       <Phone size={20} />
                     </div>
                     <div>
                       <p className="text-xs text-blue-200 uppercase tracking-wider">Llámanos</p>
                       <p className="font-semibold">+52 3708 0233</p>
                     </div>
                   </div>
                   
                   <div className="flex items-center gap-4">
                     <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                       <Mail size={20} />
                     </div>
                     <div>
                       <p className="text-xs text-blue-200 uppercase tracking-wider">Correo</p>
                       <p className="font-semibold">ag4959766@gmail.com</p>
                     </div>
                   </div>

                   <div className="flex items-center gap-4">
                     <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                       <MapPin size={20} />
                     </div>
                     <div>
                       <p className="text-xs text-blue-200 uppercase tracking-wider">Cobertura</p>
                       <p className="font-semibold">Toda la Ciudad y Área Metro</p>
                     </div>
                   </div>
                 </div>
               </div>
               
               <div className="mt-12">
                 <p className="text-sm text-blue-200">
                   &copy; 2024 LavaFix Services.
                 </p>
               </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3 p-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Solicitar Servicio</h3>
              
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <Send size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">¡Mensaje Enviado!</h4>
                  <p className="text-gray-600">Nos pondremos en contacto contigo a la brevedad.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">Nombre Completo</label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={e => setFormState({...formState, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                        placeholder="Juan Pérez"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700">Teléfono</label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={e => setFormState({...formState, phone: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                        placeholder="+52 3708 0233"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="issue" className="text-sm font-medium text-gray-700">Describe el problema</label>
                    <textarea
                      id="issue"
                      rows={4}
                      required
                      value={formState.issue}
                      onChange={e => setFormState({...formState, issue: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all resize-none"
                      placeholder="Mi lavadora hace un ruido fuerte al centrifugar..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-purple-500/30 transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                  >
                    Enviar Solicitud <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;