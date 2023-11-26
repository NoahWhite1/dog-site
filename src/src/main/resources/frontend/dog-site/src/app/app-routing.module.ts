import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreederInformationPageComponent } from './components/breeder-information-page/breeder-information-page.component';
import { BreederPageComponent } from './components/breeder-page/breeder-page.component';
import { CreatePuppyDisplayComponent } from './components/create-puppy-display/create-puppy-display.component';
import { DogPageComponent } from './components/dog-page/dog-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BreederAllDogsDisplayComponent } from './components/breeder-all-dogs-display/breeder-all-dogs-display.component';

const routes: Routes = [
{path: 'home', component: HomePageComponent},
{path: 'breeders', component: BreederPageComponent},
{path: 'dog', component: DogPageComponent},
{path: 'breeder', component:BreederInformationPageComponent},
{path: 'createDog', component:CreatePuppyDisplayComponent},
{path: 'breeder-dogs', component:BreederAllDogsDisplayComponent},
{path: '**', component:HomePageComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

