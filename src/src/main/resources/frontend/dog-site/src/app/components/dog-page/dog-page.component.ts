import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Breeder } from 'src/app/Modules/breeder/breeder.module';
import { Dog } from 'src/app/Modules/dog/dog.module';
import { DogService } from 'src/app/services/Dog/dog.service';

@Component({
  selector: 'app-dog-page',
  templateUrl: './dog-page.component.html',
  styleUrls: ['./dog-page.component.css']
})
export class DogPageComponent implements OnInit {

  breeder:Breeder = new Breeder(0, "", "", "", "", "", []);
  dog:Dog = new Dog(0,"","",0,"","",this.breeder);
  constructor(private dogServ:DogService, private router:Router) { }

  ngOnInit(): void {
    this.getDogData();
  }

  async getDogData(){
    this.dog = await this.dogServ.getDogById(parseInt(localStorage.getItem("dId")));
  }

  viewBreederPage(){
    localStorage.setItem('bId', this.dog.breeder.bId.toString())
    this.router.navigate(["/breeder"]);
  }
}
