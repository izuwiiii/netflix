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
import { Genre, ProductionCompany, movieDetails } from 'src/app/Models/movieDetails';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  constructor(private toastr: ToastrService) { }

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

  genreRes: any[] = [];

  releaseDate: string;

  runtime: string;

  hours: number;
  minutes: number;

  prodComp: any[] = []
  prodRes: any[] = []

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

  sortComp() {
    this.prodComp.map((item: any, i) => {
      if (!(i+1 ==  this.prodComp.length)) {
        item = item+','
        this.prodRes.push(item)
      }
      if (i+1 ==  this.prodComp.length) {
        this.prodRes.push(item)
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

    console.log(this.movie)
    this.movieGenres = []
    if (!this.movie.media_type) {
      this.movie.media_type = 'movie'
    }
    try {
      this.moviesDBService.getMovieDetails(this.movie.media_type, this.movie.id).subscribe((result: any) => {

        this.curMovie = result
        
        console.log(this.movie)
        if (this.movie.media_type == 'movie') {
          this.releaseDate = result.release_date
          this.runtime = result.runtime
          this.hours = Math.floor(+this.runtime / 60)
          this.minutes = +this.runtime % 60
        } else {
          this.releaseDate = result.first_air_date
          this.runtime = result.number_of_episodes
          // console.log(this.runtime)
        }
  
        // this.prodComp = result.production_companies
        result.genres.forEach(data => {
          this.movieGenres.push(data.name)
        })
        result.production_companies.forEach(data => {
          this.prodComp.push(data.name)
        })
        this.sortGenres()
        this.sortComp()
      })
    } catch (error) {
      console.log(error.status)
    }
    

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
      this.toastr.success('Succesfully added to your list')
      return
    }
    if (this.moviesDBService.moviesId.includes(this.movie.id)) {
      this.canAddToMyList = !this.canAddToMyList
      this.toastr.success('Succesfully removed from your list')
      this.moviesDBService.myMoviesList.forEach((x, i) => {
        if (x.id == this.movie.id) {
          this.remove = this.moviesDBService.moviesId.splice(i, 1)
          this.remove = this.moviesDBService.myMoviesList.splice(i, 1)
        }
      })
      return
    }
  }

}
