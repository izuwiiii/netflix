import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesDBService } from 'src/app/Services/movies-db.service';
import { AVATAR_IMAGE_URL, DOWNARROW_IMAGE_URL, GIFTBOX_IMAGE_URL, LOGO_URL, NOTIFICATIONS_IMAGE_URL, SEARCH_IMAGE_URL } from 'src/app/constants/config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router, private service: MoviesDBService) {}

  logoUrl: string = LOGO_URL

  searchUrl: string = SEARCH_IMAGE_URL
  downarrowUrl: string = DOWNARROW_IMAGE_URL
  giftboxUrl: string = GIFTBOX_IMAGE_URL
  avatarUrl: string = AVATAR_IMAGE_URL
  notificationsUrl: string = NOTIFICATIONS_IMAGE_URL

  username: string = this.service.name

  input: string = ''

  srcList: any[] = []
 
  navigateToMain() {
    this.router.navigateByUrl('/Login')
  }

  makeUniq = (arr) => [...new Set(arr)];

  searchShow(text) {
    this.input = text.value
    this.service.moviesList.forEach(item => {
      item.find(x => {
        // console.log(x.title.includes(this.input))
        if (x.title.toLowerCase().includes(this.input.toLowerCase())) {
          // console.log(x.title.toLowerCase())
          // this.srcList.forEach(it => {
          //   // console.log(it.id )
          // })
          this.srcList.push(x)
        }

      })
    })
    // console.log(this.srcList)
    this.service.getSearchedList(this.srcList)
    return this.srcList
  }
}
