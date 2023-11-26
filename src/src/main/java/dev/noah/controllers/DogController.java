package dev.noah.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import dev.noah.entities.Dog;
import dev.noah.services.DogServiceImpl;


@Component
@RestController
@CrossOrigin("*")
public class DogController {

	@Autowired
	DogServiceImpl ds;
	
	@RequestMapping(value = "/dogs", method = RequestMethod.POST)
	public Dog createDog(@RequestBody Dog dog) {
		return ds.createDog(dog);
	}
	
	@RequestMapping(value = "/dogs/{id}", method = RequestMethod.GET)
	public Dog getDog(@PathVariable int id) {
		return ds.getDog(id);
	}
	
	@RequestMapping(value = "/dogs", method = RequestMethod.GET)
	public List<Dog> getAllDogs(){
		return ds.getAllDogs();
	}
	
	@RequestMapping(value = "/dogs", method = RequestMethod.PUT)
	public Dog updateDog(@RequestBody Dog dog) {
		return ds.updateDog(dog);
	}
	
	@RequestMapping(value = "/dogs/{id}", method = RequestMethod.DELETE)
	public Boolean deleteDog(@PathVariable int id) {
		return ds.deleteDogById(id);
	}
}
