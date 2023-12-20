import { Component } from '@angular/core';
import { FACEBOOK_IMAGE_URL, INSTAGRAM_IMAGE_URL, TWITTER_IMAGE_URL, YOUTUBE_IMAGE_URL } from 'src/app/constants/config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  facebook: string = FACEBOOK_IMAGE_URL
  instagram: string = INSTAGRAM_IMAGE_URL
  twitter: string = TWITTER_IMAGE_URL
  youtube: string = YOUTUBE_IMAGE_URL

  socials: string[] = [this.facebook, this.instagram, this.twitter, this.youtube]
}
