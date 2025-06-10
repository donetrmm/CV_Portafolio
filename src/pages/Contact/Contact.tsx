import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Download } from 'lucide-react';
import { contactInfo } from '../../utils/data';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email',
      description: 'Respondo en 24 horas',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      color: 'text-blue-400'
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Teléfono',
      description: 'Disponible para llamadas',
      value: contactInfo.phone || '+52 961 353 36 55',
      href: `tel:${contactInfo.phone}`,
      color: 'text-green-400'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Ubicación',
      description: 'Disponible para trabajo remoto y posibilidad de reubicación',
      value: contactInfo.location,
      href: '#footer',
      color: 'text-orange-400'
    },
    {
      icon: <Linkedin className="w-8 h-8" />,
      title: 'LinkedIn',
      description: 'Conectemos profesionalmente',
      value: 'Iskander Donet',
      href: contactInfo.linkedin || '#',
      color: 'text-blue-600'
    },
    {
      icon: <Github className="w-8 h-8" />,
      title: 'GitHub',
      description: 'Revisa mi código',
      value: '@donetrmm',
      href: contactInfo.github || '#',
      color: 'text-gray-400'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-black">
      <div className="container-app">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-headline mb-6">
            Hablemos del <span className="text-gradient-primary">Proyecto</span>
          </h2>
          <p className="text-body-large max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? ¿Quieres colaborar en algo interesante? 
            Me encantaría escuchar de ti y explorar cómo podemos trabajar juntos.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={method.title}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="block card-interactive p-8 text-center group hover:scale-105 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`${method.color} mb-6 flex justify-center group-hover:scale-110 transition-transform duration-200`}>
                {method.icon}
              </div>
              <h3 className="text-title mb-3 group-hover:text-gradient-primary transition-colors">
                {method.title}
              </h3>
              <p className="text-caption mb-4 text-white/60 group-hover:text-white/80 transition-colors">
                {method.description}
              </p>
              <span className="text-body font-medium text-white/80 group-hover:text-white transition-colors">
                {method.value}
              </span>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="card-elevated p-12 max-w-4xl mx-auto">
            <h3 className="text-title mb-6">
              ¿Listo para empezar tu <span className="text-gradient-primary">proyecto</span>?
            </h3>
            <p className="text-body mb-8 max-w-2xl mx-auto">
              Cuéntame sobre tu idea y trabajemos juntos para convertirla en realidad. 
              Desde sistemas backend hasta aplicaciones completas, estoy aquí para ayudarte.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href={`mailto:${contactInfo.email}`}
                className="btn-primary"
              >
                <Mail className="w-4 h-4" />
                Enviar Email
              </a>
              <a 
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Linkedin className="w-4 h-4" />
                Conectar en LinkedIn
              </a>
              <a href="/CV.pdf" download className="btn-ghost">
                <Download className="w-4 h-4" />
                Descargar CV
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact; 