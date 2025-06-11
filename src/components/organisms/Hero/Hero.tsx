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
          <div className="space-y-4 sm:space-y-6">
            <div className="relative inline-block">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-4xl font-bold text-white shadow-2xl status-online">
                <img src={personalInfo.avatar} alt="Avatar" className="w-full h-full object-cover rounded-2xl sm:rounded-3xl" />
              </div>
            </div>
            
            <div className="space-y-3 sm:space-y-4 px-4 sm:px-0">
              <h1 className="text-display leading-tight">
                {personalInfo.name}
              </h1>
              <div className="text-headline text-gradient-primary">
                {personalInfo.title}
              </div>
              <p className="text-body-large max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
                {personalInfo.description}
              </p>
            </div>
          </div>

          {/* Tech Stack Preview */}
          <div className="max-w-4xl mx-auto px-4 sm:px-0">
            <p className="text-caption text-center mb-4 sm:mb-6">Tecnologías principales</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {topSkills.map((skill, index) => {
                const IconComponent = getSkillIcon(skill.id);
                return (
                  <div 
                    key={skill.name}
                    className="card-base p-3 sm:p-4 text-center group hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="skill-icon mx-auto mb-2 sm:mb-3 group-hover:bg-blue-600/20 transition-colors">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                      {skill.name}
                    </div>
                    <div className="mt-1 sm:mt-2">
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
          <div className="space-y-6 sm:space-y-8 px-4 sm:px-0">
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors break-all">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>{contactInfo.location}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
              <a href="/CV.pdf" download className="btn-primary flex items-center justify-center gap-2 w-full sm:w-auto">
                <Download className="w-4 h-4" />
                <span>Descargar CV</span>
              </a>
              <a href="#contact" className="btn-secondary flex items-center justify-center gap-2 w-full sm:w-auto">
                <Mail className="w-4 h-4" />
                <span>Contactar</span>
              </a>
              <div className="flex gap-3 sm:gap-4">
                <a 
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost flex items-center justify-center gap-2 flex-1 sm:flex-none"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
                <a 
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost flex items-center justify-center gap-2 flex-1 sm:flex-none"
                >
                  <Github className="w-4 h-4" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToSection}
          className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce p-2"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero; 