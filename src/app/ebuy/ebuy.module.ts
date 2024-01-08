import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { EbuyComponent } from './components/e-buy/ebuy.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EbuyRoutingModule } from './ebuy-routing.module';

@NgModule({
  declarations: [ProductListComponent,EbuyComponent,SingleProductComponent,NewProductComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EbuyRoutingModule
  ],
  exports:[EbuyComponent]
})
export class EbuyModule { }
