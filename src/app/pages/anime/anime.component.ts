import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { IAnime } from '../../interface/anime.interface';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data-service.service';
import { CommonModule } from '@angular/common';
import { AnimeCartService } from '../../services/anime-cart.service';

@Component({
  selector: 'app-anime',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './anime.component.html',
  styleUrl: './anime.component.scss',
  providers: [DataService] //agregar esto si o si
})
export class AnimeComponent implements OnInit{

  loading:boolean = true;
  public anime?: IAnime;
  id = signal<string | undefined>(undefined); //estudiar

  private _route = inject(ActivatedRoute);

  private _dataService = inject(DataService); //Servicio de animes
  private _cartService = inject(AnimeCartService); //Servicio de animes


  // ngOnInit(): void {
  //   this._route.params.subscribe(params => {
  //     this._dataService.getAnimeById(params['id']).subscribe((data: IAnime) => {
  //       this.anime = data;
  //       this.loading = false;
  //     })
  //   })
  // }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.id.set(params['id']);
      this.fetchAnimeDetails(params['id']);

    })
  }
  fetchAnimeDetails(id: string): void {
    if (id && id !== '3') {
      this._dataService.getAnimeById(id).subscribe(
        (data: IAnime) => {
          this.anime = data;
          this.loading = false;
        },
        error => {
          console.error('Error fetching anime details', error);
          this.loading = false;
        }
      );
    }
  }

  removeFromCart(): void{
    console.log("reproduciendo ...")
  }



}

