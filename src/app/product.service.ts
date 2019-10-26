import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
<<<<<<< HEAD
import { Album } from './album';
import { Observable } from './rxjs/observable';

=======
>>>>>>> refs/remotes/origin/master

@Injectable()
export class ProductService {
  private _albumUrl = '../assets/album.json';

  constructor(private _http: Http) { }

<<<<<<< HEAD
  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl).map((response) =>
    <Album>response.json());
=======
  getAlbum(id: number) {
    return this._http.get(this._albumUrl).map((response) =>
    response.json());
>>>>>>> refs/remotes/origin/master
  }
}
