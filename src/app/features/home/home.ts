import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { StatsBar } from './components/stats-bar/stats-bar';
import { SelectedWork } from './components/selected-work/selected-work';
import { Research } from './components/research/research';

@Component({
  imports: [Hero, StatsBar, SelectedWork, Research],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {}
