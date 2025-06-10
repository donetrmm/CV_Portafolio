import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Wrench, Smartphone, Brain } from 'lucide-react';
import SkillCard from '../../components/molecules/SkillCard/SkillCard';
import { skills } from '../../utils/data';

export const Skills: React.FC = () => {
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categoryInfo = {
    frontend: { icon: Code2, label: 'Frontend Development', color: 'from-cyan-400 to-blue-500', description: 'Interfaces de usuario modernas y responsivas' },
    backend: { icon: Server, label: 'Backend Development', color: 'from-purple-400 to-violet-500', description: 'APIs robustas y arquitecturas escalables' },
    database: { icon: Database, label: 'Bases de Datos', color: 'from-green-400 to-emerald-500', description: 'Gestión y optimización de datos' },
    tools: { icon: Wrench, label: 'DevOps & Herramientas', color: 'from-orange-400 to-red-500', description: 'Automatización y despliegue continuo' },
    mobile: { icon: Smartphone, label: 'Desarrollo Mobile', color: 'from-pink-400 to-rose-500', description: 'Aplicaciones móviles nativas y multiplataforma' },
    'soft-skills': { icon: Brain, label: 'Habilidades Blandas', color: 'from-indigo-400 to-purple-500', description: 'Competencias interpersonales y de liderazgo' }
  };

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-blue-400 text-lg font-medium mb-4 block"
          >
            Mis Competencias
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-headline mb-6"
          >
            Habilidades & <span className="text-gradient-primary">Tecnologías</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-body-large max-w-3xl mx-auto"
          >
            Un resumen completo de las tecnologías y herramientas con las que trabajo, 
            organizadas por categorías y nivel de experiencia.
          </motion.p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => {
            const info = categoryInfo[category as keyof typeof categoryInfo];
            if (!info) return null;
            
            const Icon = info.icon;
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="relative"
              >
                {/* Category Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center mr-4 shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-title text-white mb-1">
                        {info.label}
                      </h3>
                      <p className="text-caption text-white/60">
                        {info.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">
                        {categorySkills.length}
                      </div>
                      <div className="text-xs text-white/60">Tecnologías</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">
                        {Math.round(categorySkills.reduce((acc, skill) => acc + skill.level, 0) / categorySkills.length)}%
                      </div>
                      <div className="text-xs text-white/60">Promedio</div>
                    </div>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <SkillCard
                        skill={skill}
                        index={skillIndex}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20"
        >
          <div className="card-elevated p-8 text-center">
            <h3 className="text-title mb-8 text-gradient-primary">
              Resumen de Habilidades
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Code2 className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {skills.length}
                </div>
                <div className="text-caption text-white/60">Total Tecnologías</div>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-green-400 mb-2">
                  {Math.round(skills.reduce((acc, skill) => acc + skill.years, 0) / skills.length)}
                </div>
                <div className="text-caption text-white/60">Años Promedio</div>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%
                </div>
                <div className="text-caption text-white/60">Nivel Promedio</div>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-orange-400 mb-2">
                  {Object.keys(skillsByCategory).length}
                </div>
                <div className="text-caption text-white/60">Categorías</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 