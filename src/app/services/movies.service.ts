import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {  
  public url: string;
  private API_KEY = environment.API_KEY_MOVIE_DB

  constructor(private http: HttpClient) {
    this.url = "https://api.themoviedb.org/3"
        
  }

  getPopularMovies(): Observable<any> {
    return this.http.get(this.url + "/movie/popular?api_key=" + this.API_KEY);
  }
  getNowPlayingMovies(): Observable<any> {
    return this.http.get(this.url + "/movie/now_playing?api_key=" + this.API_KEY)
  }
  getUpCommingMovies(): Observable<any> {
    return this.http.get(this.url + "/movie/upcoming?api_key=" + this.API_KEY)
  }
  getLatestdMovies(): Observable<any> {
    return this.http.get(this.url + "/movie/latest?api_key=" + this.API_KEY)
  }
  getTopRatedMovies(): Observable<any> {
    return this.http.get(this.url + "/movie/top_rated?api_key=" + this.API_KEY)
  }
  getMoviesTrend(): Observable<any> {
    return this.http.get(this.url + "/trending/movie/day?api_key=" + this.API_KEY)
  }
  getSimilarMovies(id: number): Observable<any> {
    return this.http.get(`${this.url}/movie/${id}/similar?api_key=${this.API_KEY}`)
  }
}
