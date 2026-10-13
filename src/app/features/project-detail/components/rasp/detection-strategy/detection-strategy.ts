import { Component, input } from '@angular/core';
import { ProjectDetectionStrategy } from '../../../../../core/models/project';
import { ProjectSectionHeading } from '../../section-heading/section-heading';

@Component({
  selector: 'section[app-rasp-detection-strategy]',
  imports: [ProjectSectionHeading],
  templateUrl: './detection-strategy.html',
  styleUrl: './detection-strategy.scss',
})
export class RaspDetectionStrategy {
  readonly detectionStrategy = input.required<ProjectDetectionStrategy>();
}
