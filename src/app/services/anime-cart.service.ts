import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Anime } from '../interface/anime.interface';

@Injectable({
  providedIn: 'root'
})
export class AnimeCartService {

  private _items: Anime[] = [];
  private _itemsSubject: BehaviorSubject<Anime[]> = new BehaviorSubject(this._items);
  public items: Observable<Anime[]> = this._itemsSubject.asObservable();

  addToCart(anime: Anime) {
    const existingAnime = this._items.find(item => item._id === anime._id);
    if (existingAnime) {
      existingAnime.quantity += 1;
    } else {
      this._items.push({ ...anime, quantity: 1 });
    }
    this._itemsSubject.next(this._items);
  }

  removeFromCart(anime: Anime) {
    this._items = this._items.filter(item => item._id !== anime._id);
    this._itemsSubject.next(this._items);
  }

  clearCart() {
    this._items = [];
    this._itemsSubject.next(this._items);
  }
}
