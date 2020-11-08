import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SignUpComponent} from '../sign-up/sign-up.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.openDialog();
  }

  openDialog(): void {
    this.dialog.open(SignUpComponent, {
      panelClass: 'test'
    });
  }
}
