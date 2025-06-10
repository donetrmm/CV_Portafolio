import { Project, Skill, Experience, Education, ContactInfo, NavItem, Certification } from '../types';
import React from 'react';

export const personalInfo = {
  name: "Iskander Donet Ramos Morales",
  title: "Desarrollador Backend & Ingeniero de Software",
  subtitle: "Especializado en arquitecturas modernas y soluciones escalables",
  description: "Desarrollador Backend especializado en arquitecturas modernas y soluciones escalables. Actualmente estudiando Ingeniería en Software en la Universidad Politécnica de Chiapas, con experiencia en el desarrollo de sistemas ERP y aplicaciones IoT. Me apasiona crear sistemas robustos y eficientes que generen valor real para los negocios.",
  avatar: "/avatar.jpg",
  resume: "/CV.pdf"
};

export const contactInfo: ContactInfo = {
  email: "donetramosm@gmail.com",
  phone: "+52 961 353 3655",
  location: "Chiapas, México",
  linkedin: "https://www.linkedin.com/in/donetrm",
  github: "https://github.com/donetrmm",
  twitter: "",
  website: "",
  resume: "/CV.pdf"
};

export const navigation: NavItem[] = [
  { id: "hero", label: "Inicio", href: "#hero" },
  { id: "about", label: "Sobre Mí", href: "#about" },
  { id: "skills", label: "Habilidades", href: "#skills" },
  { id: "projects", label: "Proyectos", href: "#projects" },
  { id: "experience", label: "Experiencia", href: "#experience" },
  { id: "contact", label: "Contacto", href: "#contact" }
];

export const skills: Skill[] = [
  // Frontend
  {
    id: "javascript",
    name: "JavaScript",
    category: "frontend",
    level: 85,
    icon: "JS",
    years: 3
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "frontend",
    level: 89,
    icon: "TS",
    years: 3
  },
  {
    id: "react",
    name: "React",
    category: "frontend",
    level: 82,
    icon: "React",
    years: 3
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "frontend",
    level: 80,
    icon: "Next",
    years: 2
  },
  {
    id: "html",
    name: "HTML5",
    category: "frontend",
    level: 83,
    icon: "HTML",
    years: 3
  },
  {
    id: "css",
    name: "CSS3",
    category: "frontend",
    level: 81,
    icon: "CSS",
    years: 3
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "frontend",
    level: 73,
    icon: "Tailwind",
    years: 2
  },
  
  // Backend
  {
    id: "nestjs",
    name: "NestJS",
    category: "backend",
    level: 90,
    icon: "Nest",
    years: 2
  },
  {
    id: "express",
    name: "Express.js",
    category: "backend",
    level: 89,
    icon: "Express",
    years: 3
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    level: 90,
    icon: "Node",
    years: 3
  },
  {
    id: "java",
    name: "Java",
    category: "backend",
    level: 78,
    icon: "Java",
    years: 2
  },
  {
    id: "spring-boot",
    name: "Spring Boot",
    category: "backend",
    level: 70,
    icon: "Spring",
    years: 1
  },
  {
    id: "go",
    name: "Go",
    category: "backend",
    level: 70,
    icon: "Go",
    years: 1
  },
  {
    id: "python",
    name: "Python",
    category: "backend",
    level: 75,
    icon: "Python",
    years: 2
  },
  {
    id: "django",
    name: "Django",
    category: "backend",
    level: 70,
    icon: "Django",
    years: 1
  },
  {
    id: "fastapi",
    name: "FastAPI",
    category: "backend",
    level: 72,
    icon: "FastAPI",
    years: 1
  },
  {
    id: "flutter",
    name: "Flutter",
    category: "mobile",
    level: 80,
    icon: "Flutter",
    years: 2
  },
  {
    id: "kotlin",
    name: "Kotlin",
    category: "mobile",
    level: 86,
    icon: "Kotlin",
    years: 1
  },
  
  // Bases de Datos
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "database",
    level: 81,
    icon: "PostgreSQL",
    years: 3
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "database",
    level: 90,
    icon: "MySQL",
    years: 3
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "database",
    level: 89,
    icon: "MongoDB",
    years: 2
  },
  {
    id: "redis",
    name: "Redis",
    category: "database",
    level: 78,
    icon: "Redis",
    years: 2
  },
  {
    id: "sqlite",
    name: "SQLite",
    category: "database",
    level: 85,
    icon: "SQLite",
    years: 2
  },
  {
    id: "mariadb",
    name: "MariaDB",
    category: "database",
    level: 80,
    icon: "MariaDB",
    years: 2
  },
  
  // DevOps y Herramientas
  {
    id: "docker",
    name: "Docker",
    category: "tools",
    level: 85,
    icon: "Docker",
    years: 2
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    category: "tools",
    level: 70,
    icon: "K8s",
    years: 1
  },
  {
    id: "aws",
    name: "AWS",
    category: "tools",
    level: 82,
    icon: "AWS",
    years: 2
  },
  {
    id: "jenkins",
    name: "Jenkins",
    category: "tools",
    level: 78,
    icon: "Jenkins",
    years: 1
  },
  {
    id: "github-actions",
    name: "GitHub Actions",
    category: "tools",
    level: 80,
    icon: "GHA",
    years: 2
  },
  {
    id: "git",
    name: "Git",
    category: "tools",
    level: 90,
    icon: "Git",
    years: 3
  },
  {
    id: "swagger",
    name: "Swagger",
    category: "tools",
    level: 88,
    icon: "Swagger",
    years: 2
  },
  {
    id: "postman",
    name: "Postman",
    category: "tools",
    level: 90,
    icon: "Postman",
    years: 3
  },
  {
    id: "nginx",
    name: "Nginx",
    category: "tools",
    level: 85,
    icon: "Nginx",
    years: 2
  },
  
  // APIs y Comunicación
  {
    id: "graphql",
    name: "GraphQL",
    category: "backend",
    level: 70,
    icon: "GraphQL",
    years: 1
  },
  {
    id: "rest-api",
    name: "REST API",
    category: "backend",
    level: 90,
    icon: "REST",
    years: 3
  },
  {
    id: "rabbitmq",
    name: "RabbitMQ",
    category: "backend",
    level: 75,
    icon: "RabbitMQ",
    years: 1
  },
  {
    id: "websocket",
    name: "WebSocket",
    category: "backend",
    level: 88,
    icon: "WS",
    years: 3
  },
  {
    id: "microservices",
    name: "Microservicios",
    category: "backend",
    level: 80,
    icon: "μServices",
    years: 2
  },
  
  // Testing
  {
    id: "jest",
    name: "Jest",
    category: "tools",
    level: 69,
    icon: "Jest",
    years: 1
  }
];

