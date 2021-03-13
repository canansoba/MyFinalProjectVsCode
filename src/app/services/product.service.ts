import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ProductResponseModel } from '../models/productResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://localhost:44357/api/products/getproductdetaildto";
  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ProductResponseModel> {
    return this.httpClient
      .get<ProductResponseModel>(this.apiUrl);
      
  }
}
