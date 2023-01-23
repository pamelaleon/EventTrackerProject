package com.skilldistillery.dog.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	
	@PostMapping("dogprofile")
    public DogProfile createNewDogProfile(@RequestBody DogProfile profile, HttpServletResponse res, HttpServletRequest req) {
		DogProfile createdProfile = profileService.createDogProfile(profile);
		if (createdProfile == null) {
			res.setStatus(400);
		} else {
			res.setStatus(201);
			StringBuffer url = req.getRequestURL();
			url.append("/").append(profile.getId());
			res.setHeader("Location", url.toString());
		}
		
		return createdProfile;
		
	}
	
	@PutMapping("dogprofile/{id}")
	public DogProfile updateExistingDogProfile(@PathVariable int id, @RequestBody DogProfile profile, HttpServletResponse res, HttpServletRequest req) {
	DogProfile updatedProfile = profileService.updateDogProfile(id, profile);
		
		if (updatedProfile == null) {
			res.setStatus(400);
		} else {
			res.setStatus(201);
			StringBuffer url = req.getRequestURL();
			url.append("/").append(profile.getId());
			res.setHeader("Location", url.toString());
		}
		
		return updatedProfile;
	}
	
	
	@DeleteMapping("dogprofile/{id}")
	public void deleteDogProfile(@PathVariable int id, HttpServletResponse res) {
		if (profileService.deleteDogProfile(id)) {
			res.setStatus(204);
		} else {
			res.setStatus(404);
		}
	}
	
	
	
	
	
	

}
