import { Project } from "../models/project";

export const PROJECTS: readonly Project[] = [
  {
    slug: 'ares',
    title: 'A.R.E.S',
    subtitle: 'Local AI Command Platform',
    description:
      'A modular local-first AI platform combining voice interaction, intent routing and system automation.',
    technologies: ['Java', 'Local LLM', 'Voice', 'Windows'],
    visual: 'ares',
    visualLabel: 'AI / SYSTEMS',
    details: {
      heading: 'Adaptive Reasoning & Execution System',
      overview: [
        'A.R.E.S. is a modular local-first AI platform designed to combine voice interaction, contextual intent routing, local language models and controlled system automation.',
        'The system separates language understanding from execution, allowing specialized models and deterministic components to cooperate without granting unrestricted control of the host operating system.',
      ],
      highlights: [
        'Local voice interaction',
        'Context-aware intent routing',
        'Local LLM orchestration',
        'Controlled operating system automation',
        'Interactive command surface',
        'Modular skill architecture',
      ],
      architecture: {
        description:
          'A.R.E.S. separates interaction, language understanding and execution into independent layers so local AI models never act as unrestricted operating-system controllers.',
        stages: [
          {
            title: 'Interaction',
            description:
              'Voice and interactive surfaces capture user requests through explicit input channels.',
            technologies: ['Voice', 'JavaFX'],
          },
          {
            title: 'Speech Processing',
            description:
              'Local speech processing converts captured audio into text before it reaches the reasoning layer.',
            technologies: ['Faster-Whisper', 'Silero VAD'],
          },
          {
            title: 'Intent & Context',
            description:
              'Deterministic rules and contextual classification determine whether an utterance represents a new request, continuation or executable intent.',
            technologies: ['Java', 'Phi-3.5'],
          },
          {
            title: 'Routing',
            description:
              'The local routing layer selects the appropriate capability without sending every request to the larger general-purpose model.',
            technologies: ['Local LLM', 'Intent Routing'],
          },
          {
            title: 'Skill Layer',
            description:
              'Typed skills expose bounded capabilities such as operating-system actions, media control and research.',
            technologies: ['OS Skills', 'Media', 'Research'],
          },
          {
            title: 'Execution',
            description:
              'Resolved operations are executed through controlled platform-specific integrations rather than arbitrary model-generated commands.',
            technologies: ['Windows', 'JNA'],
          },
        ],
      },
      strategy: {
        title: 'Runtime & model strategy',
        description:
          'A.R.E.S. separates latency-sensitive routing, general-purpose reasoning and privileged execution instead of relying on a single model for every operation.',

        items: [
          {
            label: 'Resident',
            title: 'Phi-3.5 Mini',
            description:
              'A small local model handles contextual classification and intent routing with low latency, remaining available for continuous interaction.',
            technologies: ['Intent Routing', 'Context', 'Local LLM'],
          },
          {
            label: 'On demand',
            title: 'Qwen 3.5 9B',
            description:
              'A larger general-purpose model is activated only when a request requires broader reasoning or capabilities beyond the routing layer.',
            technologies: ['Reasoning', 'Multimodal', 'GPU'],
          },
          {
            label: 'Deterministic',
            title: 'Skill Execution',
            description:
              'Operating-system capabilities remain behind typed and bounded skills so language-model output is not treated as unrestricted executable intent.',
            technologies: ['Typed Skills', 'Validation', 'Windows'],
          },
        ],
      },
      security: {
        title: 'Security & execution boundaries',
        description:
          'A.R.E.S. treats model output as untrusted input. Privileged operations must cross explicit application boundaries before reaching the host operating system.',

        controls: [
          {
            label: 'Boundary 01',
            title: 'Intent is not execution',
            description:
              'Language-model output describes an intended capability, but it is never interpreted directly as an operating-system command.',
          },
          {
            label: 'Boundary 02',
            title: 'Typed skill contracts',
            description:
              'System capabilities are exposed through explicit skill interfaces with known inputs and bounded behavior instead of arbitrary command generation.',
          },
          {
            label: 'Boundary 03',
            title: 'Resolution & validation',
            description:
              'Requests are resolved and validated against application-controlled rules before a platform-specific operation is permitted to execute.',
          },
          {
            label: 'Boundary 04',
            title: 'Platform isolation',
            description:
              'Operating-system integration remains separated from language-model reasoning so privileged implementation details stay outside the model boundary.',
          },
        ],
      },
      evaluation: {
        title: 'Measured routing behavior',
        description:
          'The routing layer was evaluated against separate development and holdout corpora, with deterministic safeguards preserved around model classification.',
        metrics: [
          {
            label: 'Development',
            value: '36 / 36',
            detail: '100% accuracy · Macro-F1 1.00',
          },
          {
            label: 'Holdout',
            value: '36 / 36',
            detail: '100% accuracy · Macro-F1 1.00',
          },
          {
            label: 'Protected routing',
            value: '22 / 22',
            detail: 'Routing cases resolved correctly',
          },
          {
            label: 'Routing latency',
            value: '~0.86 s',
            detail: 'Median utterance classification',
          },
        ],
        notes: [
          'Evaluation uses separate development and holdout corpora.',
          'The resident router uses Phi-3.5 Mini with deterministic preprocessing and output constraints.',
          'Latency measurements represent local inference rather than remote API execution.',
        ],
      },
      interaction: {
        title: 'Typed human-in-the-loop interaction',
        description:
          'The application core requests user interaction through an asynchronous typed contract while the JavaFX surface remains responsible only for presentation and input collection.',
        modalities: ['Touch', 'Voice'],
        types: [
          {
            label: 'Choice',
            title: 'ChoiceRequest',
            result: 'String optionId',
            description:
              'Presents a bounded set of options and returns the stable identifier of the selected value.',
          },
          {
            label: 'Confirmation',
            title: 'ConfirmationRequest',
            result: 'Boolean',
            description:
              'Requests an explicit affirmative or negative decision before a workflow continues.',
          },
          {
            label: 'Free text',
            title: 'TextInputRequest',
            result: 'String',
            description:
              'Collects user-provided text when a bounded choice or confirmation is not sufficient.',
          },
        ],
      },
    },
  },
  {
    slug: 'android-rasp',
    title: 'Android RASP',
    subtitle: 'Runtime Application Self Protection & Mobile Security',
    description:
      'Runtime security research focused on instrumentation, root environments, tampering and application integrity.',
    technologies: ['C/C++', 'Android NDK', 'Android SDK', 'JNI'],
    visual: 'rasp',
    visualLabel: 'MOBILE / SECURITY',
    details: {
      heading: 'Runtime Application Self-Protection Research',
      overview: [
        'An Android security research project focused on runtime protection mechanisms against instrumentation, rooted environments, tampering and application modification.',
        'The project combines Android framework-level techniques with native NDK components to evaluate runtime threats and implement defensive controls close to the application process.',
      ],
      highlights: [
        'Root environment detection',
        'Runtime instrumentation detection',
        'Anti-debugging controls',
        'APK integrity validation',
        'Native Android NDK protections',
        'Runtime threat research',
      ],
    },
  },
  {
    slug: 'crypto-library',
    title: 'Crypto Library',
    subtitle: 'Cross-platform Cryptography',
    description:
      'A cryptographic abstraction layer designed for interoperable implementations across multiple platforms.',
    technologies: ['TypeScript', 'Java', 'BouncyCastle', 'WebCrypto', 'Node Forge'],
    visual: 'crypto',
    visualLabel: 'APPLIED CRYPTOGRAPHY',
    details: {
      heading: 'Cross-platform Cryptographic Abstraction',
      overview: [
        'A cryptographic abstraction layer designed to provide interoperable cryptographic operations across browser, Java and other runtime environments.',
        'The project focuses on maintaining compatible data formats and cryptographic behavior while hiding implementation differences between the underlying platform APIs.',
      ],
      highlights: [
        'Cross-platform encryption',
        'Digital signatures',
        'Key derivation',
        'RSA and elliptic-curve cryptography',
        'WebCrypto interoperability',
        'Bouncy Castle interoperability',
      ],
    },
  },
];
