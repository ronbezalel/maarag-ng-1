import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movies.service';
import { Movie } from '../services/movie.model';
import { Response } from '@angular/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [MovieService]
})
export class MainComponent implements OnInit {

        movies : Movie[] = [];
        constructor(private moviesService: MovieService) {
            this.load();
        }
        
        load(){
            this.moviesService.getAllMovies()
            .subscribe((response: Response) => {
                var rawMoives = response.json();
                for(var i in rawMoives){
                    var rawMovie = rawMoives[i];
                    var movie = new Movie(rawMovie.id, rawMovie.name, rawMovie.views, rawMovie.description);
                    this.movies.push(movie);
                }
            })
        }

        ngOnInit() {

        }

}
