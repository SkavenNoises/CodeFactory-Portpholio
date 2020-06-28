import { Component, OnInit } from '@angular/core';
import { projectList } from '../../../assets/data/projects';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
})
export class ProjectsPageComponent implements OnInit {
  projects = projectList;

  constructor() {}

  ngOnInit(): void {}

  // Opens up a new tab with the served website on click of the desired project-card
  onClick(card: any) {
    window.open(`/assets/websites/${card.src}/index.html`);
  }
}
