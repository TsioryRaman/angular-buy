import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../core/models/Product.model';
import { ProductService } from '../../../core/service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ebuy',
  templateUrl: './ebuy.component.html',
  styleUrls: ['./ebuy.component.css'],
})
export class EbuyComponent implements OnInit {
  @Input() product!: Product;
  clicked: boolean;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.clicked = false;
  }

  clickedButton(): void {
    this.clicked = !this.clicked;
    if (this.clicked) {
      this.productService.likedOrNot(this.product.id, this.clicked);
      return;
    }

    this.productService.likedOrNot(this.product.id, this.clicked);
  }
}
