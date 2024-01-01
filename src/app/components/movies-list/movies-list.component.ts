import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesDBService } from 'src/app/Services/movies-db.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent {

  router = inject(Router)
  moviesDBService = inject(MoviesDBService);

  @Input() title = '';
  @Input() movieList: any[] = [];

  getMovieDetails(event) {
    // console.log(event.movie)

    this.moviesDBService.currentMovie = event.movie
    this.router.navigateByUrl('/Movie/'+event.movie.id)
    console.log(this.moviesDBService.currentMovie)
  }

}
