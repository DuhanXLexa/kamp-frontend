import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { VatAddedPipe } from '../../pipes/vat-added.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipePipe } from "../../pipes/filter-pipe.pipe"; // Burayı ekledik
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule, VatAddedPipe, FormsModule, FilterPipePipe], // FormsModule'u buraya ekledik
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'] // styleUrl değil, styleUrls olarak yazılmalı
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  dataLoaded = false;
  filterText = '';

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute
    ,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      if (params["categoryId"]) {
        console.log(params["categoryId"]);
        this.getProductsByCategory(params["categoryId"]);
      } else {
        this.getProducts();
      }
    });
  }

  getProducts() {
    this.productService.getProducts().subscribe(response => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }

  getProductsByCategory(categoryId: number) {
    console.log(categoryId);
    this.productService.getProductsByCategory(categoryId).subscribe(response => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }
  
  addToCard(product:Product){
this.toastrService.success("Sepete eklendi",product.productName)
  }
}
