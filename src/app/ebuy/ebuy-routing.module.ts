import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { NewProductComponent } from "./components/new-product/new-product.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { SingleProductComponent } from "./components/single-product/single-product.component";

const routes:Route[] = [
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

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class EbuyRoutingModule{}