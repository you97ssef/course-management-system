import { Injectable } from '@angular/core';
import { Db } from '../data/db';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {
    if (localStorage.getItem('users') === null) {
      localStorage.setItem('users', JSON.stringify(Db.users));
    }
  }

  login(loginEmail: string, loginPassword: string) {
    let users: Array<User> = JSON.parse(localStorage.getItem('users')!);

    return users.find(
      ({ email, password }) =>
        email === loginEmail && password === loginPassword
    );
  }

  updateAccount(newData: User) {
    let users: Array<User> = JSON.parse(localStorage.getItem('users')!);

    for (let user of users) {
      if (user.id === newData.id) {
        users[users.indexOf(user)] = newData;
      }
    }

    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('connected', JSON.stringify(newData));
  }

  getRandomUser(){
    let users: Array<User> = JSON.parse(localStorage.getItem('users')!);

    return users[Math.floor(Math.random() * users.length)];
  }
}
