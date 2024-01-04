import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Product } from '../models/Product.model';
import { map, tap } from 'rxjs/operators';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  productForm: FormGroup;
  productPreview$: Observable<Product>
  constructor(private form:FormBuilder,private productService:ProductService) { }

  ngOnInit(): void {
    this.productForm = this.form.group({
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
    console.log(this.productForm.value)
    this.productService.addProduct(this.productForm.value)
  }

}
