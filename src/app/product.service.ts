import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import "rxjs/add/operator/map";
import { Http, Response } from '@angular/http';


@Injectable()
export class ProductService {

  constructor(private _http: Http ) { }

  private _albumUrl = '../assets/album.json';
  album: any = {};

  getAlbum(id: number) {
    return this._http.get(this._albumUrl).map((response) =>
      response.json());

  }


}
