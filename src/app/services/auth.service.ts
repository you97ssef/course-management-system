import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  public isAuthenticated(): boolean {
    let user = localStorage.getItem('connected');

    return user !== null;
  }

  public isUserInstructor() {
    let user: User = JSON.parse(localStorage.getItem('connected')!);
    return user.role === 'instructor';
  }
}
