import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Anime } from '../interface/anime.interface';
import { AnimeCartService } from '../services/anime-cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  animes: Anime[] = [];

  constructor(private animeCartService: AnimeCartService) {}

  ngOnInit() {
    this.animeCartService.items.subscribe((animes: Anime[]) => { 
      this.animes = animes;
    });
  }

  addToCart(anime: Anime) {
    this.animeCartService.addToCart(anime);
  }

  removeFromCart(anime: Anime) {
    this.animeCartService.removeFromCart(anime);
  }

  clearCart() {
    this.animeCartService.clearCart();
  }

  
}
