import { Component } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent {
  public listMoviesTrend!: Movie[]

  constructor(private httpMovies: MoviesService){

  }

  ngOnInit(){
    this.httpMovies.getMoviesTrend().subscribe(
      response => this.listMoviesTrend = response.results
    )
  }

  
}
