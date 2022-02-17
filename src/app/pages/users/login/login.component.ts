import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  showPassword = false;

  constructor(
    private service: UsersService,
    private auth: AuthService,
    private router: Router
  ) {
    if (this.auth.isAuthenticated()) this.router.navigate(['']);
  }

  login = { email: '', password: '' };

  ngOnInit(): void {}

  onLogin() {
    let user = this.service.login(this.login.email, this.login.password);
    if (user === undefined) {
    } else {
      localStorage.setItem('connected', JSON.stringify(user));
      this.router.navigate(['']);
    }
  }

  fillForm() {
    let user = this.service.getRandomUser();

    this.login.email = user.email;
    this.login.password = user.password;
  }
}
