import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carImage';
import { Product } from 'src/app/models/product';
import { CarImageService } from 'src/app/services/car-image.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products:Product[] = [];
  carImages:CarImage[] = [];
  dataLoaded = false;
  
  constructor(
    private productService:ProductService,
    private carImageService:CarImageService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params=>{
      if(params["colorId"]){
        this.getCarDetailsByColor(params["colorId"])
      }else{
        this.getProducts();
      }
    })
    
  }

  getProducts(){
    this.productService.getProducts().subscribe(response=>{
      this.products = response.data
      this.dataLoaded = true;
    });
  }

  setPreviewImages(arabalar:Product[]){
    arabalar.forEach(product => {
      this.carImageService.getCarImageByCarId(product.id).subscribe((response) => {
        product.previevImagePath = "https://localhost:44357/" + response.data[0].imagePath;
      });
    });
  }

  getCarDetailsByBrand(brandId:number){
    this.productService.getCarDetailsByBrand(brandId).subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
      this.setPreviewImages(this.products)
    });
  }
  getCarDetailsByColor(colorId:number){
    this.productService.getCarDetailsByBrand(colorId).subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
      this.setPreviewImages(this.products)
    });
  }
}
