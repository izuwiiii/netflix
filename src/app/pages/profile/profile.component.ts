import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesDBService } from 'src/app/Services/movies-db.service';
import { AVATAR_IMAGE_URL, GIT_IMAGE_URL, INST_IMAGE_URL, LINK_IMAGE_URL } from 'src/app/constants/config';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(private router: Router) { }

  moviesDBService = inject(MoviesDBService)
  logoUrl = AVATAR_IMAGE_URL

  myList: any[] = []

  gitUrl: string = GIT_IMAGE_URL
  instUrl: string = INST_IMAGE_URL
  linkUrl:string = LINK_IMAGE_URL
  
  ngOnInit() {
    this.myList = this.moviesDBService.myMoviesList
  }
}
