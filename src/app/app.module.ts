import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//mport { HttpModule } from '@angular/http';
import {HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductDescriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //HttpModule
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
