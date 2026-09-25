import { Component } from '@angular/core';
import { Project } from '../../../../core/models/project';
import { ProjectCard } from '../../../../shared/components/project-card/project-card';

@Component({
  imports: [ProjectCard],
  selector: 'app-selected-work',
  styleUrl: './selected-work.scss',
  templateUrl: './selected-work.html',
})
export class SelectedWork {
  protected readonly projects: readonly Project[] = [
    {
      slug: 'ares',
      title: 'A.R.E.S',
      subtitle: 'Local AI Command Platform',
      description: 'A modular local-first AI platform combining voice interation, intent routing and system automation.',
      technologies: [
        'Java',
        'Local LLM',
        'Voice',
        'Windows'
      ],
      visual: 'ares',
      visualLabel: 'AI / SYSTEMS'
    },
    {
      slug: 'android-rasp',
      title: 'Android RASP',
      subtitle: 'Runtime Application Self Protection & Mobile Security',
      description: 'Runtime security research focused on instrumentation, root environemnts, tampering and application integrity.',
      technologies: [
        'C/C++',
        'Android NDK',
        'Android SDK',
        'JNI'
      ],
      visual: 'rasp',
      visualLabel: 'MOBILE / SECURITY'
    },
    {
      slug: 'crypto-library',
      title: 'Crypto Library',
      subtitle: 'Cross-platform Cryptography',
      description: 'A cryptographic abstraction layer designed for interoperable implementations across multiple platforms.',
      technologies: [
        'TypeScript',
        'Java',
        'BouncyCastle',
        'WebCrypto',
        'Node Forge'
      ],
      visual: 'crypto',
      visualLabel: 'APPLIED CRYPTOGRAPHY'
    }
  ];
}
