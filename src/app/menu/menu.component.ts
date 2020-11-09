import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private token:TokenStorageService, private route:Router) { }

  ngOnInit(): void {
  }

  logout () 
  {
    this.token.logOut();
  }

  mioProfilo()
  {
    this.route.navigate(['userDetails',this.token.getUser().id])
  }

  carPark()
  {
    this.route.navigate(['carPark']);
  }

  home()
  {
    this.route.navigate(['homepage']);
  }

}
