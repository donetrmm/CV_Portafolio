import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, MapPin, Phone, Heart, Coffee, ChevronUp } from 'lucide-react';
import { personalInfo, contactInfo, navigation } from '../../../utils/data';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = navigation.filter(item => item.id !== 'hero');

  const socialLinks = [
    {
      name: 'GitHub',
      url: contactInfo.github,
      icon: <Github className="w-5 h-5" />
    },
    {
      name: 'LinkedIn',
      url: contactInfo.linkedin,
      icon: <Linkedin className="w-5 h-5" />
    },
    {
      name: 'Twitter',
      url: contactInfo.twitter,
      icon: <Twitter className="w-5 h-5" />
    },
    {
      name: 'Email',
      url: `mailto:${contactInfo.email}`,
      icon: <Mail className="w-5 h-5" />
    }
  ].filter(link => link.url);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-dark-400 border-t border-dark-200">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-accent-100/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold gradient-text mb-4">
                {personalInfo.name}
              </h3>
              <p className="text-gray-300 mb-4 max-w-md leading-relaxed">
                {personalInfo.title} especializado en crear experiencias digitales 
                modernas y funcionales. Siempre buscando nuevos desafíos y 
                oportunidades para aprender.
              </p>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>{contactInfo.location}</span>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">
                Enlaces Rápidos
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  >
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300 cursor-pointer"
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <a
                    href="/CV.pdf"
                    download
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    Descargar CV
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          </div>

          {/* Contact & Social */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">
                Conecta Conmigo
              </h4>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors duration-300"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">{contactInfo.email}</span>
                </a>
                {contactInfo.phone && (
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">{contactInfo.phone}</span>
                  </a>
                )}
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target={social.url?.startsWith('mailto:') ? undefined : '_blank'}
                    rel={social.url?.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    className="w-10 h-10 bg-dark-200 rounded-lg flex items-center justify-center hover:bg-primary-600 hover:scale-110 transition-all duration-300"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="py-6 border-t border-dark-200 flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} {personalInfo.name}. Todos los derechos reservados.
          </div>
          
          <div className="flex items-center space-x-6">
            <span className="text-gray-400 text-sm flex items-center space-x-1">
              <span>Hecho con</span>
              <Heart className="w-3 h-3 text-red-400" />
              <span>y</span>
              <Coffee className="w-3 h-3 text-amber-400" />
              <span>en Chiapas</span>
            </span>
            
            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white hover:bg-primary-700 transition-colors duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              title="Volver arriba"
            >
              <ChevronUp className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Technology Badge */}
        <motion.div
          className="pb-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-xs text-gray-500">
            Construido con React, TypeScript, TailwindCSS y Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
}; 