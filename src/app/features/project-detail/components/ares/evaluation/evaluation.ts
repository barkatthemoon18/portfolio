import { Component, input } from '@angular/core';
import { ProjectEvaluation } from '../../../../../core/models/project';
import { ProjectSectionHeading } from '../../section-heading/section-heading';

@Component({
  selector: 'section[app-ares-evaluation]',
  imports: [ProjectSectionHeading],
  templateUrl: './evaluation.html',
  styleUrl: './evaluation.scss',
})
export class AresEvaluation {
  readonly evaluation = input.required<ProjectEvaluation>();
}
