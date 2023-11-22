package dev.noah.services;

import java.util.List;

import dev.noah.entities.Breeder;
import dev.noah.entities.Dog;

public interface DogService {

	//Create
	Dog createDog(Dog dog);
	
	//Read
	Dog getDog(int id);
	List<Dog> getAllDogs();
	
	//Update
	Dog updateDog(Dog dog);
	
	//Destroy
	Boolean deleteDogById(int id);
}
