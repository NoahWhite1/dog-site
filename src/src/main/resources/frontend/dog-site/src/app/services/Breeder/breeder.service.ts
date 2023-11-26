import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Breeder } from 'src/app/Modules/breeder/breeder.module';
import { Dog } from 'src/app/Modules/dog/dog.module';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreederService {

  isSignedInCheck = new BehaviorSubject<boolean>(false);
  breeder:Breeder;//Do not remove this unless ready to find and fix instances
  url:string = `http://localhost:8080`;
  isSignedIn:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http:HttpClient) { }

  async getAllBreeders():Promise<Array<Breeder>>{
    const breeders:Array<Breeder> = await this.http.get<Array<Breeder>>(this.url + `/breeders`).toPromise();
    return breeders;
  }

  async getBreederById(id:number):Promise<Breeder>{
    const breeder:Breeder = await this.http.get<Breeder>(this.url + `/breeders/${id}`).toPromise();
    return breeder;
  }

  async getBreederByUsername(username:string):Promise<Breeder>{
    const breeder:Breeder = await this.http.get<Breeder>(this.url + `/breeders/?${username}`).toPromise();
    return breeder;
  }
  
  get loggedBreeder(){
    return this.breeder;
  }

  async updateBreeder(updateBreeder:Breeder):Promise<Breeder>{
    updateBreeder = await this.http.put<Breeder>(this.url + `/breeders`,updateBreeder[0]).toPromise();
    this.breeder = updateBreeder;
    return updateBreeder;
  }

  async updateBreederDog(breeder:Breeder,dog:Dog):Promise<Breeder>{
    breeder.dogs.push(dog);
    await this.http.put<Breeder>(this.url + `/breeders`,this.breeder).toPromise();
    return this.breeder;
  }
}
