import {APP_INITIALIZER, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {HttpClientModule} from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PageNotFoundComponent} from './_pages/page-not-found/page-not-found.component';
import {SidebarComponent} from './_components/sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BreadcrumbsComponent} from './_components/breadcrumbs/breadcrumbs.component';
import {InfoPopupComponent} from './_components/info-popup/info-popup.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzModalModule } from 'ng-zorro-antd/modal';
import {UiStyleToggleService} from './_services/ui-style-toggle.service';
import { StorageService } from './_services/local-storage.service';


export function themeFactory(themeService: UiStyleToggleService) {
  return () => themeService.setThemeOnStart();
}

@NgModule({
  declarations: [
    PageNotFoundComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    InfoPopupComponent,
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
    NzTableModule,
    NzMenuModule,
    NzInputModule,
    NzButtonModule,
    NzUploadModule,
    NzModalModule,
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
    MatIconModule,
    NzTableModule,
    NzMenuModule,
    NzInputModule,
    NzButtonModule,
    NzUploadModule,
    NzModalModule,
  ],
  providers: [
    UiStyleToggleService,
    StorageService,
    {provide: APP_INITIALIZER, useFactory: themeFactory, deps: [UiStyleToggleService], multi: true},
  ],
})
export class SharedModule {
}
