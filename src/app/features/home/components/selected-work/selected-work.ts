import { Component } from '@angular/core';
import { Project } from '../../../../core/models/project';
import { ProjectCard } from '../../../../shared/components/project-card/project-card';
import { PROJECTS } from '../../../../core/data/projects';

@Component({
  imports: [ProjectCard],
  selector: 'app-selected-work',
  styleUrl: './selected-work.scss',
  templateUrl: './selected-work.html',
})
export class SelectedWork {
  protected readonly projects: readonly Project[] = PROJECTS;
}
