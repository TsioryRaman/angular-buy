import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Product } from '../models/Product.model';
import { map, tap } from 'rxjs/operators';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  productForm: FormGroup;
  productPreview$: Observable<Product>
  constructor(private formBuilder:FormBuilder,private productService:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder
    .group({
      name: [null,[Validators.required,Validators.maxLength(255),Validators.minLength(5)]],
      description: [null,[Validators.required,Validators.maxLength(255)]],
      price: [null,[Validators.required,Validators.max(10000)]],
      liked: [null]
    },{updateOn:'blur'})

    this.productPreview$ = this.productForm.valueChanges.pipe(
      map(product => ({...product,liked: 0,id: this.productService.generateProductId()}))
    );
  }

  onSubmitForm() {
    this.productService.addProduct(this.productForm.value).pipe(
      tap(_ => this.router.navigateByUrl("product"))
    ).subscribe()
  }

}
