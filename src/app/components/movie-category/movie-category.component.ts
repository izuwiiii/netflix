import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-movie-category',
  templateUrl: './movie-category.component.html',
  styleUrls: ['./movie-category.component.scss']
})
export class MovieCategoryComponent {

  @Input() title='';
  @Input() movieList:any[]=[];

}
