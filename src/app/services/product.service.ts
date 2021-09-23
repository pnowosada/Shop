import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

import { productUrl } from '../config/api';

const apiUrl='http://localhost:3000/products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }
  getProduct():Observable<Product[]>{
    return this.http.get<Product[]>(productUrl);
  }
}
