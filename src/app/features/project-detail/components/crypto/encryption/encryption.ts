import { Component, input } from '@angular/core';
import { ProjectCryptoEncryption } from '../../../../../core/models/project';
import { ProjectSectionHeading } from '../../section-heading/section-heading';

@Component({
  selector: 'section[app-crypto-encryption]',
  imports: [ProjectSectionHeading],
  templateUrl: './encryption.html',
  styleUrl: './encryption.scss',
})
export class CryptoEncryption {
  readonly cryptoEncryption = input.required<ProjectCryptoEncryption>();
}
