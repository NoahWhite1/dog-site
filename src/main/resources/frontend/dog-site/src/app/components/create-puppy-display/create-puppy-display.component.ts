import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Dog } from 'src/app/Modules/dog/dog.module';
import { Breeder } from 'src/app/Modules/breeder/breeder.module';
import { BreederService } from 'src/app/services/Breeder/breeder.service';

@Component({
  selector: 'app-create-puppy-display',
  templateUrl: './create-puppy-display.component.html',
  styleUrls: ['./create-puppy-display.component.css']
})
export class CreatePuppyDisplayComponent implements OnInit {

  isDisplayed:boolean = false;
  name:string = "";
  breed:string = "";
  age:number;
  mother:string = "";
  father:string = "";
  newDog:Dog = new Dog(0,"blank"," ",0," "," ",this.breederServ.breeder);
  breeder:Breeder;

  constructor(private breederServ:BreederService) { }

  ngOnInit(): void {
  }

  toggleDisplay(){
    this.isDisplayed = !this.isDisplayed;
    this.breeder = this.breederServ.loggedBreeder;
  }

  get isPuppyCreationDisplayed(){
    return this.isDisplayed;
  }

  async createDog(){

    let newDog = {
      "name" : this.name,
      "breed" : this.breed,
      "age" : this.age,
      "mother" : this.mother,
      "father" : this.father,
      "breeder" : this.breeder,
      "dId" : 0,
    }
    this.toggleDisplay();

    let dog = await this.breederServ.addDog(newDog);
    this.breederServ.breeder[0].dogs.push(dog);
  }
}
