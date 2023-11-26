import { Dog } from '../dog/dog.module';

export class Breeder {
  bId:number = 0;
  name:string = "";
  username:string = "";
  password:string = "";
  email:string = "";
  dogUrl:string = "";
  dogs:Array<Dog> = [];

  constructor(bId:number, name:string, username:string, password:string, email:string, dogUrl:string, dogs:Dog[]){
    this.bId = bId;
    this.name = name;
    this.username = username;
    this.password = password;
    this.email = email;
    this.dogUrl = dogUrl;
    this.dogs = dogs;
  }
 }
