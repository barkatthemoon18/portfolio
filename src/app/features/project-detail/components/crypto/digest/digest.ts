import { Component, input } from '@angular/core';
import { ProjectCryptoDigest } from '../../../../../core/models/project';
import { ProjectSectionHeading } from '../../section-heading/section-heading';

@Component({
  selector: 'section[app-crypto-digest]',
  imports: [ProjectSectionHeading],
  templateUrl: './digest.html',
  styleUrl: './digest.scss',
})
export class CryptoDigest {
  readonly cryptoDigest = input.required<ProjectCryptoDigest>();
}
