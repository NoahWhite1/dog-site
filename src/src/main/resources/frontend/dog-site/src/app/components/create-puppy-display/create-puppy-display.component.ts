import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Dog } from 'src/app/Modules/dog/dog.module';
import { Breeder } from 'src/app/Modules/breeder/breeder.module';
import { BreederService } from 'src/app/services/Breeder/breeder.service';
import { DogService } from 'src/app/services/Dog/dog.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-puppy-display',
  templateUrl: './create-puppy-display.component.html',
  styleUrls: ['./create-puppy-display.component.css']
})
export class CreatePuppyDisplayComponent implements OnInit {

  isDisplayed:boolean = false;
  newDog:Dog = new Dog(0,"blank"," ",0," "," ",this.breederServ.breeder);
  dogForm = new FormGroup({
    dogName: new FormControl(''),
    dogBreed: new FormControl(''),
    dogAge: new FormControl(''),
    dogMother: new FormControl(''),
    dogFather: new FormControl('')
  });
  constructor(private breederServ:BreederService, private dogServ:DogService) { }

  ngOnInit(): void {
  }

  toggleDisplay(){
    this.isDisplayed = !this.isDisplayed;
  }

  get isPuppyCreationDisplayed(){
    return this.isDisplayed;
  }

  async createDog(){
    let breeder:Breeder =  await this.breederServ.getBreederById(parseInt(localStorage.getItem("bId")));
    console.log('breeder found ' + JSON.stringify(breeder));
    let newDog:Dog = new Dog(0, this.dogForm.get('dogName').value, this.dogForm.get('dogBreed').value, this.dogForm.get('dogAge').value, 
    this.dogForm.get('dogMother').value, this.dogForm.get('dogFather').value, breeder);    
    console.log("new dog " + JSON.stringify(this.newDog));
    await this.dogServ.createDog(newDog);
    this.toggleDisplay();
  }
}
