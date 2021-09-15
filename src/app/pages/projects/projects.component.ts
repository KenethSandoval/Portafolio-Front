import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { IProject } from '../../interfaces/interfaces';
import { ProjectService } from '../../service/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: [],
})
export class ProjectsComponent implements OnInit {
  public projects: IProject[] = [];

  constructor(
    private _projectService: ProjectService,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.getProjects();
  }

  public getProjects() {
    this._projectService.loadProjects().subscribe((res) => {
      this.projects = res.data;
    });
  }

  public back(): void {
    this._location.back();
  }
}
