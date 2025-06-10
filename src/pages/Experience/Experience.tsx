import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../components/atoms/Card/Card';
import { experience } from '../../utils/data';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export const Experience: React.FC = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  const formatDate = (dateString: string) => {
    const [year, month] = dateString.split('-');
    const monthNames = [
      'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
      'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
    ];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  const calculateDuration = (startDate: string, endDate?: string) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    
    const months = (end.getFullYear() - start.getFullYear()) * 12 + 
                   (end.getMonth() - start.getMonth());
    
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
    if (years === 0) {
      return `${remainingMonths} ${remainingMonths === 1 ? 'mes' : 'meses'}`;
    } else if (remainingMonths === 0) {
      return `${years} ${years === 1 ? 'año' : 'años'}`;
    } else {
      return `${years} ${years === 1 ? 'año' : 'años'} ${remainingMonths} ${remainingMonths === 1 ? 'mes' : 'meses'}`;
    }
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-200 to-dark-300" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={elementRef as any}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="text-primary-400 text-lg font-medium mb-4 block"
            initial={{ opacity: 0 }}
            animate={isIntersecting ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Mi Trayectoria
          </motion.span>
          
          <motion.h2
            className="text-4xl md:text-5xl font-bold gradient-text mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Experiencia Profesional
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Un recorrido por mi evolución profesional y los proyectos que han marcado mi carrera
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 via-primary-500 to-primary-400 transform md:-translate-x-1/2" />
          
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary-600 rounded-full transform md:-translate-x-1/2 z-10 border-4 border-dark-300">
                  <div className="absolute inset-0 bg-primary-400 rounded-full animate-ping" />
                </div>
                
                {/* Experience Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                }`}>
                  <Card variant="glass" className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {exp.position}
                        </h3>
                        <p className="text-primary-400 font-medium mb-2">
                          {exp.company}
                        </p>
                        <div className="flex items-center text-sm text-gray-500 space-x-4">
                          <span>
                            {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : 'Presente'}
                          </span>
                          <span>•</span>
                          <span>{calculateDuration(exp.startDate, exp.endDate)}</span>
                        </div>
                      </div>
                      
                      {exp.current && (
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                          Actual
                        </span>
                      )}
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">🏆 Logros Destacados:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            className="flex items-start space-x-2 text-gray-300"
                            initial={{ opacity: 0, x: -20 }}
                            animate={isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.4, delay: 0.7 + index * 0.2 + achIndex * 0.1 }}
                          >
                            <span className="text-primary-400 mt-1">▸</span>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Technologies */}
                    <div>
                      <h4 className="text-white font-semibold mb-3">🛠️ Tecnologías:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="bg-primary-600/20 text-primary-300 px-3 py-1 rounded-full text-sm font-medium"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isIntersecting ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3, delay: 0.8 + index * 0.2 + techIndex * 0.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Career Summary */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <Card variant="glass" className="p-8 inline-block">
            <h3 className="text-2xl font-bold text-white mb-6">
              📈 Resumen de Carrera
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">
                  {experience.length}
                </div>
                <div className="text-gray-300">Empresas</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">
                  {(() => {
                    const totalMonths = experience.reduce((acc, exp) => {
                      const start = new Date(exp.startDate);
                      const end = exp.endDate ? new Date(exp.endDate) : new Date();
                      return acc + ((end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()));
                    }, 0);
                    return Math.round(totalMonths / 12);
                  })()}
                </div>
                <div className="text-gray-300">Años Experiencia</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">
                  {experience.reduce((acc, exp) => acc + exp.technologies.length, 0)}
                </div>
                <div className="text-gray-300">Tecnologías</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}; 