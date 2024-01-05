import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent } from './pages/browse/browse.component';
import { LoginComponent } from './pages/login/login.component';
import { TvshowsComponent } from './pages/tvshows/tvshows.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { PopularComponent } from './pages/popular/popular.component';
import { MyListComponent } from './pages/my-list/my-list.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [

  {path: 'Home', component: BrowseComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Tvshows', component: TvshowsComponent},
  {path: 'Movies', component: MoviesComponent},
  {path: 'Newandpopular', component: PopularComponent},
  {path: 'Mylist', component: MyListComponent},
  {path: 'Search', component: SearchComponent},
  {path: 'Movie/:id', component: MovieDetailComponent},
  {path: 'Profile', component: ProfileComponent},

  {path: '**', component: NotFoundPageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
