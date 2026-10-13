import { Component, input } from '@angular/core';
import { ProjectCryptoSigner } from '../../../../../core/models/project';
import { ProjectSectionHeading } from '../../section-heading/section-heading';

@Component({
  selector: 'section[app-crypto-signer]',
  imports: [ProjectSectionHeading],
  templateUrl: './signer.html',
  styleUrl: './signer.scss',
})
export class CryptoSigner {
  readonly signer = input.required<ProjectCryptoSigner>();
}
