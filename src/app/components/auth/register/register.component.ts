import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../service/auth.service';
import {User} from 'src/app/model/user';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  user: User = new User();
  errorMessage: string;
  confirmPassword: any;

  constructor(private authService: AuthService, private router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  register(){
    this.authService.register(this.user).subscribe(data => {
      this.router.navigate(['/login'],
        { queryParams: { registered: 'true' } });
    },err => {
      this.errorMessage = "Username is already exist";
      this.toastr.error('Registration Failed! Please try again');
    });
  }
}
