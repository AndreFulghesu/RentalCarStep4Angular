import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {


  user:User;
  id:number;
  constructor(private service:UserService,private route:ActivatedRoute, private token:TokenStorageService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.token.getUser().roles)
    this.service.getUser(this.id).subscribe(data =>{
      this.user = data;
      console.log(this.user.dataNascita)
      
      
    })


  }

}
