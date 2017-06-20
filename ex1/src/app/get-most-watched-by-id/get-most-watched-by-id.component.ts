import { Component, OnInit } from '@angular/core';
import { Movie } from '../services/movie.model';
import { MovieService } from '../services/movies.service';

@Component({
  selector: 'app-get-most-watched-by-id',
  templateUrl: './get-most-watched-by-id.component.html',
  styleUrls: ['./get-most-watched-by-id.component.css'],
  providers: [MovieService]
})
export class GetMostWatchedByIdComponent implements OnInit {
  selectedId: number;

  selecteMovie: Movie;

  constructor(private moviesService: MovieService) { }

  getMovieById(){
      //this.moviesService.getMovieById(this.selectedId);
  }

  ngOnInit() {
  }

}
