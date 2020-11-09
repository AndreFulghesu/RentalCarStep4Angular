import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MyButtonConfig } from '../generic-button/generic-button.component';
import { MyHeaders, MyTableConfig } from '../generic-table/generic-table.component';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: User = {
    nome: '',
    cognome:'',
    email:'',
    password:'',
    dataNascita:null,
    idUtente:null,
    privilegi:null
  }

  httpOptions;

  editUser =  (user) =>
  {
    this.currentUser = Object.assign ({},user);
    this.router.navigate(['editUser',user.idUtente]);
  }

  deleteUser = (user) =>
  {
    console.log(user)
    if(confirm("Vuoi davvero cancellare l'utente?")){
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    };
    const path =`${this.baseUrl}/${user.idUtente}`;
    this.http.delete(path,this.httpOptions).subscribe(data =>{
      window.location.reload()
    })
  }
  }

  updateUser =  (user:User) =>
  {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    };
    const path = `${this.baseUrl}/${user.idUtente}`;

    
    return this.http.put(path,user,this.httpOptions);
  }

  createUser = (user) =>
  {
    console.log(user.password)
    user.privilegi = 0;
    return this.http.post(`${this.baseUrl}`,user);
  }

  userBookings = (user) =>
  {
    this.router.navigate(['userBookings',user.idUtente]);
  }


  private baseUrl = 'http://localhost:8080/users';
  
  myHeader: MyHeaders [] = [{"label":"ID","key":"idUtente","sortable":true},{"label":"Nome","key":"nome","sortable":true},{"label":"Cognome","key":"cognome","sortable":true}];

  myButtons: MyButtonConfig [] = [{"customCssClass":"btn btn-primary","icon":"","text":"Visualizza",onClick:this.userBookings},{"customCssClass":"btn btn-danger","icon":"","text":"Elimina",onClick:this.deleteUser},{"customCssClass":"btn btn-warning","icon":"","text":"Modifica",onClick:this.editUser}]

  myTable: MyTableConfig = new MyTableConfig(this.myHeader,this.myButtons)


  constructor(private http:HttpClient,private router:Router) { }


  

  getUser = (id) =>
  {
    return this.http.get<User>("http://localhost:8080/users/"+id);
  }


  getHome()
  {
    return this.myTable;
  }

  getAllUsers(){
    return this.http.get<User[]>(`${this.baseUrl}`);
  }

  clear ()
  {
    this.currentUser = {
      nome: '',
      cognome:'',
      email:'',
      password:'',
      dataNascita:null,
      idUtente:null,
      privilegi:null
    }
  }
}
