import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Movie } from 'src/app/Models/movies';
import { MoviesDBService } from 'src/app/Services/movies-db.service';
import { INFO_IMAGE_URL, LOGO_URL, PLAY_IMAGE_URL } from 'src/app/constants/config';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  constructor(public domSanitizer: DomSanitizer) {}

  moviesdbService = inject(MoviesDBService)
  logoUrl = LOGO_URL

  playBtnUrl: string = PLAY_IMAGE_URL
  infoBtnUrl: string = INFO_IMAGE_URL

  searchedList: any[] = this.moviesdbService.moviesList

  res: any[] = this.moviesdbService.res

  result: any[]

  trendingMovie: any[] = []

  tvShow: Movie[] = []

  airing: any[] = []

  nextWeek: any[] = []

  bannerMovie!: Movie;

  ngOnInit() {

    this.res.forEach(x => {
      // x = x.title
      this.res = [...new Set(x)]
      x.filter((el:any, id:any) => x.indexOf(el) === id)
      console.log(x)

      console.log(this.res)
    })

    console.log(this.searchedList)
    console.log(this.res)

    // MOVIES

    // this.moviesdbService.getTrendingTVShows().subscribe((result: any) => {
    //   this.tvShow = result.results
    //   this.bannerMovie = this.tvShow[0];
    //   this.moviesdbService
    //     .getTVVideos(this.bannerMovie.id)
    //     .subscribe((res: any) => {
    //       console.log(res)
    //       res.results.find(
    //         (x: any) =>  {
    //           console.log(res.results)
    //           console.log(x)
    //           x.site = 'YouTube'
    //           this.bannerMovie.videoKey = x.key
    //         }
    //       )
    //       console.log(this.bannerMovie)
    //     });
    // })

    // this.moviesdbService.getTrendingMovies().subscribe((result: any) => {
    //   this.trendingMovie = result.results
    // })

    // this.moviesdbService.getAiringTodayTVShows().subscribe((result: any) => {
    //   this.airing = result.results
    // })

    // this.moviesdbService.getOnTheAirTVShows().subscribe((result: any) => {
    //   this.nextWeek = result.results
    // })

  }
}
