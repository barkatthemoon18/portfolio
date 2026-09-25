import { Component, input } from '@angular/core';
import { Project } from '../../../core/models/project';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-project-card',
  styleUrl: './project-card.scss',
  templateUrl: './project-card.html',
})
export class ProjectCard {
  readonly project = input.required<Project>();
}
