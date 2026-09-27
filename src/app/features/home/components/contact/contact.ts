import { Component } from '@angular/core';

interface ContactLink {
  readonly label: string;
  readonly href: string;
  readonly external: boolean;
}

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly interests: readonly string[] = [
    'Application Security',
    'Product Security',
    'Mobile Security',
    'Security Engineering',
    'Security Research',
  ];

  protected readonly links: readonly ContactLink[] = [
    {
      label: 'Email',
      href: 'mailto:REPLACE_WITH_EMAIL',
      external: false,
    },
    {
      label: 'LinkedIn',
      href: 'REPLACE_WITH_LINKEDIN',
      external: true,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/barkatthemoon18',
      external: true,
    },
  ];
}
