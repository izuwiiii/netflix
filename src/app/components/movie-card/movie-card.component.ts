import { Component, Input } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() title = '';
  @Input() movie: any = {};
  @Input() movieList: any[] = [];


}
