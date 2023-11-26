package dev.noah.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "dog")
public class Dog {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "d_id")
	private int dId;
	@Column(name = "name")
	private String name;
	@Column(name = "breed")
	private String breed;
	@Column(name = "age")
	private int age;
	@Column(name = "mother")
	private String mother;
	@Column(name = "father")
	private String father;
	@ManyToOne
	@JoinColumn(name = "b_id")
	@JsonIgnoreProperties(value={"dogs","hibernateLazyInitializer", "handler"})
	private Breeder breeder;
	
	public Dog() {
		super();
	}

	public Dog(int dId, String name, String breed, int age, String mother, String father, Breeder breeder) {
		super();
		this.dId = dId;
		this.name = name;
		this.breed = breed;
		this.age = age;
		this.mother = mother;
		this.father = father;
		this.breeder = breeder;
	}
	
	public Dog(int dId, String name, String breed, int age, String mother, String father) {
		super();
		this.dId = dId;
		this.name = name;
		this.breed = breed;
		this.age = age;
		this.mother = mother;
		this.father = father;
	}

	public int getdId() {
		return dId;
	}

	public void setdId(int dId) {
		this.dId = dId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getBreed() {
		return breed;
	}

	public void setBreed(String breed) {
		this.breed = breed;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getMother() {
		return mother;
	}

	public void setMother(String mother) {
		this.mother = mother;
	}

	public String getFather() {
		return father;
	}

	public void setFather(String father) {
		this.father = father;
	}

	public Breeder getBreeder() {
		return breeder;
	}

	public void setBreeder(Breeder breeder) {
		this.breeder = breeder;
	}

	@Override
	public String toString() {
		return "Dog [dId=" + dId + ", name=" + name + ", breed=" + breed + ", age=" + age + ", mother=" + mother
				+ ", father=" + father + ", breeder=" + breeder + "]";
	}
}
