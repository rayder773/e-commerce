import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import {NewProductComponent} from './_pages/new-product/new-product.component';
import {AllProductsComponent} from './_pages/all-products/all-products.component';
import {CategoriesComponent} from './_pages/categories/categories.component';

const routes: Routes = [
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'new-product',
        component: NewProductComponent,
      },
      {
        path: 'all-products',
        component: AllProductsComponent
      },
      {
        path: 'categories',
        component: CategoriesComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
