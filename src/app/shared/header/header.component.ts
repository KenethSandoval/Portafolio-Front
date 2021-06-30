import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
})

export class HeaderComponent implements OnInit{
  constructor() {}
  
  isOpen: boolean = true;

  menu() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit(): void {}


}
