import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: 'home',
    component: PagesComponent,
    loadChildren: () =>
      import('./child-route.module').then((m) => m.ChildRouteModule),
  },
  {
    path: 'projects',
    component: PagesComponent,
    loadChildren: () =>
      import('./child-route.module').then((m) => m.ChildRouteModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
