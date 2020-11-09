import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-generic-button',
  templateUrl: './generic-button.component.html',
  styleUrls: ['./generic-button.component.css']
})
export class GenericButtonComponent implements OnInit {

  @Input () buttonConfig : MyButtonConfig ;

  @Input() action:string;

  @Input() data:any;

  constructor() { }

  ngOnInit(): void {
  }

  onClickButton() {
    
    
    this.buttonConfig.onClick(this.data);
  }

}

export class MyButtonConfig {
  customCssClass: string;
  text: string;
  icon: string;
  refer?:string;
  disabled?:boolean;
  
  
  
  onClick?: (param?:any) => void;

  constructor (classe,testo,funzione?){
    this.customCssClass = classe;
    this.text = testo;
    
    this.onClick = funzione
    
  }
}
