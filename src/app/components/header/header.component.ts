import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Role} from '../../model/role';
import {User} from '../../model/user';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: User;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.currentUser.subscribe(data => {
      this.currentUser = data;
    });
  }

  ngOnInit() {
  }

  logout(){
    this.authService.logOut().subscribe(data => {
      this.router.navigate(['/login']);
    });
  }

  goToDashboard(){
    this.router.navigateByUrl('/dashboard')
  }

  goToUserProfile() {
    this.router.navigateByUrl('/user-profile/' + this.currentUser.username);
  }

  get isAdmin(){
    return this.currentUser && this.currentUser.role === Role.ADMIN;
  }
}
