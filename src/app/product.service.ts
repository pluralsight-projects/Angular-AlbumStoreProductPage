import { Injectable } from '@angular/core';
import {Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

import { Album } from './album';

import { Observable} from 'rxjs/Observable';

import { Product } from './product';

import { AlbumStorePage } from '../../e2e/app.po';

@Injectable()
export class ProductService {
  // getProducts() {
  //   throw new Error("Method not implemented.");
  // }
private _albumUrl = '../assets/album.json';
private _productsUrl = '../assets/products.json'

  constructor(private _http: Http) { }

  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl).map((response) =>
    <Album>response.json());

  }
  getProducts() {
    return this._http.get(this._productsUrl).map(response => 
      <Product[]>response.json());
  }
}
 