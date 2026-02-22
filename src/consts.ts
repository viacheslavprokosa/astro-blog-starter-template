// Site configuration and personal data
export const SITE_TITLE = "Viacheslav Prokosa | Senior Backend Engineer";
export const SITE_DESCRIPTION = "Senior Backend Engineer with 10 years of experience building scalable systems. Expert in PHP, Laravel, Symfony, MySQL, Docker, GCP, and Kubernetes.";

// Personal Information
export const PERSONAL_INFO = {
    name: "Viacheslav Prokosa",
    title: "Senior Backend Engineer",
    subtitle: "Full-Stack Development & Technical Consulting",
    location: "Hamburg, Germany",
    email: "contact@prokosa.dev",

    summary: "Senior Backend Engineer with 10 years of commercial experience building scalable and maintainable backend systems. Strong expertise in PHP 8.2/8.3, Laravel, Symfony, MySQL, Redis, Docker, GCP, Kubernetes and distributed systems. Experienced in full development lifecycle, deployment automation, and technical consulting.",

    social: {
        github: "https://github.com/viacheslavprokosa",
        linkedin: "https://www.linkedin.com/in/viacheslav-prokosa-8497351a7/",
    }
};

// Skills organized by category
export const SKILLS = {
    backend: [
        { name: "PHP 8.2/8.3", years: 10, level: 95 },
        { name: "Laravel", years: 9, level: 95 },
        { name: "Symfony", years: 7, level: 85 },
        { name: "MySQL", years: 10, level: 90 },
        { name: "PostgreSQL", years: 1, level: 70 },
        { name: "Redis", years: 6, level: 85 },
    ],

    devops: [
        { name: "Docker", years: 6, level: 90 },
        { name: "Kubernetes", years: 3, level: 80 },
        { name: "GCP", years: 6, level: 85 },
        { name: "GitOps", years: 2, level: 75 },
        { name: "ArgoCD", years: 2, level: 75 },
        { name: "CI/CD", years: 6, level: 85 },
    ],

    architecture: [
        { name: "Microservices", years: 5, level: 85 },
        { name: "Domain-Driven Design", years: 5, level: 80 },
        { name: "SOLID Principles", years: 8, level: 90 },
        { name: "Design Patterns", years: 8, level: 90 },
        { name: "TDD/BDD", years: 6, level: 80 },
    ],

    other: [
        { name: "Python", years: 1, level: 60 },
        { name: "RabbitMQ", years: 4, level: 75 },
        { name: "Nginx", years: 7, level: 80 },
        { name: "Git", years: 10, level: 90 },
    ]
};

// Work Experience
export const EXPERIENCE = [
    {
        position: "Open Source Developer",
        company: "Open Source Contributions",
        duration: "1 year",
        period: "2025 - Present",
        description: "Contributing to open source projects and infrastructure automation tools.",
        achievements: [
            "Active contributions to Kubernetes ecosystem projects",
            "Development of automation scripts and tools in Bash and Python",
            "Infrastructure as Code implementations",
            "Documentation improvements and bug fixes",
            "Community engagement and code reviews"
        ],
        technologies: ["Kubernetes", "Bash", "Python", "PHP", "CI/CD", "Docker"]
    },
    {
        position: "Senior Backend Developer",
        company: "Marketing SaaS Platform",
        duration: "7 years",
        period: "2018 - 2025",
        description: "Led development of a marketing SaaS platform for analytics, automation and business process optimization.",
        achievements: [
            "Led large-scale refactoring of legacy system improving performance and stability",
            "Direct communication with business stakeholders, translating requirements into technical solutions",
            "Built backend modules and integrations independently in PHP 8.2-8.3",
            "Implemented and tested multiple MVPs from scratch",
            "Designed SQL schemas, optimized queries, implemented caching strategies",
            "Completed numerous integrations with e-commerce, marketing tools, courier APIs, CRM systems, payment providers",
            "Worked with Docker, GCP (Pub/Sub, Cloud SQL, Cloud Run), Redis, CI/CD pipelines"
        ],
        technologies: ["PHP 8.2/8.3", "Laravel", "MySQL", "Redis", "Docker", "GCP", "Kubernetes"]
    },
    {
        position: "Freelance PHP Developer",
        company: "Freelancer",
        duration: "3 years",
        period: "2015 - 2018",
        description: "Development and maintenance of custom solutions for small and medium businesses.",
        achievements: [
            "Development of custom CRM systems",
            "Maintenance and support of existing client applications",
            "Building integrations, automation tools, internal dashboards",
            "Full-cycle delivery: requirements, architecture, coding, testing, deployment, support"
        ],
        technologies: ["PHP", "Laravel", "MySQL", "JavaScript"]
    }
];

// Featured Projects
export const PROJECTS = [
    {
        title: "Marketing SaaS Platform",
        description: "Enterprise-grade marketing analytics and automation platform serving thousands of users. Built scalable backend architecture with microservices.",
        technologies: ["PHP 8.3", "Laravel", "MySQL", "Redis", "Docker", "GCP", "Kubernetes"],
        highlights: [
            "Refactored legacy monolith to microservices architecture",
            "Implemented real-time analytics processing",
            "Built integration layer for 20+ external services"
        ],
        nda: true,
        links: {
            demo: "",
            github: ""
        }
    },
    {
        title: "Multi-Courier Tracking System",
        description: "Microservice for tracking shipments across multiple courier services with webhook delivery and circuit breaker patterns.",
        technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
        highlights: [
            "Integrated 6+ courier APIs",
            "Implemented circuit breaker for resilience",
            "Added Prometheus metrics for monitoring"
        ],
        nda: true,
        links: {
            demo: "",
            github: ""
        }
    },
    {
        title: "Infrastructure Automation",
        description: "GitOps-based infrastructure automation using Kubernetes, ArgoCD, and Terraform for multi-environment deployments.",
        technologies: ["Kubernetes", "ArgoCD", "Terraform", "GCP", "GitOps"],
        highlights: [
            "Automated staging and production deployments",
            "Implemented cert-manager for SSL automation",
            "Set up monitoring with Prometheus and Grafana"
        ],
        nda: true,
        links: {
            demo: "",
            github: ""
        }
    }
];
