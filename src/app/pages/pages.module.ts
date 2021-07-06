import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from '../shared/header/header.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { AboutComponent } from '../shared/about/about.component';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    AboutComponent,
  ],
  exports: [PagesComponent],
  imports: [CommonModule, RouterModule],
})
export class PagesModule {}
