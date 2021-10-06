import { Component } from '@angular/core';
import { MenuService } from '../../service/menu/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent {
  constructor(private menuService: MenuService) {}

  isOpen: boolean = true;

  menu() {
    this.isOpen = this.menuService.isOpenMenu();
  }
}
