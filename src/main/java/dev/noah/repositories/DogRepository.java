package dev.noah.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import dev.noah.entities.Dog;

@Component
@Repository
public interface DogRepository extends JpaRepository<Dog,Integer>{

}
