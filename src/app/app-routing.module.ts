import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AboutPageComponent} from './pages/about-page/about-page.component';
import {CatalogPageComponent} from './pages/catalog-page/catalog-page.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'catalog',
    component: CatalogPageComponent
  },

  {path: '', redirectTo: '/about', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
