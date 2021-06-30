import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const childRoute: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home' } },
];

@NgModule({
  imports: [RouterModule.forChild(childRoute)],
  exports: [RouterModule],
})
export class ChildRouteModule {}
