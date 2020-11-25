import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../shared/_services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  allProducts: [];

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts()
      .subscribe(allProducts => {
        this.allProducts = allProducts;
      });
  }

}
