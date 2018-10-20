import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  token = {
    refresh_token: 'refreshtokencode',
    exp: new Date((new Date().getDate() + 1)),
    access_token: {
        username: 'user',
        roles: ['Admin', 'RegisteredUser', 'Super User']
    }
  };

  constructor(private router: Router) { }

  tokenKey: string = "a6smm_utoken"

  login(username, password) {
    this.setToken(this.token);
    this.router.navigate(['app', 'home']);
  }

  logout() {
      this.removeToken();
      this.router.navigate(['login']);
  }

  getToken() {
      return JSON.parse(localStorage.getItem(this.tokenKey));
  }

  setToken(token) {
      localStorage.setItem(this.tokenKey, JSON.stringify(token));
  }

  
  refreshToken() {
    this.token.exp = new Date((new Date().getDate() + 1));
    this.setToken(this.token);
  }

  removeToken() {
      localStorage.removeItem(this.tokenKey);
  }

  isAuthenticated() {
    let token = localStorage.getItem(this.tokenKey);

    if (token) {
        return true;
    }
    else {
        return false;
    }
  }

  getAccessToken() {
    return JSON.parse(localStorage.getItem(this.tokenKey))['access_token'];
  }
}