export const projects: Project[] = [
  {
    id: "vecindapp",
    title: "VecindApp - Sistema de Gestión Residencial",
    description: "Sistema modular de gestión residencial con NestJS y control de acceso QR seguro",
    longDescription: "Backend modular desarrollado con NestJS usando arquitectura limpia para la gestión completa de comunidades residenciales. Incluye sistema QR seguro para acceso temporal, integración Flutter con sincronización en tiempo real, y automatización de procesos de reservación. Logró adopción del 100% de usuarios en el primer mes y redujo reportes de fallos en 50%.",
    technologies: ["NestJS", "TypeScript", "MySQL", "Flutter", "JWT", "QR Codes", "WebSocket", "Docker"],
    imageUrl: "/api/placeholder/600/400",
    demoUrl: "",
    githubUrl: "",
    featured: false,
    category: "fullstack"
  },
  {
    id: "trafficly",
    title: "Trafficly - Analytics de Flujo Peatonal",
    description: "Sistema IoT para análisis de flujo peatonal con backend Express y arquitectura hexagonal",
    longDescription: "Plataforma de analytics en tiempo real para monitoreo de flujo peatonal desarrollada con Express y arquitectura hexagonal orientada a eventos. Incluye análisis predictivo, actualizaciones cada 5 minutos, monitoreo IoT avanzado y dashboard de analytics. Redujo errores de datos en 30% y mejoró significativamente la mantenibilidad del sistema.",
    technologies: ["Express.js", "Node.js", "PostgreSQL", "IoT", "Real-time Analytics", "Event-driven Architecture", "Docker", "AWS"],
    imageUrl: "/api/placeholder/600/400",
    demoUrl: "",
    githubUrl: "",
    featured: true,
    category: "iot"
  },
  {
    id: "erp-sales",
    title: "ERP de Ventas - Bitquark Systems",
    description: "Sistema ERP modular desarrollado con NestJS aplicando principios DDD",
    longDescription: "Sistema ERP empresarial para gestión de ventas desarrollado con NestJS aplicando principios de código limpio y diseño dirigido por el dominio (DDD). Incluye optimización de modelos MySQL para escalabilidad, despliegue completo en AWS con pipelines CI/CD automatizados, y documentación completa de APIs REST con Swagger para integración fluida entre equipos.",
    technologies: ["NestJS", "TypeScript", "MySQL", "AWS", "Docker", "Swagger", "CI/CD", "Jenkins"],
    imageUrl: "/api/placeholder/600/400",
    demoUrl: "",
    githubUrl: "",
    featured: true,
    category: "fullstack"
  },
  {
    id: "clyra",
    title: "Clyra - Gestión de Contraseñas",
    description: "Aplicación móvil de gestión de contraseñas con encriptación local PBKDF2 y AES-256",
    longDescription: "Aplicación móvil desarrollada en Flutter para la gestión segura de contraseñas con administración completamente local. Implementa encriptación PBKDF2 para derivación de claves y AES-256 para el cifrado de datos. No requiere conexión a internet ni almacenamiento en la nube, garantizando máxima privacidad y seguridad de los datos del usuario.",
    technologies: ["Flutter", "Dart", "AES-256", "PBKDF2", "SQLite", "Cryptography", "Material Design"],
    imageUrl: "/api/placeholder/600/400",
    demoUrl: "",
    githubUrl: "https://github.com/donetrmm/Clyra.git",
    featured: true,
    category: "mobile"
  },
  {
    id: "more-code-landing",
    title: "Landing Page More Code",
    description: "Landing page empresarial con principios UX/UI y diseño orientado a la marca",
    longDescription: "Landing page desarrollada con Next.js para la presentación de More Code, aplicando principios de UX/UI avanzados y diseño responsive. Enfocada en rendimiento óptimo, experiencia de usuario excepcional, y elementos visuales alineados con la identidad corporativa. Incluye optimización SEO, carga rápida y diseño adaptativo para todos los dispositivos.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "SEO", "Responsive Design", "Performance Optimization"],
    imageUrl: "/api/placeholder/600/400",
    demoUrl: "",
    githubUrl: "",
    featured: false,
    category: "frontend"
  },
  {
    id: "ecommerce-microservices",
    title: "E-commerce con Microservicios",
    description: "Desarrollo de backend con microservicios, NestJS e integración de comunicación basada en eventos y API Gateway",
    longDescription: "Plataforma de e-commerce desarrollada con arquitectura de microservicios usando NestJS para cada servicio. Implementa comunicación basada en eventos para garantizar la consistencia de datos entre servicios, API Gateway para unificar las interfaces, y patrones de diseño avanzados para escalabilidad horizontal. Incluye gestión de inventario, procesamiento de pagos, gestión de usuarios y sistema de notificaciones en tiempo real.",
    technologies: ["NestJS", "Microservices", "Event-driven Architecture", "API Gateway", "TypeScript", "RabbitMQ", "Docker", "Kubernetes", "Redis", "PostgreSQL"],
    imageUrl: "/api/placeholder/600/400",
    demoUrl: "",
    githubUrl: "",
    featured: false,
    category: "backend"
  },
  {
    id: "centinels-eye",
    title: "Centinel's Eye - Sistema IoT de Monitoreo",
    description: "Múltiples módulos de backend con arquitectura hexagonal, WebSockets para entrega en tiempo real de datos de sensores IoT",
    longDescription: "Sistema de monitoreo IoT con arquitectura hexagonal para múltiples módulos de backend especializados. Implementa WebSockets para la entrega en tiempo real de datos de mediciones de sensores IoT, integrado con RabbitMQ para gestión de colas de mensajes y procesamiento asíncrono. Incluye dashboard en tiempo real, alertas automáticas, análisis predictivo de datos de sensores y sistema de notificaciones distribuido.",
    technologies: ["Hexagonal Architecture", "WebSockets", "IoT", "RabbitMQ", "Real-time Data", "Event Processing", "TypeScript", "PostgreSQL", "Redis", "Docker"],
    imageUrl: "/api/placeholder/600/400",
    demoUrl: "",
    githubUrl: "",
    featured: true,
    category: "backend"
  }
];

