import { Component, EventEmitter, Input, OnInit, Output, ViewChild,AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Breeder } from 'src/app/Modules/breeder/breeder.module';
import { BreederService } from 'src/app/services/Breeder/breeder.service';
import { CreatePuppyDisplayComponent } from '../create-puppy-display/create-puppy-display.component';
import { LoginDisplayComponent } from '../login-display/login-display.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @ViewChild(LoginDisplayComponent)
  loginDisplayComponent:LoginDisplayComponent;
  @ViewChild(CreatePuppyDisplayComponent)
  addPuppyDisplay:CreatePuppyDisplayComponent;
  isSignedIn:boolean;
  constructor(private router:Router,private breederServ:BreederService) { }

   ngOnInit() {
     if(this.isSignedIn != this.breederServ.isSignedIn){
      this.isSignedIn = this.breederServ.isSignedIn;
    }
  }

  toggleBreederLogin(){
    this.ngOnInit();
  }

  homePage(){
    this.router.navigate(['/home'])
  }

  breederPage(){
    this.router.navigate(['/breeders'])
  }

  createDog(){
    this.addPuppyDisplay.toggleDisplay();
  }

  get getSignedIn(){
    return this.isSignedIn;
  }
}
