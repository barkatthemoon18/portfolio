import { Component, computed, input } from '@angular/core';
import { PROJECTS } from '../../core/data/projects';
import { RouterLink } from '@angular/router';
import { ProjectSectionHeading } from './components/section-heading/section-heading';
import { EngineeringDecisions } from './components/engineering-decisions/engineering-decisions';
import { RaspRuntimeArchitecture } from './components/rasp/runtime-architecture/runtime-architecture';
import { CryptoLibraryArchitecture } from './components/crypto/library-architecture/library-architecture';
import { AresCommandDeck } from './components/ares/command-deck/command-deck';
import { CryptoSigner } from './components/crypto/signer/signer';
import { AresInteractionSurface } from './components/ares/interaction-surface/interaction-surface';
import { RaspIntegrity } from './components/rasp/integrity/integrity';
import { CryptoBme } from './components/crypto/bme/bme';

@Component({
  imports: [
    RouterLink,
    ProjectSectionHeading,
    EngineeringDecisions,
    RaspRuntimeArchitecture,
    CryptoLibraryArchitecture,
    AresCommandDeck,
    CryptoSigner,
    AresInteractionSurface,
    RaspIntegrity,
    CryptoBme,
  ],
  selector: 'app-project-detail',
  styleUrl: './project-detail.scss',
  templateUrl: './project-detail.html',
})
export class ProjectDetail {
  readonly slug = input.required<string>();

  protected readonly project = computed(() =>
    PROJECTS.find(project => project.slug === this.slug()));

  private readonly projectIndex = computed(() =>
    PROJECTS.findIndex(project => project.slug === this.slug()));

  protected readonly previousProject = computed(() => {
    const index = this.projectIndex();

    return index > 0 ? PROJECTS[index - 1] : undefined;
  });

  protected readonly nextProject = computed(() => {
    const index = this.projectIndex();

    return index >= 0 ? PROJECTS[index + 1] : undefined;
  });
}
