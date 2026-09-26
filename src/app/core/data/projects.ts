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
      surface: {
        title: 'Operational command surface',
        description:
          'The Command Deck provides a persistent visual layer for runtime state, interaction feedback and capability-specific information without coupling presentation logic to the application core.',
        features: [
          {
            label: 'Telemetry',
            title: 'Visual runtime state',
            description:
              'Runtime and infrastructure state can be surfaced independently from conversational output, keeping operational feedback continuously visible.',
          },
          {
            label: 'Workspace',
            title: 'Capability-oriented panels',
            description:
              'Research, media, files and system capabilities can expose dedicated visual modules rather than forcing every result through a conversational interface.',
          },
          {
            label: 'Presentation',
            title: 'Decoupled UI layer',
            description:
              'The visual surface consumes application state and typed interaction contracts while remaining independent from reasoning and execution logic.',
          },
        ],
      },
      decision: {
        title: 'Engineering decisions',
        description:
          'A.R.E.S. is shaped by a set of deliberate architectural trade-offs around latency, resource usage, security and maintainability.',
        items: [
          {
            decision: 'Local-first execution',
            rationale:
              'Speech processing, routing and core interaction remain local to reduce dependency on external services and keep latency-sensitive workflows immediately available.',
            tradeoff:
              'Local inference requires explicit resource management and tighter model selection.',
          },
          {
            decision: 'Small resident model',
            rationale:
              'Phi-3.5 Mini remains available for routing and contextual classification while larger models are loaded only when broader reasoning is required.',
            tradeoff:
              'The routing layer must reliably determine when escalation to a larger model is necessary.',
          },
          {
            decision: 'Bounded system capabilities',
            rationale:
              'Operating-system actions are exposed through typed skills rather than unrestricted model-generated commands.',
            tradeoff:
              'Adding new capabilities requires explicit contracts and platform-specific implementation.',
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
      threatModel: {
        title: 'Runtime adversary model',
        description:
          'The protection layer assumes that the application may execute on a hostile Android environment where the operating system, runtime or application package can be modified or instrumented.',
        threats: [
          {
            category: 'Environment',
            title: 'Rooted runtime',
            description:
              'Privileged environments can modify application behavior, bypass platform assumptions and hide system-level changes from user-space checks.',
            indicators: ['Magisk / Zygisk', 'KernelSU', 'Modified mounts', 'Root artifacts'],
          },
          {
            category: 'Instrumentation',
            title: 'Dynamic instrumentation',
            description:
              'Runtime instrumentation frameworks can inspect memory, hook functions and alter Java or native execution without modifying the original application logic.',
            indicators: ['Frida', 'Injected libraries', 'Runtime hooks', 'Suspicious threads'],
          },
          {
            category: 'Debugging',
            title: 'Runtime tracing',
            description:
              'Debuggers and tracing mechanisms can suspend execution, inspect state and manipulate control flow during sensitive operations.',
            indicators: ['TracerPid', 'JDWP', 'ptrace', 'Breakpoint activity'],
          },
          {
            category: 'Integrity',
            title: 'Application tampering',
            description:
              'Repackaging or binary modification can alter Java, native or resource content while preserving the apparent behavior of the original application.',
            indicators: [
              'APK modification',
              'Re-signing',
              'Library replacement',
              'Integrity mismatch',
            ],
          },
        ],
      },
      runtimeArchitecture: {
        title: 'Layered runtime protection',
        description:
          'The protection architecture combines Android framework components, process isolation and native NDK code so security signals can be collected across different execution boundaries.',
        application: {
          label: 'Application',
          title: 'Android runtime layer',
          description:
            'The application coordinates protection checks and consumes security results without concentrating every detection mechanism in the managed runtime.',
          technologies: ['Android SDK', 'Java'],
        },
        branches: [
          {
            label: 'Isolation boundary',
            title: 'Isolated security service',
            description:
              'Selected checks can execute through an isolated process and communicate with the application through an explicit Binder contract.',
            technologies: ['AIDL', 'Binder'],
          },
          {
            label: 'Native boundary',
            title: 'JNI bridge',
            description:
              'Managed application code crosses a controlled JNI boundary to invoke native runtime protections implemented outside the Java layer.',
            technologies: ['JNI', 'Android NDK'],
          },
        ],
        nativeLayer: {
          label: 'Native runtime',
          title: 'libfuadxshell.so',
          description:
            'Native C/C++ code performs low-level runtime inspection closer to the process and operating-system interfaces used by instrumentation and debugging tools.',
          technologies: ['C/C++', 'NDK'],
        },
        modules: ['AntiRoot', 'AntiFrida', 'AntiDebug', 'ApkIntegrity', 'SSLPinning'],
      },
      detectionStrategy: {
        title: 'Runtime signal collection',
        description:
          'Detection combines independent runtime signals instead of relying on a single artifact. Each surface contributes evidence about modifications, instrumentation or debugging activity around the application process.',
        surfaces: [
          {
            source: 'Filesystem / mounts',
            title: 'Environment inspection',
            description:
              'Mount and filesystem state is inspected for artifacts associated with modified or privileged Android environments.',
            signals: ['/proc/self/mountinfo', 'magisk', '/.magisk/pts', 'suspicious mounts'],
          },
          {
            source: 'Process memory',
            title: 'Loaded code inspection',
            description:
              'Process mappings are inspected for injected or framework-specific native components that should not normally be present in the application process.',
            signals: ['/proc/self/maps', 'libzygisk', 'memfd:frida', 'injected .so'],
          },
          {
            source: 'Runtime activity',
            title: 'Instrumentation indicators',
            description:
              'Runtime threads and communication surfaces provide additional evidence of active dynamic instrumentation.',
            signals: ['gmain', 'gum-js-loop', '27042', '27043'],
          },
          {
            source: 'Debugger state',
            title: 'Tracing & attachment',
            description:
              'Process and thread state is inspected for evidence that execution is currently being traced, suspended or exposed through debugging facilities.',
            signals: ['TracerPid', 'ptrace_stop', 'wchan', 'JDWP'],
          },
        ],
      },
      correlation: {
        title: 'Evidence-driven runtime decisions',
        description:
          'Runtime protection avoids treating every individual artifact as a definitive compromise. Independent signals can be combined with contextual checks before the application reaches a defensive decision.',
        stages: [
          {
            label: '01 / Observe',
            title: 'Collect independent signals',
            description:
              'Filesystem, process memory, runtime activity and debugger state are inspected independently so one detection mechanism does not become the sole source of truth.',
          },
          {
            label: '02 / Correlate',
            title: 'Combine runtime evidence',
            description:
              'Signals from different surfaces can reinforce each other and provide stronger evidence than isolated indicators evaluated without context.',
          },
          {
            label: '03 / Decide',
            title: 'Apply defensive policy',
            description:
              'The resulting evidence is translated into an application-controlled decision rather than allowing an individual low-confidence artifact to dictate behavior.',
          },
        ],
        outcomes: [
          {
            state: 'Trusted',
            description: 'No meaningful runtime evidence was observed.',
          },
          {
            state: 'Suspicious',
            description: 'One or more signals require additional validation or correlation.',
          },
          {
            state: 'Hostile',
            description:
              'Correlated evidence indicates that runtime assumptions can no longer be trusted.',
          },
        ],
      },
      integrity: {
        title: 'Application identity validation',
        description:
          'Runtime environment checks are complemented by validation of the installed application itself. Signing identity and package integrity provide evidence that the executable artifact still matches the expected application state.',
        checks: [
          {
            label: 'Signing identity',
            title: 'Signer verification',
            description:
              'The application signing identity can be validated against the expected signer so repackaging or unauthorized re-signing does not preserve trust.',
            signals: ['Signing certificate', 'Certificate fingerprint', 'V1 / V2 / V3'],
          },
          {
            label: 'Package state',
            title: 'Artifact integrity',
            description:
              'Application package and native components can be checked for unexpected modifications introduced through patching, replacement or repackaging.',
            signals: ['APK integrity', 'Native libraries', 'Package metadata'],
          },
        ],
        result: {
          expected:
            'Signing identity and package state remain consistent with the expected application.',
          mismatch:
            'Unexpected signing or artifact changes indicate that application integrity can no longer be assumed.',
        },
      },
      adversarialResearch: {
        title: 'Hostile runtime validation',
        description:
          'Protection mechanisms are evaluated against representative Android modification and instrumentation environments to understand how runtime assumptions fail under active adversarial control.',
        environments: [
          {
            category: 'Root ecosystem',
            title: 'Privileged Android environments',
            description:
              'Root frameworks are used to evaluate whether protections remain effective when the operating environment can modify mounts, process state and system behavior.',
            technologies: ['Magisk', 'Zygisk', 'KernelSU'],
          },
          {
            category: 'Instrumentation',
            title: 'Dynamic runtime analysis',
            description:
              'Instrumentation environments are used to evaluate detection of injected code, suspicious runtime artifacts and process-level inspection.',
            technologies: ['Frida', 'Frida Server', 'Frida Gadget'],
          },
          {
            category: 'Hooking',
            title: 'Framework-level modification',
            description:
              'Hooking frameworks are considered when evaluating whether application behavior or Android framework interactions can be altered at runtime.',
            technologies: ['Xposed', 'LSPosed', 'Runtime hooks'],
          },
          {
            category: 'Debugging',
            title: 'Execution inspection',
            description:
              'Debugger and tracing scenarios are used to evaluate protections against execution suspension, process tracing and runtime state inspection.',
            technologies: ['JDWP', 'ptrace', 'Native debugging'],
          },
        ],
        objective:
          'The research focuses on resilient multi-signal detection rather than depending on a single tool name, filesystem artifact or implementation-specific indicator.',
      },
      decision: {
        title: 'Engineering decisions',
        description:
          'The RASP architecture is shaped by trade-offs between detection coverage, runtime cost, false-positive resistance and the ability to remain effective across evolving Android modification frameworks.',
        items: [
          {
            decision: 'Multi-signal detection',
            rationale:
              'Runtime trust is derived from multiple independent sources such as mounts, process mappings, runtime activity and debugger state rather than from a single artifact.',
            tradeoff:
              'Correlation increases implementation complexity and requires clear handling of partial or conflicting evidence.',
          },
          {
            decision: 'Managed and native separation',
            rationale:
              'Android framework APIs are combined with native NDK inspection so protections are not concentrated exclusively in the Java runtime or in native code.',
            tradeoff:
              'Crossing Java and native boundaries increases implementation and maintenance complexity.',
          },
          {
            decision: 'Isolated security boundary',
            rationale:
              'Selected protection checks can execute through an isolated service and communicate through explicit Binder contracts, reducing direct coupling with the main application process.',
            tradeoff:
              'Process isolation introduces lifecycle, IPC and synchronization concerns that must be handled explicitly.',
          },
          {
            decision: 'Behavior over signatures',
            rationale:
              'Detection favors runtime behavior and environmental evidence over relying exclusively on tool names or framework-specific filesystem artifacts.',
            tradeoff:
              'More generic indicators require careful validation to avoid classifying legitimate platform behavior as hostile.',
          },
        ],
      },
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
