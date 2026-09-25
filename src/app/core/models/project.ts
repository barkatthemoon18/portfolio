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