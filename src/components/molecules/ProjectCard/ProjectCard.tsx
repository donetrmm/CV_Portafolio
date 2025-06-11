import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../atoms/Card/Card';
import { Button } from '../../atoms/Button/Button';
import { Project } from '../../../types';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, delay = 0 }) => {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  const categoryIcons = {
    frontend: '🎨',
    backend: '⚙️',
    fullstack: '🔗',
    mobile: '📱',
    iot: '🏠'
  };

  return (
    <motion.div
      ref={elementRef as any}
      initial={{ opacity: 0, y: 50 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      <Card variant="glass" className="overflow-hidden h-full flex flex-col">
        {/* Project Image */}
        <div className="relative h-40 sm:h-48 bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
          <motion.div
            className="text-4xl sm:text-5xl md:text-6xl opacity-20"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {categoryIcons[project.category]}
          </motion.div>
          
          {project.featured && (
            <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4">
              <span className="bg-accent-100 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium">
                ⭐ Destacado
              </span>
            </div>
          )}
          
          <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4">
            <span className="bg-dark-300/80 backdrop-blur-sm text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium capitalize">
              {project.category}
            </span>
          </div>
        </div>

        <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
          {/* Project Title */}
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 gradient-text leading-tight">
            {project.title}
          </h3>

          {/* Project Description */}
          <p className="text-gray-300 mb-4 flex-1 text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mb-4 sm:mb-6">
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="bg-primary-600/20 text-primary-300 px-2 py-1 rounded text-xs font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isIntersecting ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: delay + 0.1 * index }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-auto">
            {project.demoUrl && (
              <Button
                href={project.demoUrl}
                target="_blank"
                variant="primary"
                size="sm"
                className="flex-1 justify-center"
                icon="🚀"
              >
                Demo
              </Button>
            )}
            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                target="_blank"
                variant="secondary"
                size="sm"
                className="flex-1 justify-center"
                icon="📂"
              >
                Código
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}; 