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
    threatModel?: ProjectThreatModel;
    runtimeArchitecture?: ProjectRuntimeArchitecture;
    detectionStrategy?: ProjectDetectionStrategy;
    correlation?: ProjectCorrelation;
    integrity?: ProjectIntegrity;
    adversarialResearch?: ProjectAdversarialResearch;
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

export interface ProjectThreatModel {
  title: string;
  description: string;
  threats: readonly ProjectThreat[];
}

export interface ProjectThreat {
  category: string;
  title: string;
  description: string;
  indicators: readonly string[];
}

export interface ProjectRuntimeArchitecture {
  title: string;
  description: string;
  application: ProjectRuntimeArchitectureNode;
  branches: readonly ProjectRuntimeArchitectureNode[];
  nativeLayer: ProjectRuntimeArchitectureNode;
  modules: readonly string[];
}

export interface ProjectRuntimeArchitectureNode {
  label: string;
  title: string;
  description: string;
  technologies: readonly string[];
}

export interface ProjectDetectionStrategy {
  title: string;
  description: string;
  surfaces: readonly ProjectDetectionSurface[];
}

export interface ProjectDetectionSurface {
  source: string;
  title: string;
  description: string;
  signals: readonly string[];
}

export interface ProjectCorrelation {
  title: string;
  description: string;
  stages: readonly ProjectCorrelationStage[];
  outcomes: readonly ProjectCorrelationOutcome[];
}

export interface ProjectCorrelationStage {
  label: string;
  title: string;
  description: string;
}

export interface ProjectCorrelationOutcome {
  state: string;
  description: string;
}

export interface ProjectIntegrity {
  title: string;
  description: string;
  checks: readonly ProjectIntegrityCheck[];
  result: ProjectIntegrityResult;
}

export interface ProjectIntegrityCheck {
  label: string;
  title: string;
  description: string;
  signals: readonly string[];
}

export interface ProjectIntegrityResult {
  expected: string;
  mismatch: string;
}

export interface ProjectAdversarialResearch {
  title: string;
  description: string;
  environments: readonly ProjectAdversarialEnvironment[];
  objective: string;
}

export interface ProjectAdversarialEnvironment {
  category: string;
  title: string;
  description: string;
  technologies: readonly string[];
}
