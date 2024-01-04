import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Movie } from 'src/app/Models/movies';
import { MoviesDBService } from 'src/app/Services/movies-db.service';
import { INFO_IMAGE_URL, LOGO_URL, PLAY_IMAGE_URL } from 'src/app/constants/config';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent {
  constructor(public domSanitizer: DomSanitizer) {}

  moviesdbService = inject(MoviesDBService)
  logoUrl = LOGO_URL

  playBtnUrl: string = PLAY_IMAGE_URL
  infoBtnUrl: string = INFO_IMAGE_URL

  trendingMovie: any[] = []

  tvShow: Movie[] = []

  airing: any[] = []

  nextWeek: any[] = []

  bannerMovie!: Movie;



  ngOnInit() {

    // MOVIES

    this.moviesdbService.getTrendingTVShows().subscribe((result: any) => {
      this.tvShow = result.results
      this.bannerMovie = this.tvShow[0];
      this.moviesdbService
        .getTVVideos(this.bannerMovie.id)
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

        });
    })

    this.moviesdbService.getTrendingMovies().subscribe((result: any) => {
      this.trendingMovie = result.results
    })

    this.moviesdbService.getAiringTodayTVShows().subscribe((result: any) => {
      this.airing = result.results
    })

    this.moviesdbService.getOnTheAirTVShows().subscribe((result: any) => {
      this.nextWeek = result.results
    })

  }
}
