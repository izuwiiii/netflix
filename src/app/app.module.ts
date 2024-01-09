import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieCategoryComponent } from './components/movie-category/movie-category.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { FooterComponent } from './components/footer/footer.component';
import { TvshowsComponent } from './pages/tvshows/tvshows.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { PopularComponent } from './pages/popular/popular.component';
import { MyListComponent } from './pages/my-list/my-list.component';
import { SearchComponent } from './pages/search/search.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { MyMoviesListComponent } from './components/my-movies-list/my-movies-list.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { WatchPageComponent } from './pages/watch-page/watch-page.component';

// register Swiper custom elements
register();

@NgModule({
  declarations: [
    AppComponent,
    MovieCategoryComponent,
    MovieCardComponent,
    BrowseComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    TvshowsComponent,
    NotFoundPageComponent,
    MoviesComponent,
    PopularComponent,
    MyListComponent,
    SearchComponent,
    MoviesListComponent,
    MovieDetailComponent,
    MyMoviesListComponent,
    ProfileComponent,
    WatchPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ButtonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    // MatAutocompleteModule
  ],
  providers: [
              provideAnimations(), // required animations providers
              provideToastr(),
             ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
  
})
export class AppModule { }
