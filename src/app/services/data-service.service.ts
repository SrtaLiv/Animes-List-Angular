import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IAnime } from '../interface/anime.interface';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class DataService {
  private _http = inject(HttpClient);
  private apiUrl = 'https://ghibli.rest/films'; //Api e anime

  public getAnimes(): Observable<IAnime[]> {
    return this._http.get<IAnime[]>(this.apiUrl);
  }

  public getAnimeById(id: string) : Observable<IAnime>{
    return this._http.get<IAnime>(`${this.apiUrl}?id?=${id}`);
  }
}
