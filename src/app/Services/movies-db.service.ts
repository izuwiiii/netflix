import { Movie } from './../Models/movies';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { MOVIES_URL, tmbdConfig } from '../constants/config';
import { GetMovie } from '../Models/movie';


@Injectable({
  providedIn: 'root'
})
export class MoviesDBService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() { }

  scroll: number = 0

  getScrollValue() {
    this.scroll = window.scrollY
  }

  currentMovie: GetMovie;

  movDetail: boolean = false

  // My list

  moviesId: any[] = []

  canAddToList: boolean = true

  myMoviesList: any[] = []

  // Get All

  page: number = 1

  searchName: string = ''

  getAll(page) {
    const headers = this.getHeaders()
    return this.http.get(`https://api.themoviedb.org/3/search/multi?query=${this.searchName || 'one piece'}&include_adult=true&language=en-US&page=${page}`, {
      headers: headers,
    })
  }

  // movieList: any = {}

  name: string = ''
  randomPage: number = 1;

  moviesList: any = []
  res: any = []

  generatePage() {
    this.randomPage = Math.floor(Math.random() * 5)
  }
  
  // Headers

  getHeaders() {
    // this.generatePage()
    let headers = new HttpHeaders()
    headers = headers.append('Accept', 'application/json')
    headers = headers.append('Authorization', 'Bearer '+tmbdConfig.accesToken)
    return headers
  }

  // Video

  getMovieVideos(movieId: number) {
    const header = this.getHeaders()
    return this.http.get(
      'https://api.themoviedb.org/3/movie/'+movieId+'/videos',
      {
        headers: header
      }
    )
  }

  getTVVideos(movieId: number) {
    const header = this.getHeaders()
    return this.http.get(
      'https://api.themoviedb.org/3/tv/'+movieId+'/videos',
      {
        headers: header
      }
    )
  }

  // Movies

  getTrendingMovies() {
    const headers = this.getHeaders()
    return this.http.get('https://api.themoviedb.org/3/trending/movie/day', {
      headers: headers
    })
  }

  getPopularMovies<Movie>() {
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

  // Actions id 28

  getActionMovies() {
    const headers = this.getHeaders()
    return this.http.get('https://api.themoviedb.org/3/discover/movie?with_genres=28', {
      headers: headers,
    })
  }

  // Children & Family id 10751

  getFamilyMovies() {
    const headers = this.getHeaders()
    return this.http.get('https://api.themoviedb.org/3/discover/movie?with_genres=10751', {
      headers: headers,
    })
  }

  // Action Thriller id 53

  getThrillerMovies() {
    const headers = this.getHeaders()
    return this.http.get('https://api.themoviedb.org/3/discover/movie?with_genres=53', {
      headers: headers,
    })
  }

  // Top 10 TV Movies id 10770

  getTVMovies() {
    const headers = this.getHeaders()
    return this.http.get('https://api.themoviedb.org/3/discover/movie?with_genres=10770', {
      headers: headers,
    })
  }



  
}
