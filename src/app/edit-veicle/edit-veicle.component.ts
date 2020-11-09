import { Component, OnInit } from '@angular/core';
import { MyButtonConfig } from '../generic-button/generic-button.component';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-edit-veicle',
  templateUrl: './edit-veicle.component.html',
  styleUrls: ['./edit-veicle.component.css']
})
export class EditVeicleComponent implements OnInit {

  constructor(public service:VehicleService) { }


  updateVeicleButton: MyButtonConfig = new MyButtonConfig("btn btn-primary","Conferma",this.service.updateVeicle)

  ngOnInit(): void {
  }

}
