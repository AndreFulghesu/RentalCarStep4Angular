import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarParkComponent } from './car-park/car-park.component';
import { EditBookingComponent } from './edit-booking/edit-booking.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditVeicleComponent } from './edit-veicle/edit-veicle.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { NewBookingComponent } from './new-booking/new-booking.component';
import { UserBookingsComponent } from './user-bookings/user-bookings.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'userDetails/:id',component:UserDetailsComponent},
  {path:'editUser/:id',component:EditUserComponent},
  {path:'addUser',component:EditUserComponent},

  {path:'carPark',component:CarParkComponent},
  {path:'editVeicle/:id',component:EditVeicleComponent},
  {path:'bookVeicle/:id',component:EditVeicleComponent}, //creare nuovo componente BookVeicle

  {path:'userBookings/:id',component:UserBookingsComponent},

  {path:'modifyBooking/:id',component:EditBookingComponent},


  {path:'newBooking/:id', component:NewBookingComponent},

  {path: '',   redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
