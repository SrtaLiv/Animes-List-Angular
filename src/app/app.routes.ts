import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { CartComponent } from './cart/cart.component';
import { AnimeComponent } from './anime/anime.component';

export const routes: Routes = [
    {path: '', component: AnimeListComponent},
    {path: 'animes', component: AnimeListComponent},
    {path: 'animes/:id', component: AnimeComponent},
    {path: 'lista', component: CartComponent},
    {path: '**', component: PageNotFoundComponent}
];
