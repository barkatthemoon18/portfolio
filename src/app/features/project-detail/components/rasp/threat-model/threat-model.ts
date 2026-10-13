import { Component, input } from '@angular/core';
import { ProjectThreatModel } from '../../../../../core/models/project';
import { ProjectSectionHeading } from '../../section-heading/section-heading';

@Component({
  selector: 'section[app-rasp-threat-model]',
  imports: [ProjectSectionHeading],
  templateUrl: './threat-model.html',
  styleUrl: './threat-model.scss',
})
export class RaspThreatModel {
  readonly threatModel = input.required<ProjectThreatModel>();
}
