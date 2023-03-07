import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development'

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  public url: string;
  private API_KEY = environment.API_KEY_MOVIE_DB

  constructor(private http: HttpClient) {
    this.url = "https://api.themoviedb.org/3"
  }

  getTopRatedSeries():Observable<any>{
    return this.http.get(`${this.url}/tv/top_rated?api_key=${this.API_KEY}`)
  }
  getCurrentlySeries():Observable<any>{
    return this.http.get(`${this.url}/tv/on_the_air?api_key=${this.API_KEY}`)
  }
  getPopularSeries():Observable<any>{
    return this.http.get(`${this.url}/tv/popular?api_key=${this.API_KEY}`)
  }
  getSimilarSeries(id: number):Observable<any>{
    return this.http.get(`${this.url}/tv/${id}/similar?api_key=${this.API_KEY}`)
  }
}
