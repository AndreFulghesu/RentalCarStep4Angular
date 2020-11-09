import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyButtonConfig } from '../generic-button/generic-button.component';
import { Booking } from '../models/booking';
import { Vehicle } from '../models/vehicle';
import { BookingService } from '../services/booking.service';
import { VehicleService } from '../services/vehicle.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrls: ['./new-booking.component.css']
})
export class NewBookingComponent implements OnInit {

  constructor(private bookingService:BookingService,private router:Router,private route:ActivatedRoute,private token:TokenStorageService,private carService:VehicleService) { }

  idVeicle:number;
  allBookings:Booking [] = [];
  start_booking:Date;
  end_booking:Date;

  addBooking = (idVeicle) =>
  {
    let veicle:Vehicle;
    this.carService.getVeicle(idVeicle).subscribe(data =>{
      veicle = data;
      let newBooking:Booking = new Booking(this.start_booking,this.end_booking,veicle,this.token.getUser().id);
      this.bookingService.addBooking(newBooking).subscribe(data =>{
        this.router.navigate(['homepage']);
      })
    })
    
    
  }

  addBookingButton:MyButtonConfig = new MyButtonConfig("btn btn-primary","Conferma",this.addBooking);

  ngOnInit(): void {
    this.idVeicle = this.route.snapshot.params['id']; 
  }

}
