import { Component, computed, input } from '@angular/core';
import { PROJECTS } from '../../core/data/projects';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-project-detail',
  styleUrl: './project-detail.scss',
  templateUrl: './project-detail.html',
})
export class ProjectDetail {
  readonly slug = input.required<string>();

  protected readonly project = computed(() =>
    PROJECTS.find(project => project.slug === this.slug()));

  private readonly projectIndex = computed(() =>
    PROJECTS.findIndex(project => project.slug === this.slug()));

  protected readonly previousProject = computed(() => {
    const index = this.projectIndex();

    return index > 0 ? PROJECTS[index - 1] : undefined;
  });

  protected readonly nextProject = computed(() => {
    const index = this.projectIndex();

    return index >= 0 ? PROJECTS[index + 1] : undefined;
  });
}
