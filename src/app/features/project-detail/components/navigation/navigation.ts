import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../../../core/models/project';

@Component({
  selector: 'footer[app-project-navigation]',
  imports: [RouterLink],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class ProjectNavigation {
  readonly previousProject = input.required<Project | undefined>();
  readonly nextProject = input.required<Project | undefined>();
}
