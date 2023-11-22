import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dog } from 'src/app/Modules/dog/dog.module';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private http:HttpClient) { }

  async getAllDogs():Promise<Array<Dog>>{
    const dogs:Array<Dog> = await this.http.get<Array<Dog>>(`http://localhost:8080/dogs`).toPromise();
    return dogs;
  }

  async getDogById(id:number):Promise<Dog>{
    const dog:Dog = await this.http.get<Dog>(`http://localhost:8080/dogs/${id}`).toPromise();
    return dog;
  }

}
