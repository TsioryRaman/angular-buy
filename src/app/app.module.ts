import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EbuyComponent } from './ebuy/ebuy.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RouterModule } from '@angular/router';
import { SingleProductComponent } from './single-product/single-product.component';

@NgModule({
  declarations: [
    AppComponent,
    EbuyComponent,
    ProductListComponent,
    HeaderComponent,
    LandingPageComponent,
    SingleProductComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
