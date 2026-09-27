import { Component } from '@angular/core';

interface AboutArea {
  readonly label: string;
  readonly description: string;
}

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly areas: readonly AboutArea[] = [
    {
      label: 'Application Security',
      description: 'Security engineering integrated with software architecture and development.',
    },
    {
      label: 'Mobile Security',
      description: 'Runtime protection, adversarial environments and Android security research.',
    },
    {
      label: 'Applied Cryptography',
      description: 'Interoperable cryptographic APIs, protocols and secure composition.',
    },
    {
      label: 'Software Engineering',
      description: 'Building security controls and tooling as production software.',
    },
    {
      label: 'Local AI Systems',
      description: 'Bounded capabilities, local inference and human-in-the-loop interaction.',
    },
  ];

  protected readonly approach: readonly string[] = ['Build', 'Break', 'Understand', 'Harden'];
}
