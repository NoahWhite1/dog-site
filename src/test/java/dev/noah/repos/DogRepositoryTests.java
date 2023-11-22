package dev.noah.repos;

import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import dev.noah.entities.Breeder;
import dev.noah.entities.Dog;
import dev.noah.repositories.BreederRepository;
import dev.noah.repositories.DogRepository;

@SpringBootTest(classes = dev.noah.app.DogBreedingApplication.class)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class DogRepositoryTests {

	@Autowired
	private DogRepository dr;
	@Autowired
	private BreederRepository br;

	@Test
	@Order(1)
	void createDog() {
		Breeder breeder = new Breeder();
		breeder.setbId(0);
		breeder.setName("james");
		breeder.setPassword("thepassword");
		breeder.setUsername("cheese");
		breeder.setEmail("thebestemail@gmail.com");
		br.save(breeder);

		Dog dog = new Dog(0, "pinky", "Golden Retriver", 5, "susie", "pete", breeder);
		dr.save(dog);
				
		Assertions.assertNotEquals(0, dog.getdId());
	}

	@Test
	@Order(2)
	void getDog() {
		Dog dog = dr.findById(1).get();
		Assertions.assertEquals("Golden Retriver", dog.getBreed());
	}

	@Test
	@Order(3)
	void updateDog() {
		Dog dog = dr.findById(1).get();
		dog.setName("purple");
		dr.save(dog);
		Assertions.assertEquals("purple", dog.getName());
	}

	@Test
	@Order(4)
	void getAllDogs() {
		Breeder breeder = br.findById(1).get();

		Dog dog = new Dog(0, "pink", "Golden Retriver", 4, "susie", "cash", breeder);
		dr.save(dog);
		Dog dog1 = new Dog(0, "blue", "Golden Retriver", 7, "maggie", "rain", breeder);
		dr.save(dog1);
		Dog dog2 = new Dog(0, "olive", "Golden Retriver", 2, "dixie", "bow", breeder);
		dr.save(dog2);

		Assertions.assertEquals(4, dr.count());
	}
	
	@Test
	@Order(5)
	void deleteDog() {
		
		Dog dog = dr.findById(1).get();
		dr.delete(dog);

		Assertions.assertEquals(3, dr.count());
	}

}
