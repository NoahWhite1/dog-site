import { Component, OnInit } from '@angular/core';
import { Breeder } from 'src/app/Modules/breeder/breeder.module';
import { Dog } from 'src/app/Modules/dog/dog.module';
import { BreederService } from 'src/app/services/Breeder/breeder.service';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-breeder-information-page',
  templateUrl: './breeder-information-page.component.html',
  styleUrls: ['./breeder-information-page.component.css']
})
export class BreederInformationPageComponent implements OnInit {

  breeder: Breeder = new Breeder(0, "", " ", " ", " ", " ", []);
  dogSelected: Dog = new Dog(0, "", "", 0, "", "", this.breeder);
  currentPos: number = 0;
  dogsInView: Array<Dog> = new Array<Dog>(5);

  constructor(private breederServ: BreederService) { }

  async ngOnInit() {
    this.getBreederData();
  }

  async getBreederData() {
    this.breeder = await this.breederServ.getBreederById(parseInt(localStorage.getItem("bId")));
    console.log("Loaded breeder information page" + JSON.stringify(this.breeder));
    this.dogSelected = this.breeder.dogs[this.currentPos];
    //this.changeDisplayedDogs(this.currentPos);
  }

  rotateDog(newPos: number) {
    if (this.currentPos + newPos < 0) {
      console.log("Resetting to end of carosel");
      this.currentPos = this.breeder.dogs.length;
    }
    else if (this.currentPos + newPos > this.breeder.dogs.length - 1) {
      this.currentPos = 0;
      console.log("Resetting carousel to beginning")
    }
    else {
      this.currentPos += newPos;
      console.log("rotating carousel normally...");
    }
    this.dogSelected = this.breeder.dogs[this.currentPos];
    //this.changeDisplayedDogs(newPos);
    console.log("current pos: " + this.currentPos);
  }

  changeDisplayedDogs(newPos: number) {
    this.dogsInView = new Array<Dog>(5);
    this.dogsInView[2] = this.breeder.dogs[this.currentPos];
    if (this.currentPos + newPos < 0) {
      this.dogsInView[0] = this.breeder.dogs[this.breeder.dogs.length];
      if (this.breeder.dogs.length > 1) {
        this.dogsInView[1] = this.breeder.dogs[this.breeder.dogs.length - 1];
      }
      else {
        this.dogsInView[1] = null;
      }
    }

    if (this.currentPos + newPos > this.breeder.dogs.length - 1) {
      this.dogsInView[3] = this.breeder.dogs[0]
      if (this.breeder.dogs.length > 1) {
        this.dogsInView[4] = this.breeder.dogs[1];
      }
      else {
        this.dogsInView[4] = null;
      }
    }

  }
}
