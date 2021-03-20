import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ProductResponseModel } from '../models/productResponseModel';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://localhost:44357/api/products/getproductdetaildto";
  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ProductResponseModel> {
    let newPath = this.apiUrl + "products/getall"
    return this.httpClient
      .get<ProductResponseModel>(this.apiUrl);
      
  }

  getCarDetailsByBrand(brandId:number){
    let newPath = this.apiUrl + "products/getcarsdetailsbybrand?brandId=" + brandId;
    return this.httpClient
      .get<ListResponseModel<Product>>(newPath);
      
  }

  getProductDetailsByColor(colorId:number){
    let newPath = this.apiUrl + "products/getproductsdetailsbybrand?brandId=" + colorId;
    return this.httpClient
      .get<ListResponseModel<Product>>(newPath);
  }

  getCarDetailsByCarId(productId:number){
    let newPath = this.apiUrl + "cars/getproductdetailsbycarid?productid=" + productId;
    return this.httpClient
      .get<ListResponseModel<Product>>(newPath);
  }

}
