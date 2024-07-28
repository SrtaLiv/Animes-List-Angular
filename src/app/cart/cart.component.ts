import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IAnime } from '../interface/anime.interface';
import { AnimeCartService } from '../services/anime-cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  animes: IAnime[] = [];

  constructor(private animeCartService: AnimeCartService) {}

  ngOnInit() {
    this.animeCartService.items.subscribe((animes: IAnime[]) => { 
      this.animes = animes;
    });
  }

  addToCart(anime: IAnime) {
    this.animeCartService.addToCart(anime);
  }

  removeFromCart(anime: IAnime) {
    this.animeCartService.removeFromCart(anime);
  }

  clearCart() {
    this.animeCartService.clearCart();
  }

  
}
