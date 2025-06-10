import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  Github, 
  Linkedin, 
  ChevronDown,
  Code2, 
  Server, 
  Database, 
  Wrench, 
  Cloud, 
  GitBranch,
  Container,
  Terminal,
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
  Workflow
} from 'lucide-react';
import { personalInfo, contactInfo, skills } from '../../../utils/data';

const getSkillIcon = (skillId: string) => {
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
    'kotlin': Smartphone,
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

const Hero: React.FC = () => {
  const topSkills = skills.slice(0, 6);

  const scrollToSection = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-container">
      <div className="hero-background" />
      
      {/* Navigation */}
      <nav className="nav-container">
        <div className="nav-content">
          <div className="nav-brand">
            {personalInfo.name.split(' ')[0]}
          </div>
          <div className="nav-links">
            <a href="#about" className="nav-link">Sobre Mí</a>
            <a href="#skills" className="nav-link">Habilidades</a>
            <a href="#projects" className="nav-link">Proyectos</a>
            <a href="#experience" className="nav-link">Experiencia</a>
          </div>
        </div>
      </nav>

      <div className="hero-content">
        {/* Status Badge */}
        <div className="hero-badge">
          <span>Disponible para nuevos proyectos</span>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto text-center space-y-8">
          
          {/* Avatar & Title */}
          <div className="space-y-6">
            <div className="relative inline-block">
              <div className="w-32 h-32 mx-auto rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-4xl font-bold text-white shadow-2xl status-online">
                <img src={personalInfo.avatar} alt="Avatar" className="w-full h-full object-cover rounded-3xl" />
              </div>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-display">
                {personalInfo.name}
              </h1>
              <div className="text-headline text-gradient-primary">
                {personalInfo.title}
              </div>
              <p className="text-body-large max-w-3xl mx-auto leading-relaxed">
                {personalInfo.description}
              </p>
            </div>
          </div>

          {/* Tech Stack Preview */}
          <div className="max-w-4xl mx-auto">
            <p className="text-caption text-center mb-6">Tecnologías principales</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {topSkills.map((skill, index) => {
                const IconComponent = getSkillIcon(skill.id);
                return (
                  <div 
                    key={skill.name}
                    className="card-base p-4 text-center group hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="skill-icon mx-auto mb-3 group-hover:bg-blue-600/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="text-caption font-medium text-white/80 group-hover:text-white transition-colors">
                      {skill.name}
                    </div>
                    <div className="mt-2">
                      <div className="skill-bar mx-auto">
                        <div 
                          className="skill-progress"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact & Actions */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-body">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>{contactInfo.location}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/CV.pdf" download className="btn-primary">
                <Download className="w-4 h-4" />
                Descargar CV
              </a>
              <a href="#contact" className="btn-secondary">
                <Mail className="w-4 h-4" />
                Contactar
              </a>
              <a 
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a 
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToSection}
          className="absolute top-10 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero; 