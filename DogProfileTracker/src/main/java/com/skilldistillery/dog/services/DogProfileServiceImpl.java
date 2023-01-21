package com.skilldistillery.dog.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.dog.entities.DogProfile;
import com.skilldistillery.dog.repositories.DogProfileRepository;


@Service
public class DogProfileServiceImpl implements DogProfileService{
	
	@Autowired
	private DogProfileRepository profileRepo;

	@Override
	public List<DogProfile> allDogProfiles() {
		return profileRepo.findAll();
	}

	@Override
	public DogProfile getDogId(int id) {
		DogProfile profile = null;
		Optional<DogProfile> pOpt = profileRepo.findById(id);
		if(pOpt.isPresent()) {
			profile = pOpt.get();
		}
		return profile;
	}

	@Override
	public DogProfile createDogProfile(DogProfile profile) {
		return profileRepo.saveAndFlush(profile);
	}

	@Override
	public DogProfile updateDogProfile(int id, DogProfile profile) {
		DogProfile profileUpdate = getDogId(id);
		profileUpdate.setName(profile.getName());
		profileUpdate.setBirthday(profile.getBirthday());
		profileUpdate.setAge(profile.getAge());
		profileUpdate.setBreed(profile.getBreed());
		profileUpdate.setWeight(profile.getWeight());
		profileUpdate.setChipNumber(profile.getChipNumber());
		profileUpdate.setRegistrationNumber(profile.getRegistrationNumber());
		profileUpdate.setFoodBrand(profile.getFoodBrand());
		profileUpdate.setAmountFood(profile.getAmountFood());
		profileUpdate.setVetHospitalName(profile.getVetHospitalName());
		profileUpdate.setOwnerName(profile.getOwnerName());
		return profileRepo.save(profileUpdate);
	}

	@Override
	public boolean deleteDogProfile(int id) {
        profileRepo.deleteById(id);
		return !profileRepo.existsById(id);
	}

}
