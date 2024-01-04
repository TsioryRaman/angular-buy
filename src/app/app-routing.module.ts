import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { NewProductComponent } from './new-product/new-product.component';

const routes: Routes = [
  {
    path: 'product',
    children: [
      {
        path: 'create',
        component: NewProductComponent
      },
      {
        path: ':id',
        component: SingleProductComponent,
      },
      {
        path:'',
        component: ProductListComponent
      }
    ]
  },
  {
    path: '',
    component: LandingPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
