import { Component } from '@angular/core';

interface ResearchArea {
  readonly index: string;
  readonly label: string;
  readonly title: string;
  readonly description: string;
  readonly topics: readonly string[];
}

@Component({
  imports: [],
  selector: 'app-research',
  styleUrl: './research.scss',
  templateUrl: './research.html',
})
export class Research {
  protected readonly areas: readonly ResearchArea[] = [
    {
      index: '01',
      label: 'Mobile Runtime Security',
      title: 'Runtime protection under hostile Android environments',
      description:
        'Research into application behavior and defensive controls when Android executes under rooted, instrumented or modified runtime environments.',
      topics: ['RASP', 'Root', 'Instrumentation', 'Tampering'],
    },
    {
      index: '02',
      label: 'Adversarial Instrumentation',
      title: 'Understanding how runtime assumptions fail',
      description:
        'Analysis of dynamic instrumentation, hooking, debugging and process manipulation to identify runtime signals that remain meaningful under adversarial control.',
      topics: ['Frida', 'Runtime Hooks', 'Debugging', 'Process State'],
    },
    {
      index: '03',
      label: 'Applied Cryptography',
      title: 'Interoperable cryptographic systems',
      description:
        'Design and validation of cryptographic APIs and composed protocols across runtimes, with emphasis on explicit contracts and cross-platform interoperability.',
      topics: ['Java', 'TypeScript', 'Bouncy Castle', 'WebCrypto'],
    },
    {
      index: '04',
      label: 'Local AI Systems',
      title: 'Bounded execution for local intelligent systems',
      description:
        'Exploration of local model routing, deterministic capability boundaries and human-in-the-loop interaction for AI-assisted desktop systems.',
      topics: ['Local LLM', 'Intent Routing', 'Typed Skills', 'Human-in-the-loop'],
    }
  ];
}
