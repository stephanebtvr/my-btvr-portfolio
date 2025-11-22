// src/app/services/portfolio.service.ts

import { Injectable } from '@angular/core';
import {
  SkillCategory,
  Experience,
  ContactInfo,
  SocialLink,
  Project,
} from '../models/portfolio.models';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  getSkillCategories(): SkillCategory[] {
    return [
      {
        title: 'Frontend',
        icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
        gradient: 'from-purple-50 to-blue-50',
        skills: [
          { name: 'Angular 15+', icon: 'devicon-angular-plain', hoverColor: '#dd0031' },
          { name: 'React', icon: 'fa-brands fa-react fa-lg', hoverColor: '#61dafb' },
          { name: 'JavaScript', icon: 'devicon-javascript-plain', hoverColor: '#f7df1e' },
          { name: 'TypeScript', icon: 'devicon-typescript-plain', hoverColor: '#3178c6' },
          { name: 'HTML5', icon: 'devicon-html5-plain', hoverColor: '#e34f26' },
          { name: 'CSS3', icon: 'devicon-css3-plain', hoverColor: '#1572b6' },
          { name: 'SASS', icon: 'devicon-sass-plain', hoverColor: '#cc6699' },
          { name: 'Bootstrap', icon: 'devicon-bootstrap-plain', hoverColor: '#7952b3' },
        ],
      },
      {
        title: 'Backend',
        icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
        gradient: 'from-green-50 to-teal-50',
        skills: [
          { name: 'Node.js', icon: 'devicon-nodejs-plain', hoverColor: '#339933' },
          { name: 'Java', icon: 'fa-brands fa-java fa-lg', hoverColor: '#007396' },
          { name: 'Express', icon: 'devicon-express-original', hoverColor: '#000000' },
          { name: 'Spring Boot', icon: 'devicon-spring-original', hoverColor: '#6db33f' },
          { name: 'NestJS', icon: 'devicon-nestjs-original', hoverColor: '#e0234e' },
        ],
      },
      {
        title: 'Bases de données & ORM',
        icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
        gradient: 'from-orange-50 to-red-50',
        skills: [
          { name: 'PostgreSQL', icon: 'devicon-postgresql-plain', hoverColor: '#336791' },
          { name: 'MySQL', icon: 'devicon-mysql-original', hoverColor: '#4479a1' },
          { name: 'MongoDB', icon: 'devicon-mongodb-plain', hoverColor: '#47a248' },
          { name: 'Prisma', icon: 'devicon-prisma-original', hoverColor: '#0c344b' },
          { name: 'Hibernate', icon: 'devicon-hibernate-plain', hoverColor: '#59666c' },
        ],
      },
      {
        title: 'APIs & Architecture logicielle',
        icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
        gradient: 'from-cyan-50 to-blue-50',
        skills: [
          {
            name: 'REST',
            icon: 'rest',
            hoverColor: '#3b82f6',
            type: 'mat-icon',
          },
          {
            name: 'SOAP',
            icon: 'soap',
            hoverColor: '#6366f1',
            type: 'mat-icon',
          },
          { name: 'Postman', icon: 'devicon-postman-plain', hoverColor: '#ff6c37' },
          {
            name: 'SOAP UI',
            icon: 'soapui',
            hoverColor: '#f59e0b',
            type: 'mat-icon',
          },

          {
            name: 'Microservices',
            icon: 'microser',
            hoverColor: '#8b5cf6',
            type: 'png',
          },
          { name: 'MVC', icon: 'mvcc', hoverColor: '#10b981', type: 'png' },
        ],
      },
      {
        title: 'Outils DevOps & Productivité',
        icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z',
        gradient: 'from-blue-50 to-indigo-50',
        skills: [
          { name: 'Docker', icon: 'devicon-docker-plain', hoverColor: '#2496ed' },
          { name: 'Git', icon: 'devicon-git-plain', hoverColor: '#f05032' },
          { name: 'Jira', icon: 'devicon-jira-plain', hoverColor: '#0052cc' },
          { name: 'Confluence', icon: 'devicon-confluence-plain', hoverColor: '#172b4d' },
          { name: 'Bitbucket', icon: 'devicon-bitbucket-plain', hoverColor: '#0052cc' },
          { name: 'Eclipse', icon: 'devicon-eclipse-plain', hoverColor: '#2c2255' },
          { name: 'IntelliJ', icon: 'devicon-intellij-plain', hoverColor: '#8b5cf6' },
          { name: 'VS Code', icon: 'devicon-vscode-plain', hoverColor: '#3b82f6' },
        ],
      },

      {
        title: 'Méthodologies & Qualité Logicielle',
        icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
        gradient: 'from-pink-50 to-rose-50',
        skills: [
          {
            name: 'Agile Scrum',
            icon: 'scrum3',
            hoverColor: '#06b6d4',
            type: 'png',
          },
          { name: 'JUnit', icon: 'devicon-junit-plain', hoverColor: '#25a162' },
          { name: 'Jest', icon: 'devicon-jest-plain', hoverColor: '#c21325' },
          {
            name: 'TDD',
            icon: 'tdd',
            hoverColor: '#dc2626',
            type: 'png',
          },
          {
            name: 'Lean Six Sigma',
            hoverColor: '#f59e0b',
            icon: 'sigma6',
            type: 'png',
          },
          {
            name: 'Kanban',
            hoverColor: '#f59e0b',
            icon: 'kanban',
            type: 'png',
          },
        ],
      },
    ];
  }

  getExperiences(): Experience[] {
    return [
      {
        title: 'Développeur Java Full Stack',
        company: 'AGIRC-ARRCO (via Randstad Digital)',
        period: 'Mar 2023 - Jul 2025',
        location: 'Gradignan (33)',
        description: [
          "Développement et maintenance d'applications en environnement Agile (équipe de 10 personnes, sprints de 2 semaines)",
          'Analyse des besoins métier et proposition de solutions techniques avec Spring Framework et Angular 15',
          "Implémentation de tests unitaires (JUnit, Jest) et tests d'intégration pour garantir la qualité du code",
          'Participation active aux cérémonies Scrum (daily, planning, retrospective, review)',
        ],
        tags: ['Java', 'Spring Boot', 'Angular 15', 'Agile Scrum'],
        isExpanded: false,
      },
      {
        title: 'Concepteur Applicatif',
        company: 'COVEA (via Randstad Digital)',
        period: 'Aug 2022 - Mar 2023',
        location: 'Niort (79)',
        description: [
          "Gestion du Maintien en Conditions Opérationnelles (MCO) et projets d'accostage",
          'Rédaction de spécifications techniques pour standardiser les processus GMF, MAAF et MMA',
          "Collaboration avec les équipes métier pour l'analyse et résolution de problématiques techniques",
        ],
        tags: [
          'Java',
          'Microservices',
          'Specifications Techniques',
          ' Maintien en Conditions Opérationnelles',
        ],
        isExpanded: false,
      },
      {
        title: 'Resposable Atelier de production',
        company: 'ADOPT PARFUMS',
        period: 'Oct 2019 - Nov 2020',
        location: 'Cestas (33)',
        description: [
          "Encadrement d'une équipe de 20 opérationnels en 2x8 (3x8 selon l'activité)",
          'Optimisation des performances et le suivi de KPI (TRS - Taux de Rendement Synthétique)',
          'Recrutement et formations des nouveaux collaborateurs aux procédures qualité et sécurité',
        ],
        tags: ['Lean', 'Qualité Industrielle', "Management d'équipe", ' Gestion de production'],
        isExpanded: false,
      },
      {
        title: 'Ingénieur Integrated Lean Six Sigma',
        company: 'MONDELEZ INTERNATIONAL',
        period: 'Mars 2015 - Nov 2017',
        location: 'Cestas (33)',
        description: [
          "Pilotage de projets DMAIC générant ~200k€ d'économies annuelles sur les lignes Mikado/Petit Écolier",
          "Aniumation d'ateliers Kaizen et 5S pour améliorer l'efficacité opérationnelle",
          "Coaching et montée en compétences d'une équipe de 35 opérationnels",
          'Animation des performances et suivi des indicateurs SQCDM',
        ],
        tags: [
          'Lean Six Sigma',
          'DMAIC',
          'Management',
          'TPM',
          'Kaizen',
          'Eradication des gaspillages',
        ],
        isExpanded: false,
      },
      {
        title: 'Ingénieur Production (Stage)',
        company: "L'ORÉAL",
        period: 'Mars 2014 - Sep 2014',
        location: 'Rambouillet (78)',
        description: [
          'Chef de projet réduction des micro-arrêts',
          'Coaching et montée en compétences des équipes de production sur les outils Lean',
          'Animation des routines de performance et suivi des indicateurs clés',
          'Mise en place management visuel pour le suivi des performances',
        ],
        tags: ['Lean Manufacturing', 'DMAIC', 'Management', 'TPM', '5S', '5P'],
        isExpanded: false,
      },
    ];
  }

  // portfolio.service.ts
  getProjects(): Project[] {
    return [
      {
        title: 'Portfolio',
        shortDescription: 'Mon portfolio personnel développé avec Angular 18+ et Tailwind CSS.',
        fullDescription: `...`,
        image: 'assets/projects/images/portfolio_vitrine.png',
        tags: ['Angular', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
        status: 'en cours',
        links: {
          github: 'https://github.com/stephanebtvr/my-btvr-portfolio/',
          live: undefined,
        },
        isExpanded: false,
      },

      // ... autres projets
    ];
  }

  getContactInfo(): ContactInfo {
    return {
      email: 'bettaver.stephane@gmail.com',
      phone: '+33651358480',
      location: 'Sud-Est de la France',
      linkedin: 'https://linkedin.com/in/stephane-btvr',
    };
  }

  getSocialLinks(): SocialLink[] {
    return [
      //   {
      //     name: 'Email',
      //     url: 'mailto:bettaver.stephane@gmail.com',
      //     icon: 'M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z',
      //   },
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/stephane-btvr',
        icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
      },
      //   {
      //     name: 'Phone',
      //     url: 'tel:+33651358480',
      //     icon: 'M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z',
      //   },
    ];
  }
}
