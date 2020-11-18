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

@NgModule({
  declarations: [
    MainComponent,
    SignUpComponent,
    NavbarComponent,
    CatalogPageComponent,
    AboutPageComponent,
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
  ]
})
export class MainModule { }
