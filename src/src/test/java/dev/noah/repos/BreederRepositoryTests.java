package dev.noah.repos;

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
class BreederRepositoryTests {

	@Autowired
	private BreederRepository br;

	@Autowired
	private DogRepository dr;

	@Test
	@Order(1)
	void createBreeder() {

		Breeder breeder = new Breeder();
		breeder.setbId(0);
		breeder.setName("testName");
		breeder.setPassword("testpassword");
		breeder.setUsername("testusername");
		breeder.setEmail("testemail@gmail.com");
		Dog dog = new Dog(0,"puppers","Labrador Retriver", 5, "momdog", "daddog",breeder);
		dog.setBreeder(breeder);
		breeder.getDogs().add(dog);
		br.save(breeder);
		Assertions.assertNotEquals(0, breeder.getbId());
	}

	@Test
	@Order(2)
	void getBreeder() {
		Breeder breeder = br.findById(1).get();
		Assertions.assertEquals(1, breeder.getbId());
	}

	@Test
	@Order(3)
	void updateBreeder() {
		Breeder breeder = br.findById(1).get();
		breeder.setDogUrl("ChangedURL");
		br.save(breeder);
		Assertions.assertEquals("ChangedURL", breeder.getDogUrl());
	}

	@Test
	@Order(4)
	void deleteBreeder() {
		
		if(br.existsById(1)) {
			Breeder breeder = br.findById(1).get();
		   br.delete(breeder);
		}

		Assertions.assertEquals(true, br.findById(1).isEmpty());
	}
	
	@Test
	@Order(5)
	void getAllBreederDogs() {
		
		Breeder breeder = new Breeder();
		breeder.setbId(0);
		breeder.setName("testName");
		breeder.setPassword("testpassword");
		breeder.setUsername("testusername");
		breeder.setEmail("testemail@gmail.com");
		br.save(breeder);
		
		Dog dog = new Dog(0,"puppers1","Labrador Retriver", 5, "momdog", "daddog",breeder);
		dr.save(dog);
		Dog dog1 = new Dog(0,"puppers2","Labrador Retriver", 5, "momdog", "daddog",breeder);
		dr.save(dog1);
		
		breeder.getDogs().add(dog);
		breeder.getDogs().add(dog1);
		br.saveAndFlush(breeder);
		Assertions.assertEquals(2, breeder.getDogs().size());
	}
	
	@Test
	@Order(6)
	void getAllBreeders() {
		Breeder breeder = new Breeder();
		breeder.setbId(0);
		breeder.setName("testName");
		breeder.setPassword("password");
		breeder.setUsername("user");
		breeder.setEmail("legend@gmail.com");
		br.save(breeder);

		Breeder breeder1 = new Breeder();
		breeder.setbId(0);
		breeder.setName("newTestName");
		breeder.setPassword("testpassword");
		breeder.setUsername("testusername");
		breeder.setEmail("Agood@email.com");
		br.save(breeder1);
		
		Breeder breeder2 = new Breeder();
		breeder.setbId(0);
		breeder.setName("TheBesttestName");
		breeder.setPassword("2345");
		breeder.setUsername("AnotherUser");
		breeder.setEmail("theUser@gmail.com");
		br.save(breeder2);
		
		Assertions.assertEquals(4, br.count());
	}
	
	@Test
	@Order(7)
	void getBreederByUsername() {
		Breeder breeder = br.getBreederByUsername("testusername");
		Assertions.assertEquals("testusername", breeder.getUsername());
	}
}
