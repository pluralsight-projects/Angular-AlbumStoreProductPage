import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
@Injectable()
export class ProductService {

  constructor(private _http: Http,private _albumUrl: '../assets/album.json') {

   }
   getAlbum(id:number) {
     return this._http.get(this._albumUrl);
   }

}
