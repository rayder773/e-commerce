import { Component, OnInit } from '@angular/core';

const testTreeData = [
  {
    name: 'Products',
    children: [
      {name: 'Add new product', routerLink: 'new-product'},
      {name: 'All products', routerLink: 'all-products'},
    ]
  },
  {
    name: 'Categories',
    children: [
      {name: 'All categories', routerLink: 'categories'},
    ]
  },
  {
    name: 'Settings',
    children: [
      {name: 'All', routerLink: 'settings'},
    ]
  },
];

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent implements OnInit {
  treeData = testTreeData;

  constructor() { }

  ngOnInit(): void {
  }

}
