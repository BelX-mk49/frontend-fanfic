import {Component, OnInit} from '@angular/core';
import {User} from '../../../model/user';
import {Router} from '@angular/router';
import {AuthService} from '../../../service/auth.service';

@Component({
  selector: 'app-admin-template',
  templateUrl: './admin-template.component.html',
  styleUrls: ['./admin-template.component.css']
})
export class AdminTemplateComponent implements OnInit {
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

}
