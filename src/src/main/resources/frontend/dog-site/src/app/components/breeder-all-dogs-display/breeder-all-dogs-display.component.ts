import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Breeder } from 'src/app/Modules/breeder/breeder.module';
import { BreederService } from 'src/app/services/Breeder/breeder.service';

@Component({
  selector: 'app-breeder-all-dogs-display',
  templateUrl: './breeder-all-dogs-display.component.html',
  styleUrls: ['./breeder-all-dogs-display.component.css']
})
export class BreederAllDogsDisplayComponent implements OnInit {

  breeder: Breeder = new Breeder(0, "", " ", " ", " ", " ", []);
  constructor(private router:Router, private breederServ:BreederService, private route:Router) { }

  ngOnInit(): void {
    this.getBreederById();
  }

  async getBreederById(){
    this.breeder = await this.breederServ.getBreederById(parseInt(localStorage.getItem("bId")));
  }

  viewBreederPage(){
    this.route.navigate(['breeder']);
  }
}
