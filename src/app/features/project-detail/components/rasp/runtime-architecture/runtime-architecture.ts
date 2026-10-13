import { Component, input } from '@angular/core';
import { ProjectRuntimeArchitecture } from '../../../../../core/models/project';
import { ProjectSectionHeading } from '../../section-heading/section-heading';

@Component({
  selector: 'section[app-rasp-runtime-architecture]',
  imports: [ProjectSectionHeading],
  templateUrl: './runtime-architecture.html',
  styleUrl: './runtime-architecture.scss',
})
export class RaspRuntimeArchitecture {
  readonly architecture = input.required<ProjectRuntimeArchitecture>();
}
