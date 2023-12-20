import { Component, inject } from '@angular/core';
import { MoviesDBService } from './Services/movies-db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-tmdb';
  moviesdbService = inject(MoviesDBService)

  ngOnInit() {
    this.moviesdbService.getPopularMovies()
  }



}
