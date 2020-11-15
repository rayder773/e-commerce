import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MainComponent} from './main.component';
import {AboutPageComponent} from './_pages/about-page/about-page.component';
import {CatalogPageComponent} from './_pages/catalog-page/catalog-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'about',
        component: AboutPageComponent,
      },
      {
        path: 'catalog',
        component: CatalogPageComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
