import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GenreModel } from '../genre-response';
import { Router } from '@angular/router';
import { GenreService } from '../genre.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit {
  createGenreForm: FormGroup;
  genreModel: GenreModel;
  title = new FormControl('');
  description = new FormControl('');

  constructor(private router: Router, private genreService: GenreService) {
    this.createGenreForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
    this.genreModel = {
      name: '',
      description: ''
    }
  }

  ngOnInit() {
  }

  discard() {
    this.router.navigateByUrl('/');
  }

  createGenre() {
    this.genreModel.name = this.createGenreForm.get('title')
    .value;
    this.genreModel.description = this.createGenreForm.get('description')
    .value;
    this.genreService.createGenre(this.genreModel).subscribe(data => {
      this.router.navigateByUrl('/list-genres');
    }, error => {
      throwError(error);
    })
  }
}
