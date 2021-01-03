import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import {SharedModule} from '../shared/shared.module';
import { NewProductComponent } from './_pages/new-product/new-product.component';
import { AllProductsComponent } from './_pages/all-products/all-products.component';
import { CategoriesComponent } from './_pages/categories/categories.component';
import { AdminSidebarComponent } from './_components/admin-sidebar/admin-sidebar.component';
import { SettingsComponent } from './_pages/settings/settings.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [
    AdminComponent,
    NewProductComponent,
    AllProductsComponent,
    CategoriesComponent,
    AdminSidebarComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ]
})
export class AdminModule { }
