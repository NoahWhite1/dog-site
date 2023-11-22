import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Breeder } from 'src/app/Modules/breeder/breeder.module';
import { BreederService } from 'src/app/services/Breeder/breeder.service';
import { FormsModule } from '@angular/forms//forms';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
@Component({
  selector: 'app-login-display',
  templateUrl: './login-display.component.html',
  styleUrls: ['./login-display.component.css']
})
export class LoginDisplayComponent implements OnInit {
  @Output ("toggleLoginIcon") toggleLoginIcon: EventEmitter<any> = new EventEmitter;
  @Output ("toggleBreederLogin") toggleBreederLogin: EventEmitter<any> = new EventEmitter;
  username:string = "";
  password:string = "";
  loginDisplay:boolean = false;
  breeder:Breeder;

  constructor(private breederServ:BreederService, private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  async loginBreeder(){

    this.breeder = await this.breederServ.getBreederByUsername(this.username);
    if(this.breeder[0].username === this.username && this.breeder[0].password === this.password){
      this.breederServ.breeder = this.breeder;
      this.username = "";
      this.password = "";
      this.loginDisplay = false;
      this.toggleLoginIcon.emit();
      this.breederServ.isSignedIn = true;
      this.toggleBreederLogin.emit();
    }
    else{
      this.snackBar.open("Invalid Credentials", "close", {
        duration: 2000,        
      });
    }
  }

  displayLogin(){
    this.loginDisplay = !this.loginDisplay;
  }

  public get getLoginDisplay():boolean{
    return this.loginDisplay;
  }

}
