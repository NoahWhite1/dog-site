import { Component, Input, OnInit } from '@angular/core';
import { Breeder } from 'src/app/Modules/breeder/breeder.module';
import { BreederService } from 'src/app/services/Breeder/breeder.service';


@Component({
  selector: 'app-breeder-page',
  templateUrl: './breeder-page.component.html',
  styleUrls: ['./breeder-page.component.css']
})
export class BreederPageComponent implements OnInit {

  breeders:Array<Breeder> = [];

  constructor(private breederServ:BreederService) { }

  ngOnInit(): void {
    this.getAllBreeders();
  }

  async getAllBreeders(){
    this.breeders = await this.breederServ.getAllBreeders();
  }
}
