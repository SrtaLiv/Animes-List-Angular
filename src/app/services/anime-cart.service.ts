import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { IAnime } from '../interface/anime.interface';

@Injectable({
  providedIn: 'root'
})
export class AnimeCartService {

  private _items: IAnime[] = [];
  private _itemsSubject: BehaviorSubject<IAnime[]> = new BehaviorSubject(this._items);
  public items: Observable<IAnime[]> = this._itemsSubject.asObservable();

  addToCart(anime: IAnime) {
    const existingAnime = this._items.find(item => item.id === anime.id);
    if (existingAnime) {
      existingAnime.quantity += 1;
    } else {
      this._items.push({ ...anime, quantity: 1 });
    }
    this._itemsSubject.next(this._items);
  }

  removeFromCart(anime: IAnime) {
    this._items = this._items.filter(item => item.id !== anime.id);
    this._itemsSubject.next(this._items);
  }

  clearCart() {
    this._items = [];
    this._itemsSubject.next(this._items);
  }
}
