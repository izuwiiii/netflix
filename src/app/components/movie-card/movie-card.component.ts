import { Component, Input, inject } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { MoviesDBService } from 'src/app/Services/movies-db.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {

  moviesDBService = inject(MoviesDBService)

  @Input() title = '';
  @Input() movie: any = {};
  @Input() movieList: any[] = [];

  canAddToList: boolean = true

  addToMyList() {

    // if (this.moviesDBService.myMoviesList.includes(this.movie)) {
    //   this.moviesDBService.canAddToList = false
    //   return
    // } else {
    //   this.moviesDBService.canAddToList = true
    // }

  }

}
