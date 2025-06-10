import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Server, 
  Database, 
  Wrench, 
  Cloud, 
  GitBranch,
  Container,
  Terminal,
  Layers,
  Globe,
  Rocket,
  Zap,
  Coffee,
  Leaf,
  FileCode,
  Smartphone,
  Bot,
  Send,
  Building,
  Link,
  Radio,
  TestTube,
  Settings,
  BookOpen,
  Network,
  Shield,
  Activity,
  Monitor,
  Palette,
  Workflow,
  Package
} from 'lucide-react';
import { Skill } from '../../../types';

interface SkillCardProps {
  skill: Skill;
  index?: number;
}

const getSkillIcon = (skillId: string, skillName: string) => {
  const iconMap: Record<string, React.ComponentType<any>> = {
    // Backend
    'nestjs': Rocket,
    'express': Zap,
    'nodejs': Server,
    'java': Coffee,
    'spring-boot': Leaf,
    'go': Activity,
    'python': FileCode,
    'django': Palette,
    'fastapi': Zap,
    'graphql': Link,
    'rest-api': Radio,
    'rabbitmq': Send,
    'websocket': Network,
    'microservices': Building,
    
    // Frontend
    'react': Code2,
    'nextjs': Monitor,
    'vue': Palette,
    'angular': Shield,
    'javascript': FileCode,
    'typescript': Code2,
    'html': Globe,
    'css': Palette,
    'tailwind': Palette,
    
    // Mobile
    'flutter': Smartphone,
    'kotlin': Bot,
    'react-native': Smartphone,
    'android': Bot,
    'ios': Smartphone,
    
    // Database
    'postgresql': Database,
    'mysql': Database,
    'mongodb': Database,
    'redis': Database,
    'sqlite': Database,
    'mariadb': Database,
    
    // Tools
    'docker': Container,
    'kubernetes': Settings,
    'aws': Cloud,
    'jenkins': Wrench,
    'github-actions': Workflow,
    'git': GitBranch,
    'swagger': BookOpen,
    'postman': Send,
    'nginx': Globe,
    'jest': TestTube,
    'linux': Terminal,
    'ubuntu': Terminal,
    'vscode': Code2,
    'intellij': Code2,
    'android-studio': Smartphone,
    'figma': Palette,
    'photoshop': Palette
  };
  
  return iconMap[skillId] || Code2;
};

const SkillCard: React.FC<SkillCardProps> = ({ skill, index = 0 }) => {
  const getSkillLevel = (level: number) => {
    if (level >= 90) return { label: 'Experto', color: 'text-emerald-400', bgColor: 'bg-emerald-500/20', borderColor: 'border-emerald-500/30' };
    if (level >= 80) return { label: 'Avanzado', color: 'text-blue-400', bgColor: 'bg-blue-500/20', borderColor: 'border-blue-500/30' };
    if (level >= 70) return { label: 'Intermedio', color: 'text-yellow-400', bgColor: 'bg-yellow-500/20', borderColor: 'border-yellow-500/30' };
    return { label: 'Básico', color: 'text-gray-400', bgColor: 'bg-gray-500/20', borderColor: 'border-gray-500/30' };
  };

  const getCategoryInfo = (category: string) => {
    const categories = {
      frontend: { icon: '🎨', label: 'Frontend' },
      backend: { icon: '⚙️', label: 'Backend' },
      database: { icon: '🗄️', label: 'Database' },
      tools: { icon: '🛠️', label: 'DevOps' },
      mobile: { icon: '📱', label: 'Mobile' },
      'soft-skills': { icon: '🧠', label: 'Soft Skills' }
    };
    return categories[category as keyof typeof categories] || { icon: '💻', label: 'Other' };
  };

  const getProgressColor = (level: number) => {
    if (level >= 90) return 'from-emerald-500 to-emerald-600';
    if (level >= 80) return 'from-blue-500 to-blue-600';
    if (level >= 70) return 'from-yellow-500 to-yellow-600';
    return 'from-gray-500 to-gray-600';
  };

  const skillLevel = getSkillLevel(skill.level);
  const categoryInfo = getCategoryInfo(skill.category);
  const IconComponent = getSkillIcon(skill.id, skill.name);

  return (
    <motion.div 
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ duration: 0.2 }}
      className="card-base p-6 group hover:border-blue-400/30 transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
            <IconComponent className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <h4 className="font-semibold text-white group-hover:text-blue-300 transition-colors">
              {skill.name}
            </h4>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs text-blue-400 bg-blue-600/20 px-2 py-1 rounded border border-blue-500/30">
                {categoryInfo.icon} {categoryInfo.label}
              </span>
            </div>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-2xl font-bold text-blue-400 mb-1">
            {skill.level}%
          </div>
          <span className={`text-xs px-2 py-1 rounded ${skillLevel.bgColor} ${skillLevel.color} border ${skillLevel.borderColor}`}>
            {skillLevel.label}
          </span>
        </div>
      </div>

      {/* Experience */}
      <div className="mb-4">
        <div className="text-caption text-white/60 mb-2">
          {skill.years} {skill.years === 1 ? 'año' : 'años'} de experiencia
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-xs text-white/60">Nivel de dominio</span>
          <span className="text-xs text-blue-400 font-medium">{skill.level}%</span>
        </div>
        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.05 }}
            className={`h-full bg-gradient-to-r ${getProgressColor(skill.level)} rounded-full relative`}
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard; 