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

    // getMovieById(id: number){
    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    //     let options = new RequestOptions({ headers: headers });

    //     var body = new IdParams(id);

    //     let httpPost = this.http.post(' https://ws-most-watched-movies.herokuapp.com/getMostWatchedById', JSON.stringify(body), options);

    //     httpPost.subscribe(success => { // <-------
    //             console.log('suc', success);
    //         }, error => {
    //            console.log('err', error);
    //         });

    //     return httpPost;
    // }

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