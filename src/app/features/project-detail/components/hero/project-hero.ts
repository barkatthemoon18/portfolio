import { Component, input } from '@angular/core';
import { Project } from '../../../../core/models/project';

@Component({
  selector: 'header[app-project-hero]',
  templateUrl: './project-hero.html',
  styleUrl: './project-hero.scss',
})
export class ProjectHero {
  readonly project = input.required<Project>();
}
