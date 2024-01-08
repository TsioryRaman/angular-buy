import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/models/Product.model';
import { ProductService } from '../../../core/service/product.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  product$: Observable<Product>;
  clicked: boolean;
  constructor(private productService: ProductService,private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id;
    this.product$ = this.productService.getSingleProduct(id);
  }

  clickedButton(): void {
    // this.clicked = !this.clicked;
    // if (this.clicked) {
    //   this.productService.likedOrNot(this.product.id, this.clicked);
    //   return;
    // }

    // this.productService.likedOrNot(this.product.id, this.clicked);
  }

}
