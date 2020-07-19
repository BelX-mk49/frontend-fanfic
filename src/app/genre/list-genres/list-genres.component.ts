import { Component, OnInit } from '@angular/core';
import { GenreModel } from '../genre-response';
import { GenreService } from '../genre.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-list-genres',
  templateUrl: './list-genres.component.html',
  styleUrls: ['./list-genres.component.css']
})
export class ListGenresComponent implements OnInit {

  genres: Array<GenreModel>;
  constructor(private genreService: GenreService) { }

  ngOnInit() {
    this.genreService.getAllGenres().subscribe(data => {
      this.genres = data;
    }, error => {
      throwError(error);
    })
  }
}
