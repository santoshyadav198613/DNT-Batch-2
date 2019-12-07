import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn = false;
  isAdmin = false;

  constructor() { }

  login(userName: string, password: string): boolean {
    if (userName === 'Admin' && password === 'Admin') {
      this.isAdmin = true;
      this.isLoggedIn = true;
    } else if (userName === 'User' && password === 'User') {
      this.isAdmin = false;
      this.isLoggedIn = true;
    }
    return this.isLoggedIn;
  }
}
