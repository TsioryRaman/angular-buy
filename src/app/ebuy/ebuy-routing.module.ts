import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { NewProductComponent } from "./components/new-product/new-product.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { SingleProductComponent } from "./components/single-product/single-product.component";
import { GuardService } from "../core/guards/auth.guard";

const routes:Route[] = [
    {
        path: 'create',
        component: NewProductComponent,
        canActivate: [GuardService]
      },
      {
        path: ':id',
        component: SingleProductComponent,
        canActivate:[GuardService]
      },
      {
        path:'',
        component: ProductListComponent,
        canActivate:[GuardService]
      }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class EbuyRoutingModule{}