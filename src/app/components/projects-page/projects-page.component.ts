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
}
