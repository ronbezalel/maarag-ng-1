import { Component, OnInit } from '@angular/core';
import { Movie } from '../services/movie.model';
import { MovieService } from '../services/movies.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-get-most-watched-by-limit',
  templateUrl: './get-most-watched-by-limit.component.html',
  styleUrls: ['./get-most-watched-by-limit.component.css'],
  providers: [MovieService]
})
export class GetMostWatchedByLimitComponent implements OnInit {

    min: number;
    max: number;

    foundsMovies: Movie[] = [];

  constructor(private moviesService: MovieService) { }

  getMovieByLimit(){
      this.moviesService.getMoviesByLimit(this.min, this.max)
      .subscribe((response: Response) => {
          var rawMoives = response.json();
            for(var i in rawMoives){
              var rawMovie = rawMoives[i];
              var movie = new Movie(rawMovie.id, rawMovie.name, rawMovie.views, rawMovie.description);
              this.foundsMovies.push(movie);
            }
          });
  }

  ngOnInit() {
  }

}
