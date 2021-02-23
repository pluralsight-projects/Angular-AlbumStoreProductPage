import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import "rxjs/add/operator/map";
import { Http, Response } from '@angular/http';

import { Album } from './album';

@Injectable()
export class ProductService {

  constructor(private _http: Http ) { }

  private _albumUrl = '../assets/album.json';
  album: Album;

  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl).map((response) =>
      <Album>response.json());

  }


}
