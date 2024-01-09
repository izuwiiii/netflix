import { Component } from '@angular/core';
import { Genre, ProductionCompany, movieDetails } from 'src/app/Models/movieDetails';
import { MoviesDBService } from './../../Services/movies-db.service';
import { OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { allMovies } from 'src/app/Models/allMoviesList';
import { GetMovie } from 'src/app/Models/movie';
import { MINUS_IMAGE_URL, PLAY_IMAGE_URL, PLUS_IMAGE_URL, THUMBS_BLACK_IMAGE_URL, THUMBS_IMAGE_URL, VOLUME_IMAGE_URL } from 'src/app/constants/config';
import { Movie } from 'src/app/Models/movies';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-watch-page',
  templateUrl: './watch-page.component.html',
  styleUrls: ['./watch-page.component.scss']
})
export class WatchPageComponent implements OnInit{
  
  constructor(public domSanitizer: DomSanitizer) { }

  bannerMovie!: Movie;

  errShow: boolean = false

  ngOnInit() {  

    
    this.bannerMovie = this.movie
    console.log(this.movie.media_type);
    this.moviesDBService.getVideos(this.movie.media_type, this.movie.id).subscribe((result: any) => {

      console.log(result)
      console.log(this.movie)

      if (result.results.length == 0) {
        this.errShow = true
        return            
      }
      this.errShow = false       

      result.results.find(
        (x: any) =>  {
          // console.log(res.results)
          console.log(x.key)
          console.log(this.bannerMovie)
          x.site = 'YouTube'
          this.bannerMovie.videoKey = x.key
        }
      )

    })
  }

  selectedMovie: GetMovie;
  movieId: number;
  searchedResults!: allMovies;
  moviesDBService = inject(MoviesDBService)
  activeRoute: ActivatedRoute = inject(ActivatedRoute)

  movie: GetMovie = this.moviesDBService.currentMovie

  playBtnUrl: string = PLAY_IMAGE_URL;

  plusBtnUrl: string = PLUS_IMAGE_URL;
  minusBtnUrl: string = MINUS_IMAGE_URL;

  res: any[] = []

  detailShow: boolean = false

  curMovie!: movieDetails;

  movieGenres: Genre[];

  prodComp: any[] = []
  prodRes: any[] = []

  

}
