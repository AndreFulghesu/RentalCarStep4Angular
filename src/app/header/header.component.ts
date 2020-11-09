import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title:string = 'Rental Car';
  sottoTitle:string = 'Il miglior modo per noleggiare la tua auto.';
  
  constructor() { }

  ngOnInit(): void {
  }

}
