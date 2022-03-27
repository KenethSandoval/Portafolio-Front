import { Component, OnInit } from '@angular/core';
import { Project } from '../../../models/projects.model';
import { ProjectService } from '../../../service/project.service';

@Component({
  selector: 'app-jtxs',
  templateUrl: './jtxs.component.html',
  styles: [
  ]
})
export class JtxsComponent implements OnInit {
	public projects: Project[] = [];

  constructor(
    private _projectService: ProjectService,
  ) {}

  ngOnInit(): void {
    this.getProjects();
  }

  public getProjects() {
    this._projectService.loadProjects().subscribe(({ projects }) => {
      this.projects = projects.filter(c => c.tags.includes("typescript"));
    });
  }
}
