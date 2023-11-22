package dev.noah.services;

import java.util.List;

import dev.noah.entities.Breeder;
import dev.noah.entities.Dog;

public interface BreederService {

	//Create
	Breeder createBreeder(Breeder breeder);
	
	//Read
	Breeder getBreederById(int id);
	List<Breeder> getAllBreeders();
	Breeder getBreederByUsername(String username);
	
	//Update
	Breeder updateBreeder(Breeder breeder);
	
	//Destroy
	Boolean deleteBreederById(int id);
}
