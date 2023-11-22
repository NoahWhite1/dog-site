import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dog } from 'src/app/Modules/dog/dog.module';
import { DogService } from 'src/app/services/Dog/dog.service';

@Component({
  selector: 'app-puppy-card',
  templateUrl: './puppy-card.component.html',
  styleUrls: ['./puppy-card.component.css']
})
export class PuppyCardComponent implements OnInit {

  @Input("dog") dog:Dog;

  constructor(private router:Router, private dogServ:DogService) { }

  ngOnInit(): void {
  }

  dogInfo(){
    this.storeDogData();
    this.router.navigate(["/dog"])
  }

  storeDogData(){
    console.log("dog id " + this.dog.dId)
   localStorage.setItem("dId", this.dog.dId.toString());
  }
}
