import { Vehicle } from './vehicle';

export class Booking {

    id:number;
    startBooking:Date;
    endBooking:Date;
    veicle:Vehicle;
    status:number;
    requestingUser:number

    constructor (start,end,veicle,user)
   {
       this.startBooking = start;
       this.endBooking = end;
       this.veicle = veicle;
       this.status = 0;
       this.requestingUser = user;

   }
   
}