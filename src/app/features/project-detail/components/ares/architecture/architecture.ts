import { Component, input } from '@angular/core';
import { ProjectArchitecture } from '../../../../../core/models/project';
import { ProjectSectionHeading } from '../../section-heading/section-heading';

@Component({
  selector: 'section[app-ares-architecture]',
  imports: [ProjectSectionHeading],
  templateUrl: './architecture.html',
  styleUrl: './architecture.scss',
})
export class AresArchitecture {
  readonly architecture = input.required<ProjectArchitecture>();
}
