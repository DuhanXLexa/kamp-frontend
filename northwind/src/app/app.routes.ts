import { NgModel } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
export const routes: Routes = [
    {path:"",  component:ProductComponent},
    {path:"products", component:ProductComponent},
    {path:"products/category/:categoryId", component:ProductComponent}
];