export const experience: Experience[] = [
  {
    id: "fullstack-developer-more-code",
    company: "More Code",
    position: "Programador Full Stack",
    startDate: "2025-01",
    endDate: "2025-04",
    current: false,
    description: "Desarrollo full stack con enfoque principal en backend, aplicando arquitectura limpia y Clean Code.",
    achievements: [
      "Desarrollé servicio backend completo con NestJS aplicando principios de arquitectura limpia y Clean Code",
      "Diseñé e implementé base de datos MySQL incluyendo gestión de migraciones",
      "Realicé despliegue completo del servicio en AWS y documenté endpoints con Swagger",
      "Participé en desarrollo de aplicación móvil con Kotlin aplicando prácticas de seguridad",
      "Desarrollé Landing Page con Next.js enfocándome en rendimiento y experiencia de usuario"
    ],
    technologies: ["NestJS", "TypeScript", "MySQL", "AWS", "Kotlin", "Next.js", "Swagger", "Security"]
  },
  {
    id: "backend-developer-bitquark",
    company: "Bitquark Systems",
    position: "Desarrollador Backend - ERP de Ventas",
    startDate: "2024-07",
    endDate: "2024-12",
    current: false,
    description: "Desarrollo modular con NestJS aplicando principios de código limpio y DDD para ampliar funcionalidades del ERP.",
    achievements: [
      "Lideré el desarrollo de servicios backend modulares con NestJS aplicando principios de código limpio y DDD",
      "Diseñé y optimicé modelos de datos MySQL asegurando escalabilidad e integridad de datos",
      "Gestioné el despliegue completo en AWS implementando pipelines CI/CD automatizados",
      "Documenté APIs REST con Swagger facilitando integración fluida entre equipos"
    ],
    technologies: ["NestJS", "TypeScript", "MySQL", "AWS", "Docker", "Swagger", "CI/CD", "Jenkins"]
  },
  {
    id: "backend-developer-hampton",
    company: "Hampton School",
    position: "Desarrollador de Back-end",
    startDate: "2024-04",
    endDate: "2024-07",
    current: false,
    description: "Desarrollo completo del backend para sistema de gestión de laboratorios escolares con Express y MySQL.",
    achievements: [
      "Desarrollé por completo el backend del sistema para gestión de laboratorios escolares",
      "Construí API REST robusta con Express incluyendo módulos de administración y estadísticas",
      "Diseñé base de datos desde cero con MySQL definiendo entidades y relaciones optimizadas",
      "Documenté todos los endpoints con Swagger mejorando comunicación entre equipos",
      "Desplegué servicio en entorno productivo garantizando estabilidad y rendimiento"
    ],
    technologies: ["Express.js", "Node.js", "MySQL", "Swagger", "REST API", "Database Design"]
  }
];

