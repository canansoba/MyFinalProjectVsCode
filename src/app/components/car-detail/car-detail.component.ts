import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carImage';
import { Product } from 'src/app/models/product';
import { CarImageService } from 'src/app/services/car-image.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carImages: CarImage[] = [];
  carImagePaths: string[] = [];
  car: Product;
  dataLoaded = false;
  imageUrl = "https://localhost:44357/";

  constructor(private productService: ProductService,
    private carImageService: CarImageService, 
    private activatedRoute:ActivatedRoute) {}


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarDetail(params["carId"])
        this.getCarImages(params["carId"])
      }
    })
  }

  getCarDetail(productId:number) {
    this.productService.getCarDetailsByCarId(productId).subscribe((response) => {
      this.car = response.data[0];
      this.dataLoaded = true;
    });
  }

  getCarImages(carId:number){
    this.carImageService.getCarImageByCarId(carId).subscribe((response) => {
      this.carImages = response.data;
    });
  }

}
