import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


export interface IMovie
{
constructor(
  Title: string,
  Year: string,
  Rated: string,
  Released: string,
  Runtime: string,
  Genre: string,
  Director: string,
  Writer: string,
  Actors: string,
  Plot: string,
  Language: string,
  Country: string,
  Awards: string,
  Poster: string,
  //ratings: Ratings,
  Metascore: string,
  Imdbrating: string,
  ImdbVotes: string,
  Imdbid: string,
  Type: string,
  Dvd: string,
  BoxOffice: string,
  Production: string,
  Website: string,
  Response: string
  )
}





@Injectable({
  providedIn: 'root'
})


export class UsersService {


  	private API_URL ="https://www.omdbapi.com/?apikey=a8f0cb9c&t=";

  constructor(private http:HttpClient) {  }



  getMovies(val): Observable<IMovie[]> 
  {
  	var t = this.API_URL + val;
  	return this.http.get<IMovie[]>(t);
	}



}
