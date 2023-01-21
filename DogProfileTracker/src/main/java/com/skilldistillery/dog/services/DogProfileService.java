package com.skilldistillery.dog.services;

import java.util.List;

import com.skilldistillery.dog.entities.DogProfile;



public interface DogProfileService {
	List<DogProfile> allDogProfiles();
	DogProfile getDogId(int id);
	DogProfile createDogProfile(DogProfile profile);
	DogProfile updateDogProfile(int id, DogProfile profile);
	boolean deleteDogProfile(int id);

}
