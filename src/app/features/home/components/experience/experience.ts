import { Component } from '@angular/core';

interface ExperienceItem {
  readonly period: string;
  readonly organization: string;
  readonly role: string;
  readonly description: string;
  readonly focus: readonly string[];
  readonly technologies: readonly string[];
}

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  protected readonly items: readonly ExperienceItem[] = [
    {
      period: 'Recent',
      organization: 'Bank of Chile',
      role: 'Application Security Engineer',
      description:
        'Application and product security work across software development, mobile platforms and runtime protection, collaborating with engineering teams to design, validate and improve defensive controls.',
      focus: [
        'Application Security',
        'Mobile Security',
        'Runtime Protection',
        'Secure SDLC',
        'Applied Cryptography',
      ],
      technologies: ['Java', 'Android', 'C/C++', 'TypeScript', 'SAST / SCA'],
    },

    {
      period: 'Previous',
      organization: '3IT',
      role: 'Software & Security Engineering',
      description:
        'Software engineering and cybersecurity work involving secure application development, cloud-hosted environments, technical security assessments and internal engineering initiatives.',
      focus: ['Secure Software Engineering', 'Security Research', 'Cloud', 'Internal Tooling'],
      technologies: ['Java', 'C#', 'TypeScript', 'AWS', 'Docker'],
    },
  ];
}
