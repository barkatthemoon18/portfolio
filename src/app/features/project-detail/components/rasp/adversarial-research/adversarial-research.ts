import { Component, input } from '@angular/core';
import { ProjectAdversarialResearch } from '../../../../../core/models/project';
import { ProjectSectionHeading } from '../../section-heading/section-heading';

@Component({
  selector: 'section[app-rasp-adversarial-research]',
  imports: [ProjectSectionHeading],
  templateUrl: './adversarial-research.html',
  styleUrl: './adversarial-research.scss',
})
export class RaspAdversarialResearch {
  readonly adversarialResearch = input.required<ProjectAdversarialResearch>();
}
