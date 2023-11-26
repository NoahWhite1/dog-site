import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Breeder } from 'src/app/Modules/breeder/breeder.module';
import { Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breeder-card',
  templateUrl: './breeder-card.component.html',
  styleUrls: ['./breeder-card.component.css']
})
export class BreederCardComponent implements OnInit {
  
  @Input("breeder") breeder:Breeder;

  constructor(public router:Router) { }

  ngOnInit(): void {
  }


  breederInfo(){
    this.storeBreederData();
    this.router.navigate(["/breeder"]);
  }

  storeBreederData(){
    localStorage.setItem("bId", this.breeder.bId.toString());
  }
}
