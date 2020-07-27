import {Component, OnInit} from '@angular/core';
import {User} from '../../../model/user';
import {Router} from '@angular/router';
import {AuthService} from '../../../service/auth.service';
import {Role} from '../../../model/role';

@Component({
  selector: 'app-auth-template',
  templateUrl: './auth-template.component.html',
  styleUrls: ['./auth-template.component.css']
})
export class AuthTemplateComponent implements OnInit {

  currentUser: User;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.currentUser.subscribe(data => {
      this.currentUser = data;
    });
  }

  ngOnInit() {
  }

  logOut(){
    this.authService.logOut().subscribe(data => {
      this.router.navigate(['/login']);
    });
  }

  get isAdmin(){
    return this.currentUser && this.currentUser.role === Role.ADMIN;
  }

}
