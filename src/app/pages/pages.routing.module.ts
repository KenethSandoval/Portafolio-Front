import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: 'projects',
    component: PagesComponent,
    loadChildren: () =>
      import('./child-route.module').then((m) => m.ChildRouteModule),
    data: { title: 'Projects' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
