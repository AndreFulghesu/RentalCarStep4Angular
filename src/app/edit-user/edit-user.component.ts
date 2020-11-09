import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyButtonConfig } from '../generic-button/generic-button.component';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {


  actualUser:User;
  new_password:string;
  updated:string;
  errorMessage:string;

  createAndUpdate =(currentUser) =>
  {
    if (currentUser.idUtente != null){
      console.log("update");
      console.log(currentUser.password)
      this.updateUser(currentUser);
    }else{
      console.log("new user");
      currentUser.password = this.new_password;
      currentUser.privilegi = 0;
      console.log(currentUser.privilegi);
      this.addUser(currentUser);
    }
  }

  addUserButton:MyButtonConfig = new MyButtonConfig("btn btn-primary align-items-center","Conferma",this.createAndUpdate);
  constructor(public service:UserService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.service.getUser(this.route.snapshot.params['id']).subscribe(data =>{
      this.actualUser = data;
      this.service.currentUser = Object.assign ({},this.actualUser);
    })
    
  }

  updateUser(currentUser)
  {
    if (this.new_password !== undefined){
      currentUser.password = this.new_password;
    }else{
      currentUser.password = ''
    }
    this.service.updateUser(currentUser).subscribe();
    this.service.clear();
    this.updated = "Utente modificato con successo";
    window.scroll(0,0);
    
  }

  addUser(formInput)
  {
      this.service.createUser(formInput).subscribe((response) =>{
        this.updated = "Utente creato con successo"
        this.router.navigate(['homepage']);
      },(error)=>{
        this.errorMessage =  error.error.message;
        
      })
           
  }

  

}
