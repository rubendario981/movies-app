import { Component, Input } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { SeriesService } from 'src/app/services/series.service';
import { Movie } from '../../models/Movie'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [MoviesService, SeriesService]
})
export class CarouselComponent {
  @Input() title: string | undefined;
  @Input() fetchData: string | undefined;
  public data: Movie[]
  public dateNow: string;

  constructor(
    private requestService: MoviesService,
    private reqSeriesService: SeriesService
    ) {
    this.data = []
    this.dateNow = new Date().toISOString().slice(0, 10)
  }

  ngOnInit() {
    switch (this.fetchData) {
      case "popularMovies":
        this.requestService.getPopularMovies().subscribe(
          response => this.data = response.results,
          error => console.log(error)
        )
        break;      
      case "nowPlayingMovies":
        this.requestService.getNowPlayingMovies().subscribe(
          response => this.data = response.results,
          error => console.log(error)
        )
        break;
      case "topRatedMovies":
        this.requestService.getTopRatedMovies().subscribe(
          response => this.data = response.results,
          error => console.log(error)
        )
        break;
      case "upCommingMovies": 
        this.requestService.getUpCommingMovies().subscribe(
          response => this.data = response.results.filter((word: any) => word.release_date > this.dateNow),
          error => console.log(error)
        )
        break;
      case "topRatedSeries":
        this.reqSeriesService.getTopRatedSeries().subscribe(
          response => this.data = response.results,
          error => console.log(error)
        )
        break;
      case "nowPlayingSeries":
        this.reqSeriesService.getCurrentlySeries().subscribe(
          response => this.data = response.results.sort((a: any, b: any) => b.vote_average - a.vote_average),
          error => console.log(error)
        )
        break;
      case "popularSeries":
        this.reqSeriesService.getPopularSeries().subscribe(
          response => this.data = response.results,
          error => console.log(error)
        )
        break;

      default:
        break;
    }    
  }
}
