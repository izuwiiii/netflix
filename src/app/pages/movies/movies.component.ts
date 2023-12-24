import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Movie } from 'src/app/Models/movies';
import { MoviesDBService } from 'src/app/Services/movies-db.service';
import { INFO_IMAGE_URL, LOGO_URL, PLAY_IMAGE_URL } from 'src/app/constants/config';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  constructor(public domSanitizer: DomSanitizer) {}

  moviesdbService = inject(MoviesDBService)
  logoUrl = LOGO_URL

  playBtnUrl: string = PLAY_IMAGE_URL
  infoBtnUrl: string = INFO_IMAGE_URL

  trendingMovie: any[] = []

  actionMovies: any[] = []

  childrenMovies: any[] = []

  thrillerMovies: any[] = []

  tvMovies: Movie[] = []

  popularMovie: any[] = []
  nowPlayingMovie: any[] = []
  topRatedMovie: any[] = []
  upcomingMovie: any[] = []

  bannerMovie!: Movie;

  ngOnInit() {

    // MOVIES

    this.moviesdbService.getTrendingMovies().subscribe((result: any) => {
      this.trendingMovie = result.results
      this.bannerMovie = this.trendingMovie[0];
      this.moviesdbService
        .getMovieVideos(this.bannerMovie.id)
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

    this.moviesdbService.getActionMovies().subscribe((result:any) => {
      this.actionMovies = result.results
    })

    this.moviesdbService.getFamilyMovies().subscribe((result:any) => {
      this.childrenMovies = result.results
    })

    this.moviesdbService.getThrillerMovies().subscribe((result:any) => {
      this.thrillerMovies = result.results
    })

    this.moviesdbService.getTVMovies().subscribe((result:any) => {
      this.tvMovies = result.results
    })


  }

}
