import { Component, input } from '@angular/core';
import { ProjectCryptoKdf } from '../../../../../core/models/project';
import { ProjectSectionHeading } from '../../section-heading/section-heading';

@Component({
  selector: 'section[app-crypto-kdf]',
  imports: [ProjectSectionHeading],
  templateUrl: './kdf.html',
  styleUrl: './kdf.scss',
})
export class CryptoKdf {
  readonly cryptoKdf = input.required<ProjectCryptoKdf>();
}
