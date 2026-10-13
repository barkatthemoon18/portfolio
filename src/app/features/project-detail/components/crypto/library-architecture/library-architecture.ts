import { Component, input } from '@angular/core';
import { ProjectCryptoArchitecture } from '../../../../../core/models/project';
import { ProjectSectionHeading } from '../../section-heading/section-heading';

@Component({
  selector: 'section[app-crypto-library-architecture]',
  imports: [ProjectSectionHeading],
  templateUrl: './library-architecture.html',
  styleUrl: './library-architecture.scss',
})
export class CryptoLibraryArchitecture {
  readonly architecture = input.required<ProjectCryptoArchitecture>();
}
