import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../../shared/_services/product.service';
import {NzUploadFile} from 'ng-zorro-antd/upload';

export function getBase64(file: File): Promise<string | ArrayBuffer | null> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

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

  previewImage: string | undefined = '';
  previewVisible = false;
  addMediaLinkVisible = false;

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('this.newProductForm', this.newProductForm);
    // this.productService.addNewProduct(this.newProductForm.value)
    //   .subscribe(res => {
    //     console.log(res);
    //   });
  }

  handlePreview = async (file: NzUploadFile) => {
    console.log('file', file);
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    this.previewImage = file.url || file.preview;
    this.previewVisible = true;
  }

  openAddMediaModal(): void {
    this.addMediaLinkVisible = true;
  }

  closeAddMediaModal(): void {
    this.addMediaLinkVisible = false;
  }
}
