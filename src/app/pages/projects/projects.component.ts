import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ProjectService } from '../../service/project.service';
import { Project } from '../../models/projects.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: [],
})
export class ProjectsComponent implements OnInit {
  public projects: Project[] = [];

  constructor(
    private _projectService: ProjectService,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.getProjects();
  }

  public getProjects() {
    this._projectService.loadProjects().subscribe(({ projects }) => {
      this.projects = projects;
    });
  }

  public back(): void {
    this._location.back();
  }
}
