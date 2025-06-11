import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from '../../components/molecules/ProjectCard/ProjectCard';
import { projects } from '../../utils/data';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export const Projects: React.FC = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'Todos', icon: '🎯' },
    { id: 'frontend', label: 'Frontend', icon: '🎨' },
    { id: 'backend', label: 'Backend', icon: '⚙️' },
    { id: 'fullstack', label: 'Full Stack', icon: '🔗' },
    { id: 'mobile', label: 'Mobile', icon: '📱' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-200 to-dark-300" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={elementRef as any}
          className="text-center mb-12 sm:mb-16 px-4 sm:px-0"
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="text-primary-400 text-base sm:text-lg font-medium mb-3 sm:mb-4 block"
            initial={{ opacity: 0 }}
            animate={isIntersecting ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Mi Trabajo
          </motion.span>
          
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Proyectos Destacados
          </motion.h2>
          
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Una selección de mis proyectos más significativos, donde he aplicado 
            las últimas tecnologías y mejores prácticas de desarrollo.
          </motion.p>
        </motion.div>

        {/* Featured Projects Section */}
        {featuredProjects.length > 0 && (
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-white mb-4">
                ⭐ Proyectos Destacados
              </h3>
              <p className="text-gray-400">
                Los proyectos de los que estoy más orgulloso
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  delay={0.6 + index * 0.2}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12 px-4 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base touch-manipulation ${
                activeFilter === filter.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-dark-100 text-gray-300 hover:bg-dark-200 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
              style={{ minHeight: '44px' }}
            >
              <span className="mr-1 sm:mr-2">{filter.icon}</span>
              <span className="hidden xs:inline sm:inline">{filter.label}</span>
              <span className="xs:hidden sm:hidden">{filter.label.split(' ')[0]}</span>
              {filter.id !== 'all' && (
                <span className="ml-1 sm:ml-2 bg-primary-500 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs">
                  {projects.filter(p => p.category === filter.id).length}
                </span>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={`${activeFilter}-${project.id}`}
                project={project}
                delay={index * 0.1}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-6xl mb-4 block">🔍</span>
            <h3 className="text-xl font-semibold text-white mb-2">
              No hay proyectos en esta categoría
            </h3>
            <p className="text-gray-400">
              Prueba con otro filtro para ver más proyectos
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}; 