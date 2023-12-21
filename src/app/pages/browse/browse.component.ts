import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesDBService } from 'src/app/Services/movies-db.service';
import { INFO_IMAGE_URL, LOGO_URL, PLAY_IMAGE_URL } from 'src/app/constants/config';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent {

  constructor(private router: Router) {

  }

  moviesdbService = inject(MoviesDBService)
  logoUrl = LOGO_URL

  playBtnUrl: string = PLAY_IMAGE_URL
  infoBtnUrl: string = INFO_IMAGE_URL

  popularMovie: any[] = []
  nowPlayingMovie: any[] = []
  topRatedMovie: any[] = []
  trendingMovie: any[] = []
  upcomingMovie: any[] = []

  popularTV: any[] = []
  trendingTV: any[] = []

  comediesTV: any[] = []


  ngOnInit() {

    // MOVIES

    this.moviesdbService.getPopularMovies().subscribe((result:any) => {
      this.popularMovie = result.results
    })
    this.moviesdbService.getNowPlayingMovies().subscribe((result:any) => {
      this.nowPlayingMovie = result.results
    })
    this.moviesdbService.getTrendingMovies().subscribe((result:any) => {
      this.trendingMovie = result.results
    })
    this.moviesdbService.getTopRatedMovies().subscribe((result:any) => {
      this.topRatedMovie = result.results
    })
    this.moviesdbService.getUpcomingMovies().subscribe((result:any) => {
      this.upcomingMovie = result.results
    })

    // TV

    this.moviesdbService.getPopularTVShows().subscribe((result:any) => {
      this.popularTV = result.results
    })
    this.moviesdbService.getTrendingTVShows().subscribe((result:any) => {
      this.trendingTV = result.results
    })

    // Comedies

    this.moviesdbService.getComediesTV().subscribe((result:any) => {
      this.comediesTV = result.results
    })


  }

}
