import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
<<<<<<< HEAD
import { Album } from '../album';
=======
>>>>>>> refs/remotes/origin/master

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
<<<<<<< HEAD

  albumInfo: Album;
=======
  albumInfo;
>>>>>>> refs/remotes/origin/master

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getAlbum(1).subscribe(response =>
    this.albumInfo = response);
  }

}
