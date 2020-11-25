import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../../shared/_services/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  newProductForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.productService.addNewProduct(this.newProductForm.value)
      .subscribe(res => {
        console.log(res);
      });
  }
}
