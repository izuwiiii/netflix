import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { GetMovie } from 'src/app/Models/movie';
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

  showDetail: boolean = false

  mov: GetMovie;

  getMovieDetails(event) {
    // console.log(event.movie)
    // this.moviesDBService.currentMovie = event.movie
    // // this.router.navigateByUrl('/Movie/'+event.movie.id)
    // console.log(this.moviesDBService.currentMovie)
    this.showDetail = true
    this.moviesDBService.movDetail = this.showDetail
    // console.log(event.movie)
    this.moviesDBService.currentMovie = event.movie
    this.mov = this.moviesDBService.currentMovie
    // this.router.navigateByUrl('/Movie/'+event.movie.id)
    console.log(this.moviesDBService.currentMovie)
  }

}
