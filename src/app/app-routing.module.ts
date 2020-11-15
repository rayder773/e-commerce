import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AboutPageComponent} from './main/_pages/about-page/about-page.component';
import {CatalogPageComponent} from './main/_pages/catalog-page/catalog-page.component';
import {PageNotFoundComponent} from './shared/_pages/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  // {
  //   path: 'about',
  //   component: AboutPageComponent,
  // },
  // {
  //   path: 'catalog',
  //   component: CatalogPageComponent
  // },
  // {
  //   path: '',
  //   component: MainLayoutComponent,
  //   children: [
  //     {
  //       path: 'about',
  //       component: AboutPageComponent,
  //     },
  //     {
  //       path: 'catalog',
  //       component: CatalogPageComponent
  //     },
  //   ]
  // },
  //
  // {
  //   path: 'admin',
  //   component: AdminLayoutComponent,
  //   children: []
  // },

  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: '', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
  // {path: '', redirectTo: '/', pathMatch: 'full'},
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
