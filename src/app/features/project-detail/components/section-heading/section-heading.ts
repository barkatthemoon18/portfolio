import { Component, input } from '@angular/core';

@Component({
  selector: 'header[app-project-section-heading]',
  templateUrl: './section-heading.html',
  styleUrl: './section-heading.scss',
})
export class ProjectSectionHeading {
  readonly label = input.required<string>();
  readonly title = input.required<string>();
  readonly description = input.required<string>();
}
