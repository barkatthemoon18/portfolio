import { Component, input } from '@angular/core';
import { ProjectIntegrity } from '../../../../../core/models/project';
import { ProjectSectionHeading } from '../../section-heading/section-heading';

@Component({
  selector: 'section[app-rasp-integrity]',
  imports: [ProjectSectionHeading],
  templateUrl: './integrity.html',
  styleUrl: './integrity.scss',
})
export class RaspIntegrity {
  readonly integrity = input.required<ProjectIntegrity>();
}
