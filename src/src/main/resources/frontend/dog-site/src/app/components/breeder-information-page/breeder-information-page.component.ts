import { Component, OnInit } from '@angular/core';
import { Breeder } from 'src/app/Modules/breeder/breeder.module';
import { Dog } from 'src/app/Modules/dog/dog.module';
import { BreederService } from 'src/app/services/Breeder/breeder.service';
import { BrowserModule } from '@angular/platform-browser';
import { animate, group, query, state, style, transition, trigger } from '@angular/animations';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  animations: [
    trigger('slide', [
      state('void',
        style({
          opacity: 0,
          transform: 'translateX(1%)'
        })),
      state('*',
        style({
          opacity: 1,
          transform: 'translateX(-1%)'
        })),
      transition(':enter, :leave', [
        animate(500)
      ])
    ])
  ],
  selector: 'app-breeder-information-page',
  templateUrl: './breeder-information-page.component.html',
  styleUrls: ['./breeder-information-page.component.css']
})
export class BreederInformationPageComponent implements OnInit {

  breeder: Breeder = new Breeder(0, "", " ", " ", " ", " ", []);
  dogSelected: Dog = new Dog(0, "", "", 0, "", "", this.breeder);
  currentPos: number = 0;
  dogsInView: Array<Dog> = new Array<Dog>();
  dogsNotInView: Array<Dog> = new Array<Dog>();
  maxDogSlides: number = 5;
  isSliding: boolean = false
  constructor(private breederServ: BreederService, private route:Router) { }

  async ngOnInit() {
    this.getBreederData();
  }

  initializeDogs() {
    for (let i = 0; i < this.maxDogSlides; i++) {
      if (this.breeder.dogs[i] == null) {
        break;
      }
      this.dogsInView[i] = this.breeder.dogs[i];
    }
    if (this.breeder.dogs.length > this.maxDogSlides) {
      this.dogsNotInView = this.breeder.dogs.slice(this.maxDogSlides);
    }
    this.dogSelected = this.dogsInView[2];
  }

  viewAllDogs(){
    this.route.navigate(['/breeder-dogs']);
  }

  async getBreederData() {
    this.breeder = await this.breederServ.getBreederById(parseInt(localStorage.getItem("bId")));
    this.dogSelected = this.breeder.dogs[this.currentPos];
    this.initializeDogs();
  }

  toggleEvents() {
    if (!this.isSliding) {
      this.isSliding = !this.isSliding;
    }
  }

  rotateDogCarouselAndSelectedDisplay(isRotatingRight: boolean, isRotatingSelectedDog: boolean) {
    if (this.isSliding) {
      return;
    }
    if (isRotatingRight) {
      this.dogsNotInView.push(this.dogsInView.shift());
      this.dogsInView.push(this.dogsNotInView.shift());
    }
    else {
      this.dogsNotInView.unshift(this.dogsInView.pop());
      this.dogsInView.unshift(this.dogsNotInView.pop());
    }
    if (isRotatingSelectedDog) {
      this.dogSelected = this.dogsInView[2];
    }
  }

  selectDogToDisplay(index: number) {
    this.dogSelected = this.dogsInView[index];
  }

}
