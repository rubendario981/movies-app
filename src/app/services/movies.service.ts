import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  public url: string

  constructor(private http: HttpClient) {
    this.url = "https://api.themoviedb.org/3"
  }

  getPopularMovies():Observable<any>{
    return this.http.get(this.url + "/movie/popular?api_key=0a2331d13cac732215ae78f5219073bb");
  }
  getNowPlayingMovies():Observable<any>{
    return this.http.get(this.url + "/movie/now_playing?api_key=0a2331d13cac732215ae78f5219073bb")
  }
  getUpCommingMovies():Observable<any>{
    return this.http.get(this.url + "/movie/upcoming?api_key=0a2331d13cac732215ae78f5219073bb")
  }
  getLatestdMovies():Observable<any>{
    return this.http.get(this.url + "/movie/latest?api_key=0a2331d13cac732215ae78f5219073bb")
  }
  getTopRatedMovies():Observable<any>{
    return this.http.get(this.url + "/movie/top_rated?api_key=0a2331d13cac732215ae78f5219073bb")
  }
  getSimilarMovies(id: number):Observable<any>{
    return this.http.get(`${this.url}/movie/${id}/similar?api_key=0a2331d13cac732215ae78f5219073bb`)
  }

}
