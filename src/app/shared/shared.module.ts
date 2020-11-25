import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {HttpClientModule} from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PageNotFoundComponent} from './_pages/page-not-found/page-not-found.component';
import {SidebarComponent} from './_components/sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BreadcrumbsComponent } from './_components/breadcrumbs/breadcrumbs.component';
import { InfoPopupComponent } from './_components/info-popup/info-popup.component';
import {MatTreeModule} from '@angular/material/tree';
import { TreeNgComponent } from './_components/tree-ng/tree-ng.component';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    InfoPopupComponent,
    TreeNgComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatTreeModule,
    MatIconModule,
    RouterModule,
  ],
  exports: [
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    PageNotFoundComponent,
    SidebarComponent,
    MatSidenavModule,
    BreadcrumbsComponent,
    MatTreeModule,
    TreeNgComponent,
    MatIconModule,
  ]
})
export class SharedModule { }
