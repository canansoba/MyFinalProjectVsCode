import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';;
import { Observable } from 'rxjs';
import { RentalResponseModel } from '../models/rentalResponseModel';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44357/api/rentals/getall";
  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<RentalResponseModel> {
    return this.httpClient
      .get<RentalResponseModel>(this.apiUrl);
      
  }
  isRentable(rental:Rental):Observable<ResponseModel>{
    let newPath = this.apiUrl + "rentals/isrentable"
    return this.httpClient.post<ResponseModel>(newPath,rental);
  }
}