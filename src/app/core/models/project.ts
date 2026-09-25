export type ProjectVisual = | 'ares' | 'rasp' | 'crypto';

export interface Project {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    technologies: readonly string[];
    visual: ProjectVisual;
    visualLabel: string;
}