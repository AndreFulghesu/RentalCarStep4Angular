import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor(private router:Router) { }

  logOut() 
  {
    sessionStorage.clear();
    this.router.navigate(['login']);

  }

  public saveToken(token: string)
  {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string 
  {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user) 
  {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser() 
  {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }
}
