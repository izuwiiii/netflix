import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/Models/movies';
import { MoviesDBService } from 'src/app/Services/movies-db.service';
import {
  INFO_IMAGE_URL,
  LOGO_URL,
  PLAY_IMAGE_URL,
} from 'src/app/constants/config';
import { DomSanitizer} from '@angular/platform-browser';
import { allMovies } from 'src/app/Models/allMoviesList';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {
  constructor(private router: Router, public domSanitizer: DomSanitizer) {
    // document.addEventListener('scroll', () => {
    //   console.log(window.scrollY)
    // })
  }
  
  moviesdbService = inject(MoviesDBService);
  logoUrl = LOGO_URL;

  playBtnUrl: string = PLAY_IMAGE_URL;
  infoBtnUrl: string = INFO_IMAGE_URL;

  allMovies: any[] = []

  popularMovie: Movie[] = [];
  nowPlayingMovie: any[] = [];
  topRatedMovie: any[] = [];
  trendingMovie: any[] = [];
  upcomingMovie: any[] = [];

  popularTV: any[] = [];
  trendingTV: any[] = [];

  comediesTV: any[] = [];

  bannerMovie!: Movie;

  showDetail: boolean = false

  scroll: number = 0


  getMovieDetails(event) {
    console.log(event)
    this.moviesdbService.currentMovie = event.movie

  }

  ngOnInit() {
    // MOVIES


    console.log(window.scrollY)

     this.moviesdbService.getPopularMovies().subscribe((result: any) => {
      this.popularMovie = result.results;
      this.bannerMovie = this.popularMovie[0];
      this.moviesdbService
        .getMovieVideos(this.bannerMovie.id)
        .subscribe((res: any) => {
          // console.log(res)
          res.results.find(
            (x: any) =>  {
              // console.log(res.results)
              // console.log(x)
              x.site = 'YouTube'
              this.bannerMovie.videoKey = x.key
            }
          )
          // console.log(this.bannerMovie)
        });
    });
    this.moviesdbService.getNowPlayingMovies().subscribe((result: any) => {
      this.nowPlayingMovie = result.results;
      // console.log(this.allMovies)
    });
    this.moviesdbService.getTrendingMovies().subscribe((result: any) => {
      this.trendingMovie = result.results;
    });
    this.moviesdbService.getTopRatedMovies().subscribe((result: any) => {
      this.topRatedMovie = result.results;
      // console.log(this.allMovies)
    });
    this.moviesdbService.getUpcomingMovies().subscribe((result: any) => {
      this.upcomingMovie = result.results;
      // console.log(this.allMovies)
    });

    // TV

    this.moviesdbService.getPopularTVShows().subscribe((result: any) => {
      this.popularTV = result.results;
      // this.allMovies.push(result.results);
    });
    this.moviesdbService.getTrendingTVShows().subscribe((result: any) => {
      this.trendingTV = result.results;
    });

    // Comedies

    this.moviesdbService.getComediesTV().subscribe((result: any) => {
      this.comediesTV = result.results;
      // this.allMovies.push(result.results);
      // console.log(this.comediesTV)
    });



    // this.moviesdbService.moviesList(this.allMovies)
  }
}
