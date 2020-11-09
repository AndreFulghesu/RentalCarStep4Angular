

export class TableBookings {

    id:number;
    startBooking:Date
    endBooking:Date
    veicle:string
    status:number

    constructor(start,end,veicle,id,status)
    {
        this.id = id;
        this.startBooking = start
        this.endBooking = end;
        this.veicle = veicle
        this.status = status
    }


}
