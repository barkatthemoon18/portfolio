import { ProjectDetails } from '../../../../core/models/project';

type OptionalSectionKey = {
  [Key in keyof ProjectDetails]-?: undefined extends ProjectDetails[Key] ? Key : never;
}[keyof ProjectDetails];

type ProjectSectionKey = 'overview' | OptionalSectionKey;

export interface ProjectSection {
  readonly key: ProjectSectionKey;
  readonly id: string;
  readonly label: string;
}

// Keep the reading order of the existing section hosts. The mapped type checks
// that every optional ProjectDetails field has exactly one navigation entry.
export const PROJECT_SECTIONS = {
  overview: { key: 'overview', id: 'overview', label: 'Overview' },
  cryptoArchitecture: { key: 'cryptoArchitecture', id: 'library-architecture', label: 'Architecture' },
  cryptoEncryption: { key: 'cryptoEncryption', id: 'encryption', label: 'Encryption' },
  cryptoDigest: { key: 'cryptoDigest', id: 'digests', label: 'Digests' },
  cryptoKdf: { key: 'cryptoKdf', id: 'key-derivation', label: 'Key derivation' },
  cryptoSigner: { key: 'cryptoSigner', id: 'signatures', label: 'Signatures' },
  cryptoBme: { key: 'cryptoBme', id: 'bme', label: 'BME' },
  threatModel: { key: 'threatModel', id: 'threat-model', label: 'Threat model' },
  runtimeArchitecture: { key: 'runtimeArchitecture', id: 'runtime-architecture', label: 'Architecture' },
  detectionStrategy: { key: 'detectionStrategy', id: 'detection', label: 'Detection' },
  correlation: { key: 'correlation', id: 'correlation', label: 'Correlation' },
  integrity: { key: 'integrity', id: 'integrity', label: 'Integrity' },
  adversarialResearch: { key: 'adversarialResearch', id: 'adversarial-research', label: 'Research' },
  architecture: { key: 'architecture', id: 'architecture', label: 'Architecture' },
  strategy: { key: 'strategy', id: 'strategy', label: 'Strategy' },
  security: { key: 'security', id: 'security', label: 'Security' },
  evaluation: { key: 'evaluation', id: 'evaluation', label: 'Evaluation' },
  interaction: { key: 'interaction', id: 'interaction', label: 'Interaction' },
  surface: { key: 'surface', id: 'command-deck', label: 'Command deck' },
  decision: { key: 'decision', id: 'decisions', label: 'Decisions' },
} as const satisfies {
  readonly [Key in ProjectSectionKey]: ProjectSection & { readonly key: Key };
};

export function availableProjectSections(details: ProjectDetails): readonly ProjectSection[] {
  return Object.values(PROJECT_SECTIONS).filter(section => Boolean(details[section.key]));
}
