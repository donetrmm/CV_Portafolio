import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Server, 
  Wrench, 
  GraduationCap, 
  Award,
  Calendar,
  MapPin,
  Shield,
  Sparkles,
  CheckCircle2,
  Building
} from 'lucide-react';
import { skills as skillsData, education, certifications } from '../../utils/data';

const statsData = [
  { label: 'Años de Experiencia', value: '2+', icon: Calendar, color: 'from-cyan-400 to-blue-500' },
  { label: 'Proyectos Completados', value: '7+', icon: CheckCircle2, color: 'from-purple-400 to-pink-500' },
  { label: 'Certificaciones', value: '8+', icon: Award, color: 'from-yellow-400 to-orange-500' },
  { label: 'Especialización', value: 'AWS', icon: Shield, color: 'from-green-400 to-emerald-500' }
];

const valuesData = [
  {
    title: 'Arquitecturas Modernas',
    description: 'Aplicando principios de diseño dirigido por el dominio (DDD) y arquitecturas limpias para crear sistemas escalables.',
    icon: Building,
    color: 'from-blue-400 to-cyan-500'
  },
  {
    title: 'Backend Robusto',
    description: 'Desarrollo de APIs REST sólidas con NestJS y Express, enfocándome en la eficiencia y mantenibilidad del código.',
    icon: Server,
    color: 'from-purple-400 to-violet-500'
  },
  {
    title: 'Cloud & DevOps',
    description: 'Implementación de CI/CD y despliegues automatizados en AWS, optimizando workflows de desarrollo.',
    icon: Shield,
    color: 'from-emerald-400 to-green-500'
  },
  {
    title: 'Soluciones IoT',
    description: 'Experiencia en sistemas de tiempo real y análisis de datos IoT para decisiones basadas en información.',
    icon: Sparkles,
    color: 'from-orange-400 to-red-500'
  }
];

const skillCategories = {
  frontend: { icon: Code2, title: 'Frontend', color: 'text-cyan-400' },
  backend: { icon: Server, title: 'Backend', color: 'text-purple-400' },
  database: { icon: Database, title: 'Bases de Datos', color: 'text-green-400' },
  tools: { icon: Wrench, title: 'Herramientas', color: 'text-orange-400' },
  mobile: { icon: Code2, title: 'Mobile', color: 'text-pink-400' }
};

const About: React.FC = () => {
  const groupedSkills = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skillsData>);

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.1),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Sobre Mí
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Desarrollador Backend especializado en crear soluciones escalables y robustas con tecnologías modernas
          </p>
        </motion.div>

        {/* Estadísticas */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {statsData.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm hover:from-white/15 hover:to-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Valores Profesionales */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Mis Valores Profesionales
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {valuesData.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm hover:from-white/15 hover:to-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20"
                >
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${value.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Educación y Certificaciones */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid lg:grid-cols-5 gap-8"
        >
          {/* Educación */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-8">
              <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-400 mr-3">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-title">
                Educación
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-base p-6 border-l-4 border-blue-500 hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-semibold text-white text-lg">{edu.degree}</h4>
                    <span className="text-xs px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full border border-blue-500/30 font-medium">
                      {edu.current ? 'En Curso' : 'Completado'}
                    </span>
                  </div>

                  <p className="text-body mb-3 font-medium text-blue-300">{edu.institution}</p>
                  
                  <div className="flex items-center gap-2 text-caption mb-2">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <span>
                      {new Date(edu.startDate).toLocaleDateString('es-ES', { 
                        month: 'short', 
                        year: 'numeric' 
                      })} - {edu.endDate ? new Date(edu.endDate).toLocaleDateString('es-ES', { 
                        month: 'short', 
                        year: 'numeric' 
                      }) : 'Presente'}
                    </span>
                  </div>
                  
                  {edu.field && (
                    <div className="flex items-center gap-2 text-caption mb-3">
                      <MapPin className="w-4 h-4 text-blue-400" />
                      <span className="text-white/70">{edu.field}</span>
                    </div>
                  )}
                  
                  {edu.description && (
                    <p className="text-caption text-white/60 leading-relaxed border-t border-white/10 pt-3 mt-3">
                      {edu.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certificaciones */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-400 mr-3">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-title">
                  Certificaciones Profesionales
                </h3>
              </div>
              <div className="px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30">
                <span className="text-blue-400 font-semibold text-sm">
                  {certifications.length} certificaciones
                </span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="card-base p-5 group hover:scale-105 transition-all duration-300 hover:border-blue-400/30"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold text-white text-sm mb-1 group-hover:text-blue-300 transition-colors leading-tight">
                        {cert.name}
                      </h4>
                      <p className="text-blue-400 text-xs font-medium mb-1">
                        {cert.issuer}
                      </p>
                      <p className="text-white/60 text-xs">
                        {cert.category}
                      </p>
                    </div>
                    <span className="text-white/60 text-xs bg-blue-600/20 px-2 py-1 rounded border border-blue-500/30">
                      {cert.year}
                    </span>
                  </div>
                  
                  {cert.skills && cert.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-3">
                      {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 text-xs bg-blue-600/20 text-blue-300 rounded border border-blue-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span className="px-2 py-1 text-xs bg-white/10 text-white/60 rounded">
                          +{cert.skills.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 