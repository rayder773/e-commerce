import { Component, OnInit } from '@angular/core';

const testMenu = [
  {
    name: 'Electronic',
    children: [
      {
        name: 'Electronic_1',
      }
    ]
  },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menu = testMenu;
  constructor() { }

  ngOnInit(): void {
  }

}
