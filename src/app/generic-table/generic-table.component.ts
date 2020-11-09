import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user';
import { MyButtonConfig } from '../generic-button/generic-button.component';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css']
})
export class GenericTableComponent implements OnInit {

  reverse:boolean = false;
  key:any;
  utente:User;
  reload = false;


  @Input() tableConfig : MyTableConfig ;
  
  @Input() data : any [];

  @Input() id_utente:number;

  @Input() items_per_page:number;

  @Input() start_page:number;


  constructor() { }

  ngOnInit(): void {
  }

  sort(key)
  {
    this.key = key;
    this.reverse = !this.reverse;
  }

}
export class MyTableConfig {

  header?: MyHeaders [];

  buttonConfig?:MyButtonConfig [];


  constructor (headers?,buttons?){
    this.header = headers;
    this.buttonConfig = buttons;
    
  }
}

export class MyHeaders {

  label: string;
  key:string;
  sortable:boolean;
}
