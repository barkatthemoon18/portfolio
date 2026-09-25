import { Component, computed, input } from '@angular/core';
import { PROJECTS } from '../../core/data/projects';

@Component({
  imports: [],
  selector: 'app-project-detail',
  styleUrl: './project-detail.scss',
  templateUrl: './project-detail.html',
})
export class ProjectDetail {
  readonly slug = input.required<string>();

  protected readonly project = computed(() =>
    PROJECTS.find(project => project.slug === this.slug()));
}
