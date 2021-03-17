import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path:"", component:ProductComponent},
  {path:"products", component:ProductComponent},
  {path:"products/brand/:brandId", component:ProductComponent},
  {path:"products/color/:colorId", component:ProductComponent},
  {path:"products/brand/:brandId/color/:colorId", component:ProductComponent},
  {path:"products/:carId", component:ProductComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
