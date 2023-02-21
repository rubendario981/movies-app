import { Component, Input } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from '../../models/Movie'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [MoviesService]
})
export class CarouselComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/300/200`);
  @Input() titulo: any;

  public moviesPopular: Movie[]
  public moviesUpcomming: Movie[]
  public moviesNowPlaying: Movie[]
  public moviesLatest: Movie[]
  public moviesTopRated: Movie[]

  constructor(private requestService: MoviesService){
    this.moviesPopular = []
    this.moviesTopRated = []
    this.moviesUpcomming = []
    this.moviesNowPlaying = []
    this.moviesLatest = []
  }
  
  ngOnInit(){
    this.requestService.getPopularMovies().subscribe(
      response => this.moviesPopular = response.results,
      error => console.log(error)
    )

    this.requestService.getTopRatedMovies().subscribe(
      response=> this.moviesTopRated = response.results,
      error => console.log("Cannot get top rated movies", error)      
    )

    this.requestService.getUpCommingMovies().subscribe(
      response=> this.moviesUpcomming = response.results,
      error => console.log("Cannot get comming soon movies", error)      
    )

    this.requestService.getNowPlayingMovies().subscribe(
      response=> this.moviesNowPlaying = response.results,
      error => console.log("Cannot get top rated movies", error)      
    )
    this.requestService.getLatestdMovies().subscribe(
      response=> this.moviesLatest = response.results,
      error => console.log("Cannot get top rated movies", error)      
    )
  }
}
