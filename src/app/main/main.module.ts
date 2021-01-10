import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import {SignUpComponent} from './_components/sign-up/sign-up.component';
import {NavbarComponent} from './_components/navbar/navbar.component';
import {CatalogPageComponent} from './_pages/catalog-page/catalog-page.component';
import {AboutPageComponent} from './_pages/about-page/about-page.component';
import {SharedModule} from '../shared/shared.module';
import { HomePageComponent } from './_pages/home-page/home-page.component';
import { ProductGroupComponent } from './_pages/product-group/product-group.component';
import { ProductComponent } from './_pages/product/product.component';
import { SliderComponent } from './_components/slider/slider.component';
import { CartComponent } from './_components/cart/cart.component';
import { OrderComponent } from './_pages/order/order.component';
import { FooterComponent } from './_components/footer/footer.component';
import { FilterComponent } from './_components/filter/filter.component';
import { CategoriesComponent } from './_components/categories/categories.component';
import { SidebarComponent } from './_components/sidebar/sidebar.component';
import { BreadcrumbComponent } from './_components/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    MainComponent,
    SignUpComponent,
    NavbarComponent,
    CatalogPageComponent,
    AboutPageComponent,
    HomePageComponent,
    ProductGroupComponent,
    ProductComponent,
    SliderComponent,
    CartComponent,
    OrderComponent,
    FooterComponent,
    FilterComponent,
    CategoriesComponent,
    SidebarComponent,
    BreadcrumbComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
  ]
})
export class MainModule { }
