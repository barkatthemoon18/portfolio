import { Component, computed, input, signal } from '@angular/core';
import { PROJECTS } from '../../core/data/projects';
import { AresArchitecture } from './components/ares/architecture/architecture';
import { AresCommandDeck } from './components/ares/command-deck/command-deck';
import { AresEvaluation } from './components/ares/evaluation/evaluation';
import { AresInteractionSurface } from './components/ares/interaction-surface/interaction-surface';
import { AresSecurity } from './components/ares/security/security';
import { AresStrategy } from './components/ares/strategy/strategy';
import { CryptoBme } from './components/crypto/bme/bme';
import { CryptoDigest } from './components/crypto/digest/digest';
import { CryptoEncryption } from './components/crypto/encryption/encryption';
import { CryptoKdf } from './components/crypto/kdf/kdf';
import { CryptoLibraryArchitecture } from './components/crypto/library-architecture/library-architecture';
import { CryptoSigner } from './components/crypto/signer/signer';
import { EngineeringDecisions } from './components/engineering-decisions/engineering-decisions';
import { ProjectHero } from './components/hero/project-hero';
import { ProjectNavigation } from './components/navigation/navigation';
import { RaspAdversarialResearch } from './components/rasp/adversarial-research/adversarial-research';
import { RaspCorrelation } from './components/rasp/correlation/correlation';
import { RaspDetectionStrategy } from './components/rasp/detection-strategy/detection-strategy';
import { RaspIntegrity } from './components/rasp/integrity/integrity';
import { RaspRuntimeArchitecture } from './components/rasp/runtime-architecture/runtime-architecture';
import { RaspThreatModel } from './components/rasp/threat-model/threat-model';
import { availableProjectSections, PROJECT_SECTIONS } from './components/section-navigation/project-sections';
import { SectionNavigation } from './components/section-navigation/section-navigation';

@Component({
  imports: [
    ProjectHero,
    SectionNavigation,
    CryptoLibraryArchitecture,
    CryptoEncryption,
    CryptoDigest,
    CryptoKdf,
    CryptoSigner,
    CryptoBme,
    RaspThreatModel,
    RaspRuntimeArchitecture,
    RaspDetectionStrategy,
    RaspCorrelation,
    RaspIntegrity,
    RaspAdversarialResearch,
    AresArchitecture,
    AresStrategy,
    AresSecurity,
    AresEvaluation,
    AresInteractionSurface,
    AresCommandDeck,
    EngineeringDecisions,
    ProjectNavigation,
  ],
  selector: 'app-project-detail',
  styleUrl: './project-detail.scss',
  templateUrl: './project-detail.html',
})
export class ProjectDetail {
  readonly slug = input.required<string>();

  protected readonly project = computed(() =>
    PROJECTS.find(project => project.slug === this.slug()));

  protected readonly sectionRegistry = PROJECT_SECTIONS;
  protected readonly sectionOffset = signal<number | null>(null);
  protected readonly sections = computed(() => {
    const project = this.project();
    return project ? availableProjectSections(project.details) : [];
  });

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
