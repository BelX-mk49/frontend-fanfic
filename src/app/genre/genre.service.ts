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
    return this.http.get<Array<GenreModel>>('http://localhost:8080/api/genre/getAll');
  }

  createGenre(genreModel: GenreModel): Observable<GenreModel> {
    return this.http.post<GenreModel>('http://localhost:8080/api/genre/create', genreModel);
  }
}
