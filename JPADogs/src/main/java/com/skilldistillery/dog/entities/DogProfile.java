package com.skilldistillery.dog.entities;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "dog_profile")
public class DogProfile {
	
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id; 
	
	private String name; 
	
	private String birthday; 
	
	private Integer age; 
	
	private String breed; 
	
	private Double weight; 
	
	@Column(name = "chip_number")
	private Integer chipNumber; 
	
	@Column(name = "registration_number")
	private Integer registrationNumber; 
	
	@Column(name = "food_brand")
	private String foodBrand; 
	
	@Column(name = "amount_food")
	private String amountFood;
	
	@Column(name = "vet_hospital_name")
	private String vetHospitalName; 
	
	@Column(name = "owner_name")
	private String ownerName;
	
	public DogProfile() {}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getBirthday() {
		return birthday;
	}

	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}

	

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public String getBreed() {
		return breed;
	}

	public void setBreed(String breed) {
		this.breed = breed;
	}

	
	public Double getWeight() {
		return weight;
	}

	public void setWeight(Double weight) {
		this.weight = weight;
	}

	public Integer getChipNumber() {
		return chipNumber;
	}

	public void setChipNumber(Integer chipNumber) {
		this.chipNumber = chipNumber;
	}

	public Integer getRegistrationNumber() {
		return registrationNumber;
	}

	public void setRegistrationNumber(Integer registrationNumber) {
		this.registrationNumber = registrationNumber;
	}

	public String getFoodBrand() {
		return foodBrand;
	}

	public void setFoodBrand(String foodBrand) {
		this.foodBrand = foodBrand;
	}

	public String getAmountFood() {
		return amountFood;
	}

	public void setAmountFood(String amountFood) {
		this.amountFood = amountFood;
	}

	public String getVetHospitalName() {
		return vetHospitalName;
	}

	public void setVetHospitalName(String vetHospitalName) {
		this.vetHospitalName = vetHospitalName;
	}

	public String getOwnerName() {
		return ownerName;
	}

	public void setOwnerName(String ownerName) {
		this.ownerName = ownerName;
	}

	@Override
	public String toString() {
		return "DogProfile [id=" + id + ", name=" + name + ", birthday=" + birthday + ", age=" + age + ", breed="
				+ breed + ", weight=" + weight + ", chipNumber=" + chipNumber + ", registrationNumber="
				+ registrationNumber + ", foodBrand=" + foodBrand + ", amountFood=" + amountFood + ", vetHospitalName="
				+ vetHospitalName + ", ownerName=" + ownerName + "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		DogProfile other = (DogProfile) obj;
		return id == other.id;
	}

	

}
