import { Component, input } from '@angular/core';
import { ProjectSurface } from '../../../../../core/models/project';
import { ProjectSectionHeading } from '../../section-heading/section-heading';

@Component({
  selector: 'section[app-ares-command-deck]',
  imports: [ProjectSectionHeading],
  templateUrl: './command-deck.html',
  styleUrl: './command-deck.scss',
})
export class AresCommandDeck {
  readonly surface = input.required<ProjectSurface>();
}
