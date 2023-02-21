import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  public url: string;
  public api_key: string
  constructor(private http: HttpClient) {
    this.url = "https://api.themoviedb.org/3"
    this.api_key ="0a2331d13cac732215ae78f5219073bb"
  }

  getTopRatedSeries():Observable<any>{
    return this.http.get(`${this.url}/tv/top_rated?api_key=${this.api_key}`)
  }
  getLatestSeries():Observable<any>{
    return this.http.get(`${this.url}/tv/latest?api_key=${this.api_key}`)
  }
  getPopularSeries():Observable<any>{
    return this.http.get(`${this.url}/tv/popular?api_key=${this.api_key}`)
  }
}
