import { AfterViewInit, Component, DoCheck, OnChanges, OnInit, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { allMovies } from 'src/app/Models/allMoviesList';
import { Movie } from 'src/app/Models/movies';
import { MoviesDBService } from 'src/app/Services/movies-db.service';
import { INFO_IMAGE_URL, LOGO_URL, PLAY_IMAGE_URL } from 'src/app/constants/config';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
  constructor() {}

  moviesdbService = inject(MoviesDBService)
  
  logoUrl = LOGO_URL

  searchedList: any[] = this.moviesdbService.moviesList

  res: any[] = []

  searchedResults!: allMovies;

  // all!: allMovies;

  canLoad: boolean = true;

  showMore() {
    this.moviesdbService.page++
    console.log(this.moviesdbService.page)
    this.moviesdbService.getAll(this.moviesdbService.page).subscribe((result: any) => {
      this.searchedResults = result.results
      console.log(result)
      if (result.total_pages == this.moviesdbService.page) {
        this.canLoad = false
      } else {
        this.canLoad = true
        console.log(this.res)
      }
      for (let item of result.results) {
        if (item.adult === false && item.poster_path) {
          this.moviesdbService.ress.push(item)
        }
      }
      // this.moviesdbService.ress = this.res
      console.log(this.moviesdbService.ress)

    })
  }



  ngOnInit() {
    this.moviesdbService.search()

  }
}
