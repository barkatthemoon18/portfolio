import { ViewportScroller } from '@angular/common';
import { afterRenderEffect, Component, ElementRef, inject, input, output, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProjectSection } from './project-sections';

@Component({
  selector: 'app-section-navigation',
  imports: [RouterLink],
  templateUrl: './section-navigation.html',
  styleUrl: './section-navigation.scss',
})
export class SectionNavigation {
  readonly sections = input.required<readonly ProjectSection[]>();
  readonly offsetChange = output<number>();

  protected readonly activeId = signal('overview');

  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly scroller = inject(ViewportScroller);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  constructor() {
    afterRenderEffect(onCleanup => {
      const sections = this.sections();
      const host = this.element.nativeElement;
      const targets = sections
        .map(section => host.ownerDocument.getElementById(section.id))
        .filter((target): target is HTMLElement => target !== null);
      const header = host.ownerDocument.querySelector<HTMLElement>('.header');
      const headerHost = header?.parentElement;
      let observer: IntersectionObserver | undefined;
      let offset = 0;
      let viewportHeight = 0;
      let scrollFrame = 0;

      const updateActive = () => {
        let active = targets[0];
        for (const target of targets) {
          if (target.getBoundingClientRect().top > offset + 1) break;
          active = target;
        }
        if (active) this.activeId.set(active.id);

        // Reveal the active link horizontally without changing page scroll.
        const link = active ? host.querySelector<HTMLElement>(`a[href$="#${active.id}"]`) : null;
        const list = link?.closest('ul');
        if (link && list) {
          const linkRect = link.getBoundingClientRect();
          const listRect = list.getBoundingClientRect();
          if (linkRect.left < listRect.left || linkRect.right > listRect.right) {
            list.scrollTo({ left: list.scrollLeft + linkRect.left - listRect.left, behavior: 'instant' });
          }
        }
      };

      // An observer alone misses jumps from one section gap to another when
      // neither destination intersects the reading line. Coalesce scroll reads.
      const onScroll = () => {
        if (scrollFrame) return;
        scrollFrame = requestAnimationFrame(() => {
          scrollFrame = 0;
          updateActive();
        });
      };

      const measure = () => {
        // Also supports the current Header, whose inner sticky element is
        // constrained by its host, without changing the global layout.
        const headerCanCoverContent = header && headerHost && (
          getComputedStyle(header).position === 'fixed' ||
          ['sticky', 'fixed'].includes(getComputedStyle(headerHost).position) ||
          headerHost.getBoundingClientRect().bottom >= (targets[0]?.getBoundingClientRect().top ?? Infinity)
        );
        const headerHeight = headerCanCoverContent
          ? Math.max(0, Math.min(header.getBoundingClientRect().bottom, header.offsetHeight))
          : 0;
        host.style.setProperty('--section-navigation-top', `${headerHeight}px`);
        const nextOffset = headerHeight + host.getBoundingClientRect().height + 16;
        if (nextOffset === offset && viewportHeight === window.innerHeight && observer) {
          updateActive();
          return;
        }
        offset = nextOffset;
        viewportHeight = window.innerHeight;
        this.offsetChange.emit(offset);
        observer?.disconnect();
        // A thin reading line handles tall diagrams and gaps between sections.
        observer = new IntersectionObserver(updateActive, {
          rootMargin: `-${offset}px 0px -${Math.max(0, window.innerHeight - offset - 1)}px 0px`,
          threshold: 0,
        });
        targets.forEach(target => observer?.observe(target));
        updateActive();
      };

      this.scroller.setOffset(() => [0, offset]);
      const resizeObserver = new ResizeObserver(measure);
      resizeObserver.observe(host);
      const headerObserver = new IntersectionObserver(measure, { threshold: [0, 1] });
      if (header) headerObserver.observe(header);
      window.addEventListener('resize', measure);
      window.addEventListener('scroll', onScroll, { passive: true });
      measure();

      onCleanup(() => {
        observer?.disconnect();
        resizeObserver.disconnect();
        headerObserver.disconnect();
        window.removeEventListener('resize', measure);
        window.removeEventListener('scroll', onScroll);
        cancelAnimationFrame(scrollFrame);
        this.scroller.setOffset([0, 0]);
      });
    });
  }

  protected selectSection(event: Event): void {
    const id = (event.target as HTMLSelectElement).value;
    void this.router.navigate([], { relativeTo: this.route, fragment: id });
  }
}
