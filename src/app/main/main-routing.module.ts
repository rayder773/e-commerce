import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MainComponent} from './main.component';
import {AboutPageComponent} from './_pages/about-page/about-page.component';
import {CatalogPageComponent} from './_pages/catalog-page/catalog-page.component';
import {HomePageComponent} from './_pages/home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
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
        component: CatalogPageComponent,
        data: { shouldBeFilter: true }
      },
      {
        path: '',
        component: HomePageComponent
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
