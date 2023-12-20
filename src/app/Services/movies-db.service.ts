import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { MOVIES_URL, tmbdConfig } from '../constants/config';

@Injectable({
  providedIn: 'root'
})
export class MoviesDBService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  // headers = new HttpHeaders({
  //   'Accept': 'application/json',
  //   'Authorization': 'Bearer '+accesToken,
  // });

  // options = { headers: this.headers }
  movieList: any[] = []

  name: string = ''

  getHeaders() {
    let headers = new HttpHeaders()
    headers = headers.append('Accept', 'application/json')
    headers = headers.append('Authorization', 'Bearer '+tmbdConfig.accesToken)
    return headers
  }

  getPopularMovies() {
    const headers = this.getHeaders()
    return this.http.get('https://api.themoviedb.org/3/movie/popular', {
      headers: headers
    })
  }

  getNowPlayingMovies() {
    const headers = this.getHeaders()
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing', {
      headers: headers
    })
  }

  getTopRatedMovies() {
    const headers = this.getHeaders()
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated', {
      headers: headers
    })
  }

  getUpcomingMovies() {
    const headers = this.getHeaders()
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming', {
      headers: headers
    })
  }
  
}
