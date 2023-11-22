package dev.noah.services;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import dev.noah.entities.Breeder;

@SpringBootTest(classes = dev.noah.app.DogBreedingApplication.class)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class BreederServiceTests {

	@Autowired
	private BreederServiceImpl bs;
	
	@Test
	@Order(1)
	void createBreeder() {
		Breeder breeder = new Breeder(0,"James","TheRealJames","bigpassword","acoolemail", "puppyimageurl",null);	
		bs.createBreeder(breeder);
		
		Assertions.assertNotEquals(0, breeder.getbId());
	}
	
	@Test
	@Order(2)
	void getBreeder() {
		Breeder breeder = bs.getBreederById(1);
		Assertions.assertEquals(1,breeder.getbId());
	}
	
	@Test
	@Order(3)
	void getAllBreeders() {
		Breeder breeder1 = new Breeder(0,"Karen","supercoolusername","supercoolpassword","somerandom@gmail.com", "puppyimages",null);
		bs.createBreeder(breeder1);
		Breeder breeder2 = new Breeder(0,"James","TheRealJames","bigpassword","acoolemail", "puppyimageurl",null);
		bs.createBreeder(breeder2);
		List<Breeder> breeders = bs.getAllBreeders();
		Assertions.assertEquals(3, breeders.size());
	}
	
	@Test
	@Order(4)
	void updateBreeder() {
		Breeder breeder = bs.getBreederById(1);
		breeder.setPassword("SuperCoolTestPassword");
		bs.updateBreeder(breeder);
		Assertions.assertEquals("SuperCoolTestPassword", breeder.getPassword());
	}
	
	@Test
	@Order(5)
	void deleteBreeder() {
		bs.deleteBreederById(1);
		Assertions.assertEquals(2, bs.getAllBreeders().size());
	}
	
	@Test
	@Order(6)
	void getBreederByUsername() {
		Breeder breeder = bs.getBreederByUsername("supercoolusername");
		Assertions.assertEquals("supercoolusername", breeder.getUsername());
	}
}
