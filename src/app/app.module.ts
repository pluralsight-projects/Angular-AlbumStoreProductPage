import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { HttpClient } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
