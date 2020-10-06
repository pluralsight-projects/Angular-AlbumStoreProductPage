import 'rxjs/add/operator/map';
import { Album } from './album';
import { Product } from './product';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()

export class ProductService {
  private _albumUrl="../assets/album.json";
  private _productsUrl="../assets/products.json";

  constructor(private _http: Http) {

  }
  getAlbum(id: number): Observable<Album>{
    return this._http.get(this._albumUrl).map((response)=><Album>response.json())
  }
  getProducts(): Observable<Product[]>{
    return this._http.get(this._productsUrl).map((response)=><Product[]>response.json())
  }
}
