import { Component, inject } from '@angular/core';
import { MoviesDBService } from 'src/app/Services/movies-db.service';
import { INFO_IMAGE_URL, LOGO_URL, PLAY_IMAGE_URL } from 'src/app/constants/config';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent {
  moviesdbService = inject(MoviesDBService)
  logoUrl = LOGO_URL

  playBtnUrl: string = PLAY_IMAGE_URL
  infoBtnUrl: string = INFO_IMAGE_URL

  trendingMovie: any[] = []

  tvShow: any[] = []

  airing: any[] = []

  nextWeek: any[] = []

  ngOnInit() {

    // MOVIES

    this.moviesdbService.getTrendingMovies().subscribe((result: any) => {
      this.trendingMovie = result.results
    })

    this.moviesdbService.getTrendingTVShows().subscribe((result: any) => {
      this.tvShow = result.results
    })

    
    this.moviesdbService.getAiringTodayTVShows().subscribe((result: any) => {
      this.airing = result.results
    })

    this.moviesdbService.getOnTheAirTVShows().subscribe((result: any) => {
      this.nextWeek = result.results
    })

  }
}
