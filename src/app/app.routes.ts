import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home.component').then((m) => m.HomeComponent),
  },
  //   {
  //     path: 'apropos',
  //     loadComponent: () => import('./features/about/about.component').then((m) => m.AboutComponent),
  //   },
  {
    path: 'experience',
    loadComponent: () =>
      import('./components/experience/experience.component').then((m) => m.ExperienceComponent),
  },
  {
    path: 'skills',
    loadComponent: () =>
      import('./components/skills/skills.component').then((m) => m.SkillsComponent),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./components/projects/projects.component').then((m) => m.ProjectsComponent),
  },

  {
    path: 'contact',
    loadComponent: () =>
      import('./components/contact/contact.component').then((m) => m.ContactComponent),
  },

  { path: '**', redirectTo: '' },
];
