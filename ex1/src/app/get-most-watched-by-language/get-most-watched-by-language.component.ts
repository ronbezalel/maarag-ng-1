import { Component, OnInit } from '@angular/core';
import { Movie } from '../services/movie.model';
import { MovieService } from '../services/movies.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-get-most-watched-by-language',
  templateUrl: './get-most-watched-by-language.component.html',
  styleUrls: ['./get-most-watched-by-language.component.css'],
  providers: [MovieService]
})
export class GetMostWatchedByLanguageComponent implements OnInit {
    lang: string
    min: number;
    max: number;
    foundsMovies: Movie[] = [];
  constructor(private moviesService: MovieService) { }

  getMovieByLang(){
      this.moviesService.getMoviesByLang(this.lang)
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
