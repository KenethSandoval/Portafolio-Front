import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../service/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: [],
})
export class ProjectsComponent implements OnInit {
  constructor(private _projectService: ProjectService) {}

  ngOnInit(): void {
    this._projectService.loadProjects().subscribe((res) => {
      console.log(res);
    });
  }
}
