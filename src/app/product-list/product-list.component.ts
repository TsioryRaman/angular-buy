import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/Product.model';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Array<Product>;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }
}
