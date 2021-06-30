import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  constructor() {}

  download() {
    window.open('../../../assets/document/Curriculum_keneth+(1).docx', 'Download');
  }

  ngOnInit(): void {}
}
