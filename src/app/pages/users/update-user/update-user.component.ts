import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {
  showPassword = false;
  user: User;

  constructor(private usersService: UsersService, private router: Router) {
    this.user = JSON.parse(localStorage.getItem('connected')!);
  }

  ngOnInit(): void {}

  updateAccount() {
    this.usersService.updateAccount(this.user);
    this.router.navigate(['/']);
  }
}
