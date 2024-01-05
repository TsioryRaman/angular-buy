import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/Product.model';
import { ProductService } from '../service/product.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  product$: Observable<Array<Product>>;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.product$ = this.productService.getAllProducts()
    this.product$.subscribe({
      error: _ => console.log("erreur")
    })
  }
}
