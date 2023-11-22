import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Breeder } from 'src/app/Modules/breeder/breeder.module';
import { Dog } from 'src/app/Modules/dog/dog.module';

@Injectable({
  providedIn: 'root'
})
export class BreederService {

  breeder:Breeder;
  url:string = `http://localhost:8080`;
  isSignedIn:boolean = false;

  constructor(private http:HttpClient) { }

  async addDog(dog:Dog):Promise<Dog>{
    dog = await this.http.post<Dog>(this.url + `/dogs`,dog).toPromise();
    return dog;
  }

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
    return this.breeder[0];
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
