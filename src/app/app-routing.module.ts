import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

import {PageNotFoundComponent} from './shared/_pages/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: '', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
  // {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' }
    ),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
