import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _http = inject(HttpClient);
  private _url = 'https://lendrive.web.id/anime/';

  constructor() { }

  public getAnimes() {
    return this._http.get(this._url);
  }
}
