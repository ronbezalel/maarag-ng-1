import { Injectable } from '@angular/core';
import {Movie} from './movie.model';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

const domain = 'http://ws-most-watched-movies.herokuapp.com/';

@Injectable()
export class MovieService {
    private movies: Movie[] = [];



    constructor(private http : Http) { 

    }

    getAllMovies(){
        var url = domain + 'getAllMostWatched';
        return this.http.get(url);
    }

    getMoviesByLimit(min: number, max: number){
        var url = `${domain}getMostWatchedByLimit?min=${min}&max=${max}`;
        return this.http.get(url);
    }

    getMoviesByLang(lang: string){
        var url = `${domain}getMostWatchedByLanguage?lang=${lang}`;
        return this.http.get(url);
    }
}

class IdParams {
    public id: number;

    constructor(id: number){
        this.id = id;
    }
}