import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AnimeListComponent } from './pages/anime-list/anime-list.component';
import { CartComponent } from './cart/cart.component';
import { AnimeComponent } from './pages/anime/anime.component';
import { CarouselComponent } from './pages/carousel/carousel.component';
import { FooterComponent } from './pages/footer/footer.component';

export const routes: Routes = [
    {path: '', component: AnimeListComponent},
    {path: 'animes', component: AnimeListComponent},
    {path: 'animes/:id', component: AnimeComponent},
    {path: 'lista', component: CartComponent},
    {path: 'carousel', component: CarouselComponent},
    {path: 'footer', component: FooterComponent},
    {path: '**', component: PageNotFoundComponent},
];
