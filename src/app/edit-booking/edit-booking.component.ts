import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyButtonConfig } from '../generic-button/generic-button.component';
import { Booking } from '../models/booking';
import { User } from '../models/user';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.css']
})
export class EditBookingComponent implements OnInit {

  constructor(private service:BookingService,private router:Router,private route:ActivatedRoute) { }

  editBooking:Booking;
  idBooking:number;
  nowday = new Date();
  period:number;
  errorMessage = '';
  error = false;
  loggedIn:User;
  two_days_milliseconds = 172800000;


  modifica = () =>
  {
    if (this.period > 2){
      this.service.updateBookingUser(this.editBooking);
      this.router.navigate(['homepage',this.loggedIn.idUtente]);

    }else{
        this.error = true;
    }
  }

  confirmButton:MyButtonConfig = new MyButtonConfig("btn btn-success","Conferma",this.modifica);

  ngOnInit(): void {

    this.idBooking = this.route.snapshot.params['id'];
    this.getBooking(this.idBooking);
  }

  getBooking(id)
  {
    this.service.getBookingById(id).subscribe(data =>{
      this.editBooking = data;
      console.log("Tempo data odierna:"+this.nowday.getTime())
      
      this.period = (new Date(this.editBooking.startBooking).getTime()) - (this.nowday.getTime());
      console.log("periodo:   "+ this.period )
           
    },error =>{
        this.errorMessage = error.error.message;
    })
  
  }

}
