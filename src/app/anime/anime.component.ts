import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { Anime } from '../interface/anime.interface';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data-service.service';
import { CommonModule } from '@angular/common';
import { AnimeCartService } from '../services/anime-cart.service';

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
  public anime?: Anime;
  id = signal<number | undefined>(undefined); //estudiar

  private _route = inject(ActivatedRoute);

  private _dataService = inject(DataService); //Servicio de animes
  private _cartService = inject(AnimeCartService); //Servicio de animes


  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this._dataService.getAnimeById(params['id']).subscribe((data: Anime) => {
        this.anime = data;
        this.loading = false;
      })
    })
  }

  removeFromCart(): void{
    console.log("reproduciendo ...")
  }



}

