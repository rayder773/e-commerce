import { Component, OnInit } from '@angular/core';

const images = [
  'https://i.citrus.ua/imgcache/size_800/uploads/shop/d/7/d75d4340caebeaef61aea69f18598021.jpg',
  'https://i.citrus.ua/imgcache/size_800/uploads/shop/3/b/3b3399235399045dfd70282aa0fde3c6.jpg'
];

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  images = images;

  constructor() { }

  ngOnInit(): void {
  }

}
