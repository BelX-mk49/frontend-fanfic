import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenreModel } from './genre-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  constructor(private http: HttpClient) { }

  getAllGenres(): Observable<Array<GenreModel>> {
    return this.http.get<Array<GenreModel>>('https://backend-fanfic.herokuapp.com/api/genre/getAll');
  }

  createGenre(genreModel: GenreModel): Observable<GenreModel> {
    return this.http.post<GenreModel>('https://backend-fanfic.herokuapp.com/api/genre/create', genreModel);
  }
}
