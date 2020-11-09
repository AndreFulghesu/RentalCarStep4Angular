import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyButtonConfig } from '../generic-button/generic-button.component';
import { MyHeaders, MyTableConfig } from '../generic-table/generic-table.component';
import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }

  confirmBooking =(tableData) =>
  {
    console.log(tableData)
    if (tableData.status === 1){
      alert("Prenotazione già confermata");
    }else{
    this.getBookingById(tableData.id).subscribe(data =>{
      let booking:Booking = data;
      let pathOriginal = 'http://localhost:8080/bookings/updateStatus'
      booking.status = 1;
      const path = `${pathOriginal}/${tableData.id}`;
      this.http.put<Booking>(path,booking).subscribe(()=>
      window.location.reload()
      )
    })
  }
  }

  deleteBooking = (booking) =>
  {
    const path =`${this.baseUrl}/${booking.id}`;
    this.http.delete(path,{ observe: 'response' }).subscribe(data =>{
      this.updateMessage ="Eliminata con successo";
      console.log(this.updateMessage)
    })
  }


  baseUrl = 'http://localhost:8080/bookings';
  singleUrl = 'http://localhost:8080/booking';
  updateMessage:string;

  

  myHeaders: MyHeaders[] = [{"label":"Data inizio","key":"startBooking","sortable":true},{"label":"Data fine","key":"endBooking","sortable":true},{"label":"Veicolo","key":"veicle","sortable":true}];

  myButtons: MyButtonConfig [] = [{"customCssClass":"btn btn-success","text":"Conferma","refer":"conferma","icon":"",onClick:this.confirmBooking},{"customCssClass":"btn btn-danger","text":"Elimina","refer":"elimina","icon":"",onClick:this.deleteBooking}];

  myTable: MyTableConfig = new MyTableConfig(this.myHeaders,this.myButtons)



  addBooking = (booking:Booking) =>
  {
    
    return this.http.post<Booking>(this.baseUrl,booking);
  }

  getBookingTable = () =>
  {
    return this.myTable
  }

  getBookingByUser(idUser:number)
  {
    return this.http.get<Booking[]>(`http://localhost:8080/bookings?requesting_user=${idUser}`);
    
  }

  getBookingById (idBooking)
  {
    const path = `${this.singleUrl}/${idBooking}`;
    return this.http.get<Booking>(path);
  }

  //per l'utente customer
  updateBookingUser = (booking) =>
  {
    const path = `${this.baseUrl}/${booking.id}`;
    this.http.put<Booking>(path,booking).subscribe(data =>{
      window.location.reload();
    })
    
  }

  


}
