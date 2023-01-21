package com.skilldistillery.dog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.dog.entities.DogProfile;

public interface DogProfileRepository extends JpaRepository<DogProfile, Integer> {

	
	
}
