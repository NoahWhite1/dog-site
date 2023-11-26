import { Breeder } from '../breeder/breeder.module';


export class Dog {
  dId:number = 0;
  name:string = "";
  breed:string = "";
  age:number = 0;
  mother:string = "";
  father:string = "";
  breeder:Breeder = new Breeder(0," "," "," "," "," ",null);

  constructor(dId:number, name:string, breed:string, age:number, mother:string, father:string, breeder:Breeder){
    this.dId = dId;
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.mother = mother;
    this.father = father;
    this.breeder = breeder;
  }
 }
