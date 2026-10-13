import { Component, input } from '@angular/core';
import { ProjectInteraction } from '../../../../../core/models/project';
import { ProjectSectionHeading } from '../../section-heading/section-heading';

@Component({
  selector: 'section[app-ares-interaction-surface]',
  imports: [ProjectSectionHeading],
  templateUrl: './interaction-surface.html',
  styleUrl: './interaction-surface.scss',
})
export class AresInteractionSurface {
  readonly interaction = input.required<ProjectInteraction>();
}
