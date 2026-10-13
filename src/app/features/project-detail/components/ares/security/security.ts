import { Component, input } from '@angular/core';
import { ProjectSecurity } from '../../../../../core/models/project';
import { ProjectSectionHeading } from '../../section-heading/section-heading';

@Component({
  selector: 'section[app-ares-security]',
  imports: [ProjectSectionHeading],
  templateUrl: './security.html',
  styleUrl: './security.scss',
})
export class AresSecurity {
  readonly security = input.required<ProjectSecurity>();
}
