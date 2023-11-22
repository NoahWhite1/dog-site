package dev.noah.services;

import static org.junit.jupiter.api.Assertions.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import dev.noah.entities.Breeder;
import dev.noah.entities.Dog;

@SpringBootTest(classes = dev.noah.app.DogBreedingApplication.class)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class DogServiceTests {

	@Autowired
	DogServiceImpl ds;
	
	@Autowired
	BreederServiceImpl bs;
	
	@Test
	@Order(1)
	void createDog() {
		Breeder breeder = new Breeder(0,"Drake","AAAAAAAA", "123456","someemail@gmail.com", "puppyimages",new HashSet<Dog>());
		bs.createBreeder(breeder);
		Dog dog1 = new Dog(0, "teal", "Golden Retriever ", 2, "Sally", "Tom", breeder);
		dog1 = ds.createDog(dog1);
		Dog dog2 = new Dog(0, "teal", "German Sheperd", 3, "Snow", "Bow", breeder);
		dog2 = ds.createDog(dog2);
		
		Assertions.assertNotEquals(0, dog1.getdId());
		Assertions.assertNotEquals(0, dog2.getdId());
	}

	@Test
	@Order(2)
	void getDog() {
		Dog dog = ds.getDog(1);
		Assertions.assertEquals(1, dog.getdId());
	}
	
	@Test
	@Order(3)
	void getAllDogs() {
		List<Dog> dogs = ds.getAllDogs();
		Assertions.assertEquals(2, dogs.size());
	}
	
	@Test
	@Order(4)
	void updateDog() {
		Dog dog = ds.getDog(1);
		dog.setAge(7);
		ds.updateDog(dog);
		Assertions.assertEquals(7, dog.getAge());
	}
	
	@Test
	@Order(5)
	void deleteDog() {
		ds.deleteDogById(2);
		Assertions.assertEquals(1, ds.getAllDogs().size());
	}
}
