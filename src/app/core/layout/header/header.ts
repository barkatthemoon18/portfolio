import { Component, HostListener, inject, signal } from '@angular/core';

import { NavigationEnd, Router, RouterLink } from '@angular/router';

import { filter } from 'rxjs';

type HomeSection = 'home' | 'selected-work' | 'research' | 'experience' | 'about' | 'contact';

@Component({
  imports: [RouterLink],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  private readonly router = inject(Router);

  private readonly sections: readonly Exclude<HomeSection, 'home'>[] = [
    'selected-work',
    'research',
    'experience',
    'about',
    'contact',
  ];

  protected readonly menuOpen = signal(false);

  protected readonly activeSection = signal<HomeSection | null>('home');

  constructor() {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => {
        /*
         * Esperamos al siguiente frame para que Angular haya
         * renderizado el contenido correspondiente al router-outlet.
         */
        requestAnimationFrame(() => {
          this.updateActiveSection();
        });
      });
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('window:scroll')
  protected handleScroll(): void {
    this.updateActiveSection();
  }

  @HostListener('window:resize')
  protected handleResize(): void {
    this.updateActiveSection();
  }

  @HostListener('document:keydown.escape')
  protected handleEscape(): void {
    this.closeMenu();
  }

  private updateActiveSection(): void {
    /*
     * En un case study (/projects/...) no queremos que ningún
     * elemento de navegación de la Home aparezca seleccionado.
     */
    const routePath = this.router.url.split('#')[0];

    if (routePath !== '/') {
      this.activeSection.set(null);
      return;
    }

    /*
     * Línea virtual ligeramente por debajo del header.
     *
     * Una sección pasa a ser activa cuando su comienzo cruza
     * esta línea.
     */
    const activationOffset = 140;

    const viewportPosition = window.scrollY + activationOffset;

    let currentSection: HomeSection = 'home';

    for (const section of this.sections) {
      const element = document.getElementById(section);

      if (!element) {
        continue;
      }

      const sectionTop = element.getBoundingClientRect().top + window.scrollY;

      if (viewportPosition >= sectionTop) {
        currentSection = section;
      } else {
        break;
      }
    }

    this.activeSection.set(currentSection);
  }
}
