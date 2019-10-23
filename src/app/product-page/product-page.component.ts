import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
