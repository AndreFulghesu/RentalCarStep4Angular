import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private baseUrl = 'http://localhost:8080/vehicles';

  currentVeicle:Vehicle = {

    id:null,
    plate:'',
    homeManufacturer:'',
    model:'',
    vehicleType:'',
    registrationYear:null,
    isBooked:false
  }

  constructor(private http:HttpClient, private router:Router) { }

  getCars = () =>
  {
    return this.http.get<Vehicle[]>(this.baseUrl);
  }

  getVeicle = (id) =>
  {
    console.log(id)
    const path = `${this.baseUrl}/${id}`;
    return this.http.get<Vehicle>(path);
  }

  
  editVeicle (mezzo)
  {
    this.currentVeicle = Object.assign ({},mezzo);
    this.router.navigate(['editVeicle', mezzo.plate]);
  }

  updateVeicle = (mezzo) =>
  {

    console.log(this.currentVeicle)
    const path = `${this.baseUrl}/${mezzo.id}`;
    this.http.put<Vehicle>(path,mezzo).subscribe(data =>{
      this.router.navigate(['carPark']);
    })
  }

  deleteVeicle =(mezzo) =>
  {
    let confirmMessage;
    if(confirm("Vuoi davvero cancellare il veicolo?")){
      
      const path =`${this.baseUrl}/${mezzo.id}`;
      return this.http.delete(path)
    }
    
  }


  addVeicle = (car:Vehicle) =>
  {
    console.log(car)
    return this.http.post<Vehicle>(this.baseUrl,car);
  }
}
