import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,FormsModule,CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
