import {Component} from '@angular/core';
import {Router, RoutesRecognized} from '@angular/router';
import {User} from './model/user';
import {Role} from './model/role';
import {AuthService} from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-fanfic';
  currentUser: User;
  isAdminPanel: boolean = false;
  constructor(private userService: AuthService, private router: Router){
    this.userService.currentUser.subscribe(data => {
      this.currentUser = data;
      this.userChanged();
    });
  }

  userChanged(){
    if(!this.currentUser || Role.ADMIN !== this.currentUser.role){
      this.isAdminPanel = false;
      return;
    }
    this.router.events.subscribe((evt) => {
      if(evt instanceof RoutesRecognized){
        const roles = evt.state.root.firstChild.data.roles;
        if(roles && roles.indexOf(this.currentUser.role)!== -1){
          this.isAdminPanel = true;
        }
      }
    });
  }
}
