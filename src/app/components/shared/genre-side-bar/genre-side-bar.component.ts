import {Component, OnInit} from '@angular/core';
import {GenreService} from 'src/app/service/genre.service';
import {GenreModel} from 'src/app/model/genre-response';

@Component({
  selector: 'app-genre-side-bar',
  templateUrl: './genre-side-bar.component.html',
  styleUrls: ['./genre-side-bar.component.css']
})
export class GenreSideBarComponent implements OnInit {
  genres: Array<GenreModel> = [];
  displayViewAll: boolean;

  constructor(private genreService: GenreService) {
    this.genreService.getAllGenres().subscribe(data => {
      if (data.length > 3) {
        this.genres = data.splice(0, 3);
        this.displayViewAll = true;
      } else {
        this.genres = data;
      }
    });
  }

  ngOnInit(): void { }

}
