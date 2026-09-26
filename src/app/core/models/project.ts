export type ProjectVisual = | 'ares' | 'rasp' | 'crypto';

export interface Project {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    technologies: readonly string[];
    visual: ProjectVisual;
    visualLabel: string;
    details: ProjectDetails;
}

export interface ProjectDetails {
    heading: string;
    overview: readonly string[];
    highlights: readonly string[];
    architecture?: ProjectArchitecture;
    strategy?: ProjectStrategy;
    security?: ProjectSecurity;
    evaluation?: ProjectEvaluation;
    interaction?: ProjectInteraction;
    surface?: ProjectSurface;
    decision?: ProjectDecisions;
}

export interface ProjectArchitectureStage {
    title: string;
    description: string;
    technologies?: readonly string[];
}

export interface ProjectArchitecture {
    description: string;
    stages: readonly ProjectArchitectureStage[];
}

export interface ProjectStrategy {
    title: string;
    description: string;
    items: readonly ProjectStrategyItem[];
}

export interface ProjectStrategyItem {
    label: string;
    title: string;
    description: string;
    technologies?: readonly string[];
}

export interface ProjectSecurity {
    title: string;
    description: string;
    controls: readonly ProjectSecurityControl[];
}

export interface ProjectSecurityControl {
    label: string;
    title: string;
    description: string;
}

export interface ProjectEvaluation {
  title: string;
  description: string;
  metrics: readonly ProjectEvaluationMetric[];
  notes?: readonly string[];
}

export interface ProjectEvaluationMetric {
  label: string;
  value: string;
  detail: string;
}

export interface ProjectInteraction {
  title: string;
  description: string;
  modalities: readonly string[];
  types: readonly ProjectInteractionType[];
}

export interface ProjectInteractionType {
  label: string;
  title: string;
  result: string;
  description: string;
}

export interface ProjectSurface {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  features: readonly ProjectSurfaceFeature[];
}

export interface ProjectSurfaceFeature {
  label: string;
  title: string;
  description: string;
}

export interface ProjectDecisions {
  title: string;
  description: string;
  items: readonly ProjectDecision[];
}

export interface ProjectDecision {
  decision: string;
  rationale: string;
  tradeoff: string;
}
