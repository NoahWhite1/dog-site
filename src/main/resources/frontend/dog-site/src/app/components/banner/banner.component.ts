import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BreederService } from 'src/app/services/Breeder/breeder.service';
import { CreatePuppyDisplayComponent } from '../create-puppy-display/create-puppy-display.component';
import { LoginDisplayComponent } from '../login-display/login-display.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  
  @ViewChild(LoginDisplayComponent)
  logindisplay:LoginDisplayComponent;
  @ViewChild(NavBarComponent)
  navBar:NavBarComponent;
  displayProfile:boolean;
  constructor(private breederServ:BreederService, private router:Router, private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.displayProfile = this.breederServ.isSignedIn;
    if(this.navBar === undefined){
    this.navBar = new NavBarComponent(this.router,this.breederServ);
    }
  }

  async loginDisplay(){
    this.logindisplay.displayLogin();
  }

  async toggleLoginIcon(){
    if(this.logindisplay.getLoginDisplay == false){
      if(await this.breederServ.breeder[0] != undefined){
      this.displayProfile = true;
      this.breederServ.isSignedIn = true;
      this.ngOnInit();
      this.router.navigate(["/breeder"]);
    }
  }
 }

 async logout(){
   this.breederServ.breeder[0] = undefined;
   this.displayProfile = false;
   this.breederServ.isSignedIn = false;
   this.ngOnInit();
   this.router.navigate(["/home"]);
 }
}
