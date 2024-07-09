import { Component, OnInit, inject } from '@angular/core';
import { Anime } from '../interface/anime.interface';
import { DataService } from '../services/data-service.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AnimeCartService } from '../services/anime-cart.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-anime-list',
  standalone: true,
  imports: [CommonModule, CartComponent],
  templateUrl: './anime-list.component.html',
  styleUrl: './anime-list.component.scss',
  providers: [DataService]
})
export class AnimeListComponent implements OnInit {
  animes: Anime[] = [];
  private _dataService = inject(DataService);

  private _cartService = inject(AnimeCartService);
  private _router = inject(Router);


ngOnInit(): void {
  this._dataService.getAnimes().subscribe((data: Anime[]) => {
    console.log(data)
    this.animes = data;
  }
  );
}

navegate(id: number): void {
  this._router.navigate(['/animes', id]);
}


  upQuantity(anime: Anime) {
    anime.quantity++;
  }

  downQuantity(anime: Anime) {
    if (anime.quantity > 0) {
      anime.quantity--;
    }
  }

  addToCart(anime: Anime) {
    this._cartService.addToCart(anime);
  }

  remoteToCart(anime: Anime) {
    this._cartService.removeFromCart(anime);
  }


}
