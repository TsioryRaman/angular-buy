import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../core/models/Product.model';
import { ProductService } from '../../../core/service/product.service';
import { Observable } from 'rxjs';

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
