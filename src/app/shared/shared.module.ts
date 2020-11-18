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

@NgModule({
  declarations: [
    PageNotFoundComponent,
    SidebarComponent,
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
  ]
})
export class SharedModule { }
