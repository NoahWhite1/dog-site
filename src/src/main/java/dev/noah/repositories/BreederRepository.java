package dev.noah.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import dev.noah.entities.Breeder;

@Component
@Repository
public interface BreederRepository extends JpaRepository<Breeder, Integer> {

	 Breeder getBreederByUsername(String username);
	
}
