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
        <div className="relative h-48 bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
          <motion.div
            className="text-6xl opacity-20"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {categoryIcons[project.category]}
          </motion.div>
          
          {project.featured && (
            <div className="absolute top-4 right-4">
              <span className="bg-accent-100 text-white px-2 py-1 rounded-full text-xs font-medium">
                ⭐ Destacado
              </span>
            </div>
          )}
          
          <div className="absolute top-4 left-4">
            <span className="bg-dark-300/80 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium capitalize">
              {project.category}
            </span>
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col">
          {/* Project Title */}
          <h3 className="text-xl font-bold text-white mb-2 gradient-text">
            {project.title}
          </h3>

          {/* Project Description */}
          <p className="text-gray-300 mb-4 flex-1">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
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
          <div className="flex gap-3 mt-auto">
            {project.demoUrl && (
              <Button
                href={project.demoUrl}
                target="_blank"
                variant="primary"
                size="sm"
                className="flex-1"
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
                className="flex-1"
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