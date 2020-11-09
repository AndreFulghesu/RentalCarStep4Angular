export class User {


    idUtente:number;
    nome:string;
    cognome:string;
    email:string;
    password:string;
    dataNascita:Date;
    privilegi:number;

    constructor (id,nome,cognome,email,password,data_nascita)
    {
        this.idUtente = id;
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.password = password;
        this.dataNascita = data_nascita;
        
    }
}
