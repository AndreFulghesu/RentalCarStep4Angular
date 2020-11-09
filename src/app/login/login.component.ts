import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyButtonConfig } from '../generic-button/generic-button.component';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage = 'Spiacente, credenziali errate';
  users:User[] = [];
  isLoggedIn = false;
  isLoginFailed = false;
  roles:number;
  button:MyButtonConfig;
  fields = ''


  email = ''
  password = ''
  
  constructor(private auth:AuthService, private route: Router, private token:TokenStorageService) { }

  ngOnInit(): void {
    if (this.token.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.token.getUser().privilegi;
    }

    this.button =  {
      "customCssClass":"btn btn-primary",
      "icon":"",
      "text":"Accedi",
      "refer":"",
      "onClick":this.gestLogin
    }
    
  }

  

  gestLogin =(event) =>
  {

    this.fields = null;
    this.errorMessage = null;
    if (this.email.length > 0 && this.password.length > 0 ){
    this.auth.login(this.email,this.password).subscribe(
      data => {
        this.token.saveToken(data.accessToken);
        this.token.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.token.getUser().privilegi;
        this.route.navigate(['homepage']);
      }, err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    )
    }else{
      this.fields = "I campi sono obbligatori"
    }

  }

}
