import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Role} from '../../../model/role';
import {AuthService} from '../../../service/auth.service';
import {User} from '../../../model/user';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  currentUser: User;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.currentUser.subscribe(data => {
      this.currentUser = data;
    });
  }

  ngOnInit() {
  }

  goToCreatePost() {
    this.router.navigateByUrl('/create-post');
  }

  goToCreateGenre() {
    this.router.navigateByUrl('/create-genre');
  }

  get isAdmin(){
    return this.currentUser && this.currentUser.role === Role.ADMIN;
  }

}
