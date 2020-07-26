import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {GenreModel} from 'src/app/model/genre-response';
import {Router} from '@angular/router';
import {PostService} from 'src/app/components/shared/post.service';
import {GenreService} from 'src/app/service/genre.service';
import {throwError} from 'rxjs';
import {CreatePostPayload} from './create-post.payload';
import {User} from '../../../model/user';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  createPostForm: FormGroup;
  postPayload: CreatePostPayload;
  genres: Array<GenreModel>;

  constructor(private router: Router, private postService: PostService,
    private genreService: GenreService) {
    this.postPayload = {
      postName: '',
      url: '',
      description: '',
      genreName: '',
      user: new User,
    }
  }

  ngOnInit() {
    this.createPostForm = new FormGroup({
      postName: new FormControl('', Validators.required),
      genreName: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
    this.genreService.getAllGenres().subscribe((data) => {
      this.genres = data;
    }, error => {
      throwError(error);
    });
  }

  createPost() {
    this.postPayload.postName = this.createPostForm.get('postName').value;
    this.postPayload.genreName = this.createPostForm.get('genreName').value;
    this.postPayload.url = this.createPostForm.get('url').value;
    this.postPayload.description = this.createPostForm.get('description').value;
    this.postPayload.user = JSON.parse(localStorage.getItem("currentUser"));
    this.postService.createPost(this.postPayload).subscribe((data) => {
      this.router.navigateByUrl('/');
    }, error => {
      throwError(error);
    })
  }

  discardPost() {
    this.router.navigateByUrl('/');
  }

}
