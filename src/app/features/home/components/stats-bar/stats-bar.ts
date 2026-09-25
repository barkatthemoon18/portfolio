import { Component } from '@angular/core';

interface PortfolioStat {
  value: string;
  label: string;
}

@Component({
  imports: [],
  selector: 'app-stats-bar',
  styleUrl: './stats-bar.scss',
  templateUrl: './stats-bar.html',
})
export class StatsBar {
  protected readonly stats: PortfolioStat[] = [
    {
      value: '3+',
      label: 'Major Projects'
    },
    {
      value: '5+',
      label: 'Research Ares',
    },
    {
      value: '10+',
      label: 'Techonologies'
    },
    {
      value: '∞',
      label: 'Curiosity'
    }
  ];
}
