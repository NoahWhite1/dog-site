package dev.noah.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import dev.noah.entities.Breeder;
import dev.noah.entities.Dog;
import dev.noah.repositories.BreederRepository;

@Component
@Service
public class BreederServiceImpl implements BreederService {

	@Autowired
	private BreederRepository br;
	
	@Override
	public Breeder createBreeder(Breeder breeder) {
		return br.save(breeder);
	}

	@Override
	public Breeder getBreederById(int id) {
		return br.findById(id).get();
	}
	
	@Override
	public List<Breeder> getAllBreeders() {
		return (List<Breeder>) br.findAll();
	}

	@Override
	public Breeder updateBreeder(Breeder breeder) {
		return br.save(breeder);
	}

	@Override
	public Boolean deleteBreederById(int id) {
		Breeder removeBreeder = br.findById(id).get();
		
		if(removeBreeder != null) {
		br.delete(removeBreeder);
		return true;
		}else {
		return false;
		}
	}

	@Override
	public Breeder getBreederByUsername(String username) {
		return br.getBreederByUsername(username);
	}
}
