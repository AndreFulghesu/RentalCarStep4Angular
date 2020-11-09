import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { GenericTableComponent } from './generic-table/generic-table.component';
import { GenericButtonComponent } from './generic-button/generic-button.component';
import { UserDetailsComponent } from './user-details/user-details.component';



import {Ng2OrderModule} from 'ng2-order-pipe';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';

import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from './_helpers/auth.interceptor';
import { CarParkComponent } from './car-park/car-park.component';
import { EditVeicleComponent } from './edit-veicle/edit-veicle.component';
import { NewBookingComponent } from './new-booking/new-booking.component';
import { UserBookingsComponent } from './user-bookings/user-bookings.component';
import { EditBookingComponent } from './edit-booking/edit-booking.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    MenuComponent,
    GenericTableComponent,
    GenericButtonComponent,
    UserDetailsComponent,
    EditUserComponent,
    LoginComponent,
    CarParkComponent,
    EditVeicleComponent,
    NewBookingComponent,
    UserBookingsComponent,
    EditBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    NgxPaginationModule, 
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
