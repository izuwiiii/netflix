import { Component, Input, inject } from '@angular/core';
import { GetMovie } from 'src/app/Models/movie';
import { MoviesDBService } from 'src/app/Services/movies-db.service';

@Component({
  selector: 'app-my-movies-list',
  templateUrl: './my-movies-list.component.html',
  styleUrls: ['./my-movies-list.component.scss']
})
export class MyMoviesListComponent {

  moviesDBService = inject(MoviesDBService)

  @Input() title = '';
  @Input() movieList: any[] = [];

  showDetail: boolean = false

  mov: GetMovie;

  getMovieDetails(event) {
    this.showDetail = true
    this.moviesDBService.movDetail = this.showDetail
    // console.log(event.movie)
    this.moviesDBService.currentMovie = event.movie
    this.mov = this.moviesDBService.currentMovie
    // this.router.navigateByUrl('/Movie/'+event.movie.id)
    console.log(this.moviesDBService.currentMovie)
  }
  

}
