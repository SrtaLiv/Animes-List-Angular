import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Anime } from '../interface/anime.interface';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class DataService {
  private _http = inject(HttpClient);
  private apiUrl = 'https://648ca9fe8620b8bae7ed370f.mockapi.io/anime'; //Api e anime

  public getAnimes(): Observable<Anime[]> {
    // fetch('url', {method: 'GET'})
    return this._http.get<Anime[]>(this.apiUrl);
  }

  public getAnimeById(id: number) : Observable<any>{
    return this._http.get<Anime>(`${this.apiUrl}/${id}`);
  }
}
