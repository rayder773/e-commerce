import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_URL, ROUTES} from '../../../../commonConstants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  addNewProduct(product): Observable<any> {
    return this.http.post(API_URL + ROUTES.newProduct, {
      title: product.title,
      description: product.description
    });
  }

  getAllProducts(): Observable<any> {
    return this.http.get(API_URL + ROUTES.allProducts);
  }

  getAllProductById(id): Observable<any> {
    return this.http.post(API_URL + ROUTES.productById, {id});
  }
}
