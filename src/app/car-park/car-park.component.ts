import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyButtonConfig } from '../generic-button/generic-button.component';
import { Vehicle } from '../models/vehicle';
import { VehicleService } from '../services/vehicle.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-car-park',
  templateUrl: './car-park.component.html',
  styleUrls: ['./car-park.component.css']
})
export class CarParkComponent implements OnInit {



  confirmMessage;
  errorMessage;
  constructor(private carService:VehicleService,public token:TokenStorageService, private router:Router) { }

  addVeicle =(mezzoForm:Vehicle) =>
  {
    console.log(mezzoForm)
    this.carService.addVeicle(mezzoForm).subscribe(data => {
      this.creata = true;
    },error =>{
      console.log(error.error.message)
      this.errorMessage = error.error.message;
      this.creata = false;
    });

    
    
  }

  editVeicle =(mezzo) =>
  {
    this.carService.editVeicle(mezzo);
  }

  bookVeicle =(veicle) =>
   {
    this.router.navigate(['newBooking',veicle.id]);
  }

  cars:Vehicle [] = []
  successDelete:string;
  creata = false;
  addButton: MyButtonConfig = new MyButtonConfig("btn btn-primary","Conferma",this.addVeicle)
  editButton: MyButtonConfig = new MyButtonConfig("btn btn-secondary","Modifica",this.editVeicle)
  prenotaButton: MyButtonConfig = new MyButtonConfig("btn btn-primary","Prenota",this.bookVeicle)
  

  ngOnInit(): void {

    this.getVeicles()
  }

  getVeicles()
  {
    this.carService.getCars().subscribe(data =>{
      this.cars = data;
      console.log(this.cars)
    })
  }

  deleteVeicle(mezzo)
  {
    
     this.carService.deleteVeicle(mezzo).subscribe((res:Response) =>{
       res.json()
       this.confirmMessage = res.text()
       console.log(this.confirmMessage.text)
       window.location.reload()
     },
     error =>{
       console.log(error.error)
     })
    

  }

  refresh ()
  {
    this.ngOnInit()
  }

}
