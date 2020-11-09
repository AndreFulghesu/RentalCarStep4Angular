import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MyTableConfig } from '../generic-table/generic-table.component';
import { Booking } from '../models/booking';
import { Vehicle } from '../models/vehicle';
import { TableBookings } from '../models/table-bookings';
import { User } from '../models/user';
import { BookingService } from '../services/booking.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-bookings',
  templateUrl: './user-bookings.component.html',
  styleUrls: ['./user-bookings.component.css']
})
export class UserBookingsComponent implements OnInit {

  constructor(private route:ActivatedRoute,public bookingService:BookingService,private userService:UserService) { }

  user_id:number;
  bookings:Booking[] = [];
  errorMessage:string;
  veicle:Vehicle;
  to_approved:Booking;
  deleted:string = ""
  items_per_page = 4;
  current_page = 1;
  userSelected:User;
  updateMessage:string;
  tableData:TableBookings []= [];


  myTable: MyTableConfig;

  ngOnInit(): void {

    this.bookingService.updateMessage = ''
    this.user_id = this.route.snapshot.params['id']  
    this.getUserSelected(this.user_id)
    this.getAllBookings(this.user_id)
    this.myTable = this.bookingService.getBookingTable()
    
  }

  getAllBookings(user_id)
  {
    this.bookingService.getBookingByUser(user_id).subscribe(data =>{
      this.bookings = data;
      this.bookings.forEach(data =>{
        this.tableData.push(new TableBookings(data.startBooking,data.endBooking,data.veicle.homeManufacturer+data.veicle.model,data.id,data.status))
      })
    })
    
  }

  getUserSelected (user_id)
  {
    this.userService.getUser(user_id).subscribe(data =>{
      this.userSelected = data;
      console.log(this.userSelected)
    },error =>{
      this.errorMessage = error.error.message;
    })
  }

}
