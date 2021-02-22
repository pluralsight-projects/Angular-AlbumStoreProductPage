import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';


@Injectable()
export class ProductService {

  constructor(private _http: HttpClient ) { }

  private _albumUrl = '../assets/album.json';
  album: any = {};

  getAlbum(id: number): any {
    return this._http.get(this._albumUrl);

  }


}