export const education: Education[] = [
  {
    id: "software-engineering",
    institution: "Universidad Politécnica de Chiapas",
    degree: "Licenciatura",
    field: "Ingeniería en Software",
    startDate: "2022-08",
    endDate: "2025-12",
    current: true,
    description: "Estudiando Ingeniería en Software con enfoque en desarrollo de sistemas modernos y arquitecturas escalables."
  }
];

export const certifications: Certification[] = [
  {
    id: "ux-design-google",
    name: "Diseño de Experiencia del Usuario (UX)",
    issuer: "Google",
    category: "UX/UI Design",
    year: "2024",
    skills: ["User Experience", "Figma", "Design Thinking", "Prototyping"]
  },
  {
    id: "aws-academy-intro-cloud",
    name: "AWS Academy Introducción a la Nube Semestre 1",
    issuer: "Amazon Web Services",
    category: "Cloud Computing",
    year: "2023",
    skills: ["AWS Basics", "Cloud Fundamentals", "EC2", "S3"]
  },
  {
    id: "aws-academy-architecture",
    name: "AWS Academy Arquitectura en la Nube",
    issuer: "Amazon Web Services",
    category: "Cloud Architecture",
    year: "2024",
    skills: ["AWS Architecture", "High Availability", "Scalability", "Best Practices"]
  },
  {
    id: "aws-academy-foundations",
    name: "AWS Academy Fundamentos de la Nube",
    issuer: "Amazon Web Services",
    category: "Cloud Computing",
    year: "2024",
    skills: ["Cloud Infrastructure", "AWS Services", "Security", "Cost Management"]
  },
  {
    id: "operating-systems-basics",
    name: "Fundamentos de Sistemas Operativos",
    issuer: "Google",
    category: "Systems Administration",
    year: "2023",
    skills: ["Linux", "Windows", "Command Line", "System Management"]
  },
  {
    id: "network-support-security",
    name: "Soporte y Seguridad de Redes",
    issuer: "Google",
    category: "Networking & Security",
    year: "2023",
    skills: ["Network Security", "Troubleshooting", "Protocols", "Firewalls"]
  },
  {
    id: "network-fundamentals",
    name: "Fundamentos de Redes",
    issuer: "Google",
    category: "Networking",
    year: "2023",
    skills: ["TCP/IP", "Network Protocols", "Routing", "Switching"]
  },
  {
    id: "network-troubleshooting",
    name: "Dirección de Red y Solución Básica de Problemas",
    issuer: "Google",
    category: "Networking",
    year: "2023",
    skills: ["Network Troubleshooting", "IP Addressing", "Subnetting", "Problem Solving"]
  }
]; 