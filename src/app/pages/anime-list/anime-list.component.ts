import { Component, OnInit, inject } from '@angular/core';
import { IAnime } from '../../interface/anime.interface';
import { DataService } from '../../services/data-service.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AnimeCartService } from '../../services/anime-cart.service';
import { CartComponent } from '../../cart/cart.component';

@Component({
  selector: 'app-anime-list',
  standalone: true,
  imports: [CommonModule, CartComponent],
  templateUrl: './anime-list.component.html',
  styleUrl: './anime-list.component.scss',
  providers: [DataService]
})
export class AnimeListComponent implements OnInit {
  animes: IAnime[] = [];
  private _dataService = inject(DataService);

  private _cartService = inject(AnimeCartService);
  private _router = inject(Router);


ngOnInit(): void {
  this._dataService.getAnimes().subscribe((data: IAnime[]) => {
    console.log(data)
    this.animes = data;
  }
  );
}

navegate(id: string): void {
  this._router.navigate(['/animes', id]);
}
//d6bd6efc-37b2-4c40-b092-367cea8c88fe


  upQuantity(anime: IAnime) {
    anime.quantity++;
  }

  downQuantity(anime: IAnime) {
    if (anime.quantity > 0) {
      anime.quantity--;
    }
  }

  addToCart(anime: IAnime) {
    this._cartService.addToCart(anime);
  }

  remoteToCart(anime: IAnime) {
    this._cartService.removeFromCart(anime);
  }


}
