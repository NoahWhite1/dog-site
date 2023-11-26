package dev.noah.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import dev.noah.entities.Breeder;
import dev.noah.entities.Dog;
import dev.noah.repositories.BreederRepository;
import dev.noah.repositories.DogRepository;

@Component
@Service
public class DogServiceImpl implements DogService{

	@Autowired
	DogRepository dr;
	
	@Autowired
	BreederRepository br;
	
	@Override
	public Dog createDog(Dog dog) {
		
		Breeder breeder = (br.findById(dog.getBreeder().getbId()).get());
		breeder.getDogs().add(dog);
		br.save(breeder);
		
		return dr.save(dog);
	}

	@Override
	public Dog getDog(int id) {
		return dr.findById(id).get();
	}

	@Override
	public List<Dog> getAllDogs() {
		return (List<Dog>) dr.findAll();
	}

	@Override
	public Dog updateDog(Dog dog) {
		return dr.save(dog);
	}

	@Override
	public Boolean deleteDogById(int id) {
		Dog removeDog = dr.findById(id).get();
		
		if(removeDog != null) {
			
			dr.delete(removeDog);
			return true;
		
		}else {
		
			return false;
		}
	}

}
