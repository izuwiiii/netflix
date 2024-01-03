import { Component, inject } from '@angular/core';
import { MoviesDBService } from 'src/app/Services/movies-db.service';
import { INFO_IMAGE_URL, LOGO_URL, PLAY_IMAGE_URL } from 'src/app/constants/config';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent {
  moviesDBService = inject(MoviesDBService)
  logoUrl = LOGO_URL

  playBtnUrl: string = PLAY_IMAGE_URL
  infoBtnUrl: string = INFO_IMAGE_URL

  myList: any[] = []

  ngOnInit() {

    // MOVIES

    this.myList = this.moviesDBService.myMoviesList


  }
}
