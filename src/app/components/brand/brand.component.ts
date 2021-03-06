import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  filterBrand: string;
  brands: Brand[] = [];
  currentBrand?: Brand;
  dataLoaded = false;
  
  constructor(
    private brandService: BrandService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      this.dataLoaded = true;
    });
  }

  setQueryParams(brand:Brand){
    if(brand)
    {
      this.setCurrentBrand()
    }
       
  }

  setCurrentBrand() {
    //this.currentBrand = brand;
    this.router.navigate(['products/'], { queryParams: { brandId: this.currentBrand.brandId }, queryParamsHandling: 'merge', relativeTo: this.route});
  }

  getCurrentBrandClass(brand: Brand) {
    if (brand == this.currentBrand) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }

  getAllBrandClass(){
    if(!this.currentBrand){
      return "list-group-item active";
    }else{
      return "list-group-item";
    }
  }
}
