import { Component, OnInit } from '@angular/core';
import { Dog } from 'src/app/Modules/dog/dog.module';
import { BreederService } from 'src/app/services/Breeder/breeder.service';
import { DogService } from 'src/app/services/Dog/dog.service';
import { Breeder } from 'src/app/Modules/breeder/breeder.module';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  dogs:Array<Dog> = [];
  dog:Dog;
  breeder:Breeder = null;

  constructor(private dogServ:DogService) { }


  ngOnInit(): void {
    //this.getDogById();
    this.allDogs();
  }

  async allDogs():Promise<void>{
    this.dogs = await this.dogServ.getAllDogs();
  }

  async getDogById():Promise<void>{
    this.dog = await this.dogServ.getDogById(1);
  }

}
