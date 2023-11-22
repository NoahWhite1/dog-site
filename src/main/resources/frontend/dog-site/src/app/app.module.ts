import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BannerComponent } from './components/banner/banner.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PuppyCardComponent } from './components/puppy-card/puppy-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BreederService } from './services/Breeder/breeder.service';
import { DogService } from './services/Dog/dog.service';
import { DogPageComponent } from './components/dog-page/dog-page.component';
import { BreederPageComponent } from './components/breeder-page/breeder-page.component';
import { HomePageCarouselComponent } from './components/home-page-carousel/home-page-carousel.component';
import { BreederCardComponent } from './components/breeder-card/breeder-card.component';
import { CreatePuppyDisplayComponent } from './components/create-puppy-display/create-puppy-display.component';
import { LoginDisplayComponent } from './components/login-display/login-display.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import { BreederInformationPageComponent } from './components/breeder-information-page/breeder-information-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BannerComponent,
    NavBarComponent,
    PuppyCardComponent,
    DogPageComponent,
    BreederPageComponent,
    HomePageCarouselComponent,
    BreederCardComponent,
    CreatePuppyDisplayComponent,
    LoginDisplayComponent,
    BreederInformationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    MatSnackBarModule,
    FormsModule,
    MatMenuModule
  ],
  providers: [BreederService,DogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
