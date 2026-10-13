import { Component, input } from '@angular/core';
import { ProjectStrategy } from '../../../../../core/models/project';
import { ProjectSectionHeading } from '../../section-heading/section-heading';

@Component({
  selector: 'section[app-ares-strategy]',
  imports: [ProjectSectionHeading],
  templateUrl: './strategy.html',
  styleUrl: './strategy.scss',
})
export class AresStrategy {
  readonly strategy = input.required<ProjectStrategy>();
}
