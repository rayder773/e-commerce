import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterEvent} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  path: string [] = [];

  constructor( private router: Router) {
    this.createBreadcrumbs(window.location.pathname);
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((route: RouterEvent ) => this.createBreadcrumbs(route.url));
  }

  createBreadcrumbs(url): void {
    if (url === '/') {
      return this.path = null;
    }

    this.path = ['/'].concat(url.split('/')).filter(p => p);
  }

}
