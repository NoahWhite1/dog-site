package dev.noah.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "breeder")
public class Breeder {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "b_id")
	private int bId;
	@Column(name = "name")
	private String name;
	@Column(name = "username")
	private String username;
	@Column(name = "password")
	private String password;
	@Column(name = "email")
	private String email;
	@Column(name = "dog_url")
	private String dogUrl;
	@JsonIgnoreProperties(value={"breeder","hibernateLazyInitializer", "handler"})
	@OneToMany(mappedBy = "breeder", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private Set<Dog> dogs = new HashSet<Dog>();
	
	public Breeder() {
		super();
	}

	public Breeder(int bId, String name, String username, String password, String email, String dogUrl, Set<Dog> dogs) {
		super();
		this.bId = bId;
		this.name = name;
		this.username = username;
		this.password = password;
		this.email = email;
		this.dogUrl = dogUrl;
		this.dogs = dogs;
	}

	public int getbId() {
		return bId;
	}

	public void setbId(int bId) {
		this.bId = bId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getDogUrl() {
		return dogUrl;
	}

	public void setDogUrl(String dogUrl) {
		this.dogUrl = dogUrl;
	}

	public Set<Dog> getDogs() {
		return dogs;
	}

	public void setDogs(Set<Dog> dogs) {
		this.dogs = dogs;
	}

	@Override
	public String toString() {
		return "Breeder [bId=" + bId + ", name=" + name + ", username=" + username + ", password=" + password
				+ ", email=" + email + ", dogUrl=" + dogUrl + ", dogs=" + dogs + "]";
	}
}
