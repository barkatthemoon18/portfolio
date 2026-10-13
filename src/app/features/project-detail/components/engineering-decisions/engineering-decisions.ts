import { Component, input } from '@angular/core';
import { ProjectDecisions } from '../../../../core/models/project';
import { ProjectSectionHeading } from '../section-heading/section-heading';

@Component({
  selector: 'section[app-engineering-decisions]',
  imports: [ProjectSectionHeading],
  templateUrl: './engineering-decisions.html',
  styleUrl: './engineering-decisions.scss',
})
export class EngineeringDecisions {
  readonly decisions = input.required<ProjectDecisions>();
}
