import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonServices {

  isSideNavOpened = false;

  constructor() { }

  setSideNav(): void {
    this.isSideNavOpened = !this.isSideNavOpened;
  }
}
