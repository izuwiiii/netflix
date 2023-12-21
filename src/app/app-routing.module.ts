import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent } from './pages/browse/browse.component';
import { LoginComponent } from './pages/login/login.component';
import { TvshowsComponent } from './pages/tvshows/tvshows.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { PopularComponent } from './pages/popular/popular.component';

const routes: Routes = [

  {path: 'Home', component: BrowseComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Tvshows', component: TvshowsComponent},
  {path: 'Movies', component: MoviesComponent},
  {path: 'Newandpopular', component: PopularComponent},

  {path: '**', component: NotFoundPageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
