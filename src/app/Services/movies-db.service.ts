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
  randomPage: number = 1;

  generatePage() {
    this.randomPage = Math.floor(Math.random() * 5)

  }
  
  // Headers

  getHeaders() {
    this.generatePage()
    let headers = new HttpHeaders()
    headers = headers.append('Accept', 'application/json')
    headers = headers.append('Authorization', 'Bearer '+tmbdConfig.accesToken)
    return headers
  }

  // Movies

  getTrendingMovies() {
    const headers = this.getHeaders()
    return this.http.get('https://api.themoviedb.org/3/trending/movie/day', {
      headers: headers
    })
  }

  getPopularMovies() {
    const headers = this.getHeaders()
    return this.http.get('https://api.themoviedb.org/3/movie/popular', {
      headers: headers
    })
  }

  getNowPlayingMovies() {
    const headers = this.getHeaders()
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing?page='+this.randomPage, {
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
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?page='+this.randomPage, {
      headers: headers
    })
  }

  // TV

  getAiringTodayTVShows() {
    const headers = this.getHeaders()
    return this.http.get('https://api.themoviedb.org/3/tv/airing_today?page='+this.randomPage, {
      headers: headers
    })
  }

  getOnTheAirTVShows() {
    // this.generatePage()
    const headers = this.getHeaders()
    return this.http.get('https://api.themoviedb.org/3/tv/on_the_air?page='+this.randomPage, {
      headers: headers
    })
    
  }

  getPopularTVShows() {
    // this.generatePage()
    const headers = this.getHeaders()
    return this.http.get('https://api.themoviedb.org/3/tv/popular?page='+this.randomPage, {
      headers: headers
    })
  }

  getTrendingTVShows() {
    const headers = this.getHeaders()
    return this.http.get('https://api.themoviedb.org/3/trending/tv/day', {
      headers: headers
    })
  }

  // Comedies

  getComediesTV() {
    const headers = this.getHeaders()
    return this.http.get('https://api.themoviedb.org/3/discover/tv?with_genres=35', {
      headers: headers,

    })
  }

  // Dramas id18

  getDramasTV() {
    const headers = this.getHeaders()
    return this.http.get('https://api.themoviedb.org/3/discover/tv?with_genres=18&page='+this.randomPage, {
      headers: headers,
    })
  }

  // Animations

  getAnimationsTV() {
    const headers = this.getHeaders()
    return this.http.get('https://api.themoviedb.org/3/discover/tv?with_genres=16', {
      headers: headers,
    })
  }

  // Sci-Fi & Fantasy id10765

  getFantasyTV() {
    const headers = this.getHeaders()
    return this.http.get('https://api.themoviedb.org/3/discover/tv?with_genres=10765', {
      headers: headers,
    })
  }
  
}
