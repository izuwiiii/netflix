import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Movie } from 'src/app/Models/movies';
import { MoviesDBService } from 'src/app/Services/movies-db.service';
import { INFO_IMAGE_URL, LOGO_URL, PLAY_IMAGE_URL } from 'src/app/constants/config';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TvshowsComponent {
  constructor(public domSanitizer: DomSanitizer) {}

  moviesdbService = inject(MoviesDBService)
  logoUrl = LOGO_URL

  playBtnUrl: string = PLAY_IMAGE_URL
  infoBtnUrl: string = INFO_IMAGE_URL

  airingTodayTV: Movie[] = []
  onTheAirTV: any[] = []
  popularTV: Movie[] = []
  trendingTV: any[] = []

  comediesShows: any[] = []
  dramasShows: any[] = []
  animations: any[] = []
  fantasy: any[] = []

  bannerMovie!: Movie;

  ngOnInit() {

    // TV

    this.moviesdbService.getAiringTodayTVShows().subscribe((result:any) => {
      this.airingTodayTV = result.results
      console.log(result.results)

    })
    this.moviesdbService.getOnTheAirTVShows().subscribe((result:any) => {
      this.onTheAirTV = result.results
    })
    this.moviesdbService.getPopularTVShows().subscribe((result:any) => {
      this.popularTV = result.results
      this.bannerMovie = this.popularTV[0];
      this.moviesdbService
        .getTVVideos(this.bannerMovie.id)
        .subscribe((res: any) => {
          console.log(res)
          res.results.find(
            (x: any) =>  {
              console.log(res.results)
              console.log(x)
              x.site = 'YouTube'
              this.bannerMovie.videoKey = x.key
            }
          )
          console.log(this.bannerMovie)
        });
    })
    this.moviesdbService.getTrendingTVShows().subscribe((result:any) => {
      this.trendingTV = result.results
    })

    // Comedies

    this.moviesdbService.getComediesTV().subscribe((result:any) => {
      this.comediesShows = result.results
    })

    // Dramas
    
    this.moviesdbService.getDramasTV().subscribe((result:any) => {
      this.dramasShows = result.results
    })

    // Animations
    
    this.moviesdbService.getAnimationsTV().subscribe((result:any) => {
      this.animations = result.results
    })

    // Sci-Fi & Fantasy 

        
    this.moviesdbService.getFantasyTV().subscribe((result:any) => {
      this.fantasy = result.results
    })

  }
}
