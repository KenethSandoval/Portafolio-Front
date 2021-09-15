import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/interfaces/interfaces';
import { ProjectService } from '../../service/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: [],
})
export class ProjectsComponent implements OnInit {
  public projects: IProject[] = [];

  constructor(private _projectService: ProjectService) {}

  ngOnInit(): void {
    this._getProjects();
  }

  private _getProjects() {
    this._projectService.loadProjects().subscribe((res) => {
      this.projects = res.data;
      console.log(this.projects);
    });
  }
}
