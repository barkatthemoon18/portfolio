import { Component, input } from '@angular/core';
import { ProjectCryptoBme } from '../../../../../core/models/project';
import { ProjectSectionHeading } from '../../section-heading/section-heading';

@Component({
  selector: 'section[app-crypto-bme]',
  imports: [ProjectSectionHeading],
  templateUrl: './bme.html',
  styleUrl: './bme.scss',
})
export class CryptoBme {
  readonly bme = input.required<ProjectCryptoBme>();
}
