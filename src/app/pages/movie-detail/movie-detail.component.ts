import { MoviesDBService } from './../../Services/movies-db.service';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { allMovies } from 'src/app/Models/allMoviesList';
import { GetMovie } from 'src/app/Models/movie';
import { MINUS_IMAGE_URL, PLAY_IMAGE_URL, PLUS_IMAGE_URL, THUMBS_BLACK_IMAGE_URL, THUMBS_IMAGE_URL, VOLUME_IMAGE_URL } from 'src/app/constants/config';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations'
import { Genre, movieDetails } from 'src/app/Models/movieDetails';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  selectedMovie: GetMovie;
  movieId: number;
  searchedResults!: allMovies;
  moviesDBService = inject(MoviesDBService)
  activeRoute: ActivatedRoute = inject(ActivatedRoute)

  movie: GetMovie = this.moviesDBService.currentMovie

  playBtnUrl: string = PLAY_IMAGE_URL;

  plusBtnUrl: string = PLUS_IMAGE_URL;
  minusBtnUrl: string = MINUS_IMAGE_URL;

  thumbsBlackBtnUrl: string = THUMBS_BLACK_IMAGE_URL;
  thumbsBtnUrl: string = THUMBS_IMAGE_URL;

  volumeBtnUrl: string = VOLUME_IMAGE_URL;

  res: any[] = []

  detailShow: boolean = false

  curMovie!: movieDetails;

  movieGenres: Genre[];

  genreRes: any[] = []

  sortGenres() {
    this.movieGenres.map((item: any, i) => {
      if (!(i+1 ==  this.movieGenres.length)) {
        item = item+','
        this.genreRes.push(item)
      }
      if (i+1 ==  this.movieGenres.length) {
        this.genreRes.push(item)
      }
    })
  }
  
  checkDetails(event) {
    if (event.target.className.slice(0,8) == 'main-div') {
      this.detailShow = false
      this.moviesDBService.movDetail = false
      return
    }
    this.moviesDBService.movDetail = true
    this.detailShow = true
  }

  remove: any[] = []
  canAddToMyList: boolean = true

  ngOnInit() {  
    // console.log(this.movie)
    this.movieGenres = []
    this.moviesDBService.getMovieDetails(this.movie.id).subscribe((result: any) => {
      this.curMovie = result
      console.log(this.curMovie)
      result.genres.forEach(data => {
        this.movieGenres.push(data.name)
      })
      this.sortGenres()
    })

    if (!this.moviesDBService.moviesId.includes(this.movie.id)) {
      this.canAddToMyList = true
      return
    }
    this.canAddToMyList = false

  }

  addToMyList() {
    if (!this.moviesDBService.moviesId.includes(this.movie.id)) {
      this.canAddToMyList = !this.canAddToMyList
      this.moviesDBService.moviesId.push(this.movie.id)
      this.moviesDBService.myMoviesList.push(this.movie)
      return
    }
    if (this.moviesDBService.moviesId.includes(this.movie.id)) {
      this.canAddToMyList = !this.canAddToMyList
      this.moviesDBService.myMoviesList.forEach((x, i) => {
        if (x.id == this.movie.id) {
          this.remove = this.moviesDBService.moviesId.splice(i, 1)
          this.remove = this.moviesDBService.myMoviesList.splice(i, 1)
        }
      })
      return
    }
  }

  getDetails() {    


  }
}
