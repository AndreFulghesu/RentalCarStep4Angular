import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MyButtonConfig } from '../generic-button/generic-button.component';
import { MyTableConfig } from '../generic-table/generic-table.component';
import { Booking } from '../models/booking';
import { Vehicle } from '../models/vehicle';
import { User } from '../models/user';
import { BookingService } from '../services/booking.service';
import { VehicleService } from '../services/vehicle.service';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  constructor(private userService:UserService,private router: Router,public token: TokenStorageService,private bookingService:BookingService,public veicleService:VehicleService) { }

  addUser =() =>
  {
    this.userService.clear();
    this.router.navigate(['addUser']);
  }

  addBooking =() =>
  {
    this.router.navigate(['carPark']);
  }

  modifyBooking = (booking) =>
  {
    this.router.navigate(['modifyBooking',booking.id]);
  }

  deleteBooking = (booking) =>
  {
    if(confirm("Vuoi davvero cancellare la prenotazione?")){
    this.bookingService.deleteBooking(booking);
    }
      
  }

  users:User [] = [];
  myTable: MyTableConfig;
  pagina = 1;
  loggato:any;
  bookings:Booking[] = [] 
  allVeicles:Vehicle[] = []
  errorMessage:string;
  name:string;
  selection:string;
  rows = 4;
  addUserButton = new MyButtonConfig("btn btn-primary","Aggiungi utente",this.addUser);

  addBookingButton = new MyButtonConfig("btn btn-primary","Aggiungi prenotazione",this.addBooking)

  modifyBookingUser = new MyButtonConfig ("btn btn-primary","Modifica",this.modifyBooking)
  deleteBookingUser= new MyButtonConfig ("btn btn-danger","Elimina",this.deleteBooking)


  

  ngOnInit(): void {

    this.myTable = this.userService.getHome();
    this.getReloadData();

    if(this.token.getUser().roles === 0)
    {  
    this.getBookins(this.token.getUser().id);  
    }
    
    
    this.loggato = this.token.getUser();
    console.log(this.loggato)
    if (this.loggato === null)
    {
      this.router.navigate(['login']);
    }
    
  }

  //funzione ricerca campi table
  search()
  {

   if (this.name === "")
   {
     this.ngOnInit();
   }else{
    if (this.selection === "nome")
    {
      this.users = this.users.filter(res =>{
        return res.nome.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }else{
      if (this.selection ==="cognome"){
        this.users = this.users.filter(res =>{
          return res.cognome.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
        })
      }else{
        if (this.selection === "targa"){
          this.bookings = this.bookings.filter(res =>{
            return res.veicle.plate.toLocaleLowerCase().match(this.name.toLocaleLowerCase())
          })
        }
      }
    }
  }
  }

  getReloadData ()
  {
    this.userService.getAllUsers().subscribe(data =>{
      this.users = data;
    },error =>{
      this.errorMessage = error.error.message;
    })
  }

  getBookins (idUser)
  {
    this.bookingService.getBookingByUser(idUser).subscribe(data =>{
      this.bookings = data;
    })
  }

  getVeicles = (id):Observable<Vehicle> =>
  {
    console.log(id)
    
    return this.veicleService.getVeicle(id)
    
  }

}
