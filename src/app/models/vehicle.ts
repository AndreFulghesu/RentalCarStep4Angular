export class Vehicle {
    
    id:number;
    plate:string;
    homeManufacturer:string;
    model:string;
    vehicleType:string;
    registrationYear:Date;
    isBooked:boolean;

    constructor (targa,casa,modello,tipologia, data)
    {
        this.plate = targa;
        this.homeManufacturer = casa;
        this.model = modello;
        this.vehicleType = tipologia;
        this.registrationYear = data;
    }

}
