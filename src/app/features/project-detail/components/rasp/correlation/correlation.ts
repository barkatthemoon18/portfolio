import { Component, input } from '@angular/core';
import { ProjectCorrelation } from '../../../../../core/models/project';
import { ProjectSectionHeading } from '../../section-heading/section-heading';

@Component({
  selector: 'section[app-rasp-correlation]',
  imports: [ProjectSectionHeading],
  templateUrl: './correlation.html',
  styleUrl: './correlation.scss',
})
export class RaspCorrelation {
  readonly correlation = input.required<ProjectCorrelation>();
}
