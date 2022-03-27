import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: [],
})
export class ProjectsComponent {
  constructor(private _location: Location) {}

  public back(): void {
    this._location.back();
  }
}
