import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { allMovies } from 'src/app/Models/allMoviesList';
import { MoviesDBService } from 'src/app/Services/movies-db.service';
import { AVATAR_IMAGE_URL, DOWNARROW_IMAGE_URL, GIFTBOX_IMAGE_URL, LOGO_URL, NOTIFICATIONS_IMAGE_URL, SEARCH_IMAGE_URL } from 'src/app/constants/config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  constructor(private router: Router, private service: MoviesDBService) {
    document.addEventListener('scroll', () => {
      this.scroll = window.scrollY
      if (this.scroll == 0) {
        this.transparentHeader = true
      } else {
        this.transparentHeader = false
      }
      // console.log(this.scroll)
    })
  }

  transparentHeader: boolean = true;

  logoUrl: string = LOGO_URL

  searchUrl: string = SEARCH_IMAGE_URL
  downarrowUrl: string = DOWNARROW_IMAGE_URL
  giftboxUrl: string = GIFTBOX_IMAGE_URL
  avatarUrl: string = AVATAR_IMAGE_URL
  notificationsUrl: string = NOTIFICATIONS_IMAGE_URL

  username: string = this.service.name

  input: string = ''

  srcList: any[] = []

  all!: allMovies;

  scroll: number = window.scrollY
 
  navigateToMain() {
    this.router.navigateByUrl('/Login')
  }

  searchShow(text) {
    this.input = text.value
    this.service.searchName = text.value
    console.log(this.service.searchName)

  }

  ngOnInit() {
  }
}
