import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-anime2',
  standalone: true,
  imports: [],
  templateUrl: './anime.component.html',
  styleUrl: './anime.component.scss',
  providers: [ApiService]
})
export class AnimeComponent2 {
  private _apiService = inject(ApiService);

  constructor() {
    this._apiService.getAnimes().subscribe(data => {
      console.log(data);
    });
  }
}
