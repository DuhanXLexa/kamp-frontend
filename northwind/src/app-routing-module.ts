import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ResponseModel } from "./app/models/responseModel";
import { TodoComponent } from "./app/components/todo/todo.component";
import { ProductComponent } from "./app/components/product/product.component";
import { CategoryComponent } from "./app/components/category/category.component";
import { FormsModule } from "@angular/forms";

import { ToastrModule } from "ngx-toastr";


const routes: Routes = [
    {path:"",pathMatch:"full",  component:ProductComponent},
    {path:"products", component:ProductComponent},
    {path:"products/category/:categoryId", component:ProductComponent}
];

