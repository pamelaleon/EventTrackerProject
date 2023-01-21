package com.skilldistillery.dog.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.dog.entities.DogProfile;
import com.skilldistillery.dog.services.DogProfileService;

@RestController
@RequestMapping("api")
public class DogProfileController {
	
	@Autowired
	private DogProfileService profileService;
	
	
	@GetMapping("dogprofiles")
	public List<DogProfile> findAllDogProfiles(){
		return profileService.allDogProfiles();
	}
	
	@GetMapping("dogprofiles/{id}")
	public DogProfile findDogProfileById(@PathVariable int id) {
		return profileService.getDogId(id);
		
	}
	
	

}
