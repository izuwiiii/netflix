import { MoviesDBService } from './../../Services/movies-db.service';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { allMovies } from 'src/app/Models/allMoviesList';
import { GetMovie } from 'src/app/Models/movie';
import { PLAY_IMAGE_URL } from 'src/app/constants/config';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  selectedMovie: GetMovie;
  movieId: number;
  searchedResults!: allMovies;
  moviesDBService = inject(MoviesDBService)
  activeRoute: ActivatedRoute = inject(ActivatedRoute)

  movie: GetMovie = this.moviesDBService.currentMovie

  playBtnUrl: string = PLAY_IMAGE_URL;
  
  res: any[] = []
  
  ngOnInit() {
    console.log(this.movie)

  }
}
