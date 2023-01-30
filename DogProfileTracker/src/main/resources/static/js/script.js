console.log('script.js is loaded');

window.addEventListener('load', function(evt) {
	console.log('Page is loaded');

	init();
});

function init() {
	
		let clickedTotal = false;
	document.getElementById("total").addEventListener('click', function(t) {
		t.preventDefault();
		if (clickedTotal === false) {
			clickedTotal = true;
			loadDataAggregationList();
		} else {
			clickedTotal = false;
			window.location.reload();
		}
	})
	
	let clicked = false;
	document.getElementById("displayAll").addEventListener('click', function(event) {
		event.preventDefault();
		if (clicked === false) {
			clicked = true;
			loadDogProfiles();
		} else {
			clicked = false;
			let element = document.getElementById("eventListTable");
			element.remove();
		}
	})

	document.getById.lookup.addEventListener('click', function(id) {
		id.preventDefault();

		let dogId = document.getById.dogId.value;
		if (!isNaN(dogId) && dogId > 0) {
			getDogProfileById(dogId);
		}
		
		
	})
	
	 newDogProfile.addDogProfile.addEventListener('click', function(evt){
	  evt.preventDefault();
	  
     let newDog = {
		name: newDogProfile.dogname.value,
		birthday: newDogProfile.birthday.value,
		age: newDogProfile.age.value,
		breed: newDogProfile.breed.value,
		weight: newDogProfile.weight.value,
		chipNumber: newDogProfile.chipNumber.value,
		registrationNumber: newDogProfile.registrationNumber.value,
		foodBrand: newDogProfile.foodBrand.value,
		amountFood: newDogProfile.amountFood.value,
		vetHospitalName: newDogProfile.vetHospitalName.value,
		ownerName: newDogProfile.ownerName.value,
	 };
	console.log(newDog);
	addDogProfile(newDog);
  })


}

function loadDataAggregationList(){
	let xhr = new XMLHttpRequest();

	xhr.open('GET', 'api/dogprofiles');
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			if (xhr.status === 200) {
				let list = (JSON.parse(xhr.responseText));
				showDataAggregation(list);
			}
			else {
				//TODO - display an error somewhere?
				displayError("Unable to show aggregated data" + xhr.status);

			}
		}
	};

	xhr.send();
}

function showDataAggregation(list){
	let h3 = document.createElement('h3');
	let e = document.getElementById('aggregateData');
	
	h3.innerHTML = "Number of Dog Profiles Currently Active: " + list.length + " accounts";
	e.appendChild(h3);
}



function addDogProfile(newDog){
	let xhr = new XMLHttpRequest();
	
	xhr.open('POST', 'api/dogprofile/');
	
	xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    if (xhr.status === 200 || xhr.status === 201) {
      let profile = JSON.parse(xhr.responseText); 
      displayDogProfile(profile);
      
    } 
    else {
      displayError('Unable to add Dog' + xhr.status);
    }
  }
};

xhr.setRequestHeader("Content-type", "application/json");
xhr.send(JSON.stringify(newDog));

}

function getDogProfileById(dogId) {
	let xhr = new XMLHttpRequest();

	xhr.open('GET', 'api/dogprofiles/' + dogId);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let profile = JSON.parse(xhr.responseText);
				displayDogProfile(profile);

			} else {
				displayError('Dog Profile Was Not Found');
			}
		}
	};

	xhr.send();
}

function displayDogProfile(profile){
	let dataDiv = document.getElementById('dogdata')
	dataDiv.innerHTML = "";
	
	let deleteCopy = document.getElementById('updateForm');
	if (deleteCopy) {
		deleteCopy.remove();
	}
	
	let h1 = document.createElement('h1');
	h1.textContent = profile.name;
	dataDiv.appendChild(h1);
	
	let ul = document.createElement('ul');
	dataDiv.appendChild(ul);
	let li = document.createElement('li');
	li.textContent = 'Birthday: ' + profile.birthday;
	ul.appendChild(li);
	li = document.createElement('li');
	li.textContent = 'Age: ' + profile.age;
	ul.appendChild(li);
	li = document.createElement('li');
	li.textContent = 'Breed: ' + profile.breed;
	ul.appendChild(li);
	li = document.createElement('li');
	li.textContent = 'Weight: ' + profile.weight + ' pounds';
	ul.appendChild(li);
	li = document.createElement('li');
	li.textContent = 'Chip Number: ' + profile.chipNumber;
	ul.appendChild(li);
	li = document.createElement('li');
	li.textContent = 'Registration Number: ' + profile.registrationNumber;
	ul.appendChild(li);
	li = document.createElement('li');
	li.textContent = 'Food Brand: ' + profile.foodBrand;
	ul.appendChild(li);
	li = document.createElement('li');
	li.textContent = 'Amount of Food Per Day: ' + profile.amountFood;
	ul.appendChild(li);
	li = document.createElement('li');
	li.textContent = 'Vet Hospital Name: ' + profile.vetHospitalName;
	ul.appendChild(li);
	li = document.createElement('li');
	li.textContent = 'Owner Name: ' + profile.ownerName;
	ul.appendChild(li);
	li = document.createElement('li');
	li.textContent = 'Dog Profile ID: ' + profile.id;
	ul.appendChild(li);
	li = document.createElement('li');
	li.textContent = '';
	ul.appendChild(li);
	
	
	let update = document.createElement('button');
	update.name = 'update';
	update.textContent = "Update Profile";
	li.appendChild(update);
    ul.append(li);
    
	
    update.addEventListener('click', function(){
		updateDogProfileForm(profile);
	})	
	
	let deleteDog = document.createElement('button');
	deleteDog.name = 'deleteDog';
	deleteDog.textContent = "Delete Profile";
	li.appendChild(deleteDog);
	ul.appendChild(li);
	
	deleteDog.addEventListener('click', function(){
		deleteProfile(profile);
	})
}

function deleteProfile(profile){
		let xhr = new XMLHttpRequest();

	xhr.open('DELETE', 'api/dogprofile/' + profile.id);
    xhr.setRequestHeader("Content-type", "application/json");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 204) {
		     
		     let profileRemoved = document.getElementById('dogdata');
		     profileRemoved.remove();

			} else {
				displayError('Dog Profile Was Not Deleted ' + xhr.status);
			}
		}
	};

	xhr.send();
}

function updateDogProfileForm(profile){
	let updateForm = document.getElementById('updateEventForm');
	let deleteCopy = document.getElementById('updateForm');
	if (deleteCopy) {
		deleteCopy.remove();
	}
	let form = document.getElementById('newDogProfile').cloneNode(true);
	console.log(profile);
	
	form.id = 'updateForm';
	form.dogname.value = profile.name;
	form.birthday.value = profile.birthday;
	form.age.value = profile.age;
	form.breed.value = profile.breed;
	form.weight.value = profile.weight;
	form.chipNumber.value = profile.chipNumber;
	form.registrationNumber.value = profile.registrationNumber;
	form.foodBrand.value = profile.foodBrand;
	form.amountFood.value = profile.amountFood;
	form.vetHospitalName.value = profile.vetHospitalName;
	form.ownerName.value = profile.ownerName;
	
	updateForm.appendChild(form);
	form.addDogProfile.addEventListener('click', function(evt){
		evt.preventDefault();
		let newDog = {
		name: form.dogname.value,
		birthday: form.birthday.value,
		age: form.age.value,
		breed: form.breed.value,
		weight: form.weight.value,
		chipNumber: form.chipNumber.value,
		registrationNumber: form.registrationNumber.value,
		foodBrand: form.foodBrand.value,
		amountFood: form.amountFood.value,
		vetHospitalName: form.vetHospitalName.value,
		ownerName: form.ownerName.value,
	 };
	 console.log("Calling update profile");
		updateProfile(profile, newDog);
	})
}

function updateProfile(profile, newDog){
	console.log("Creating request");
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/dogprofile/' + profile.id);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.onreadystatechange = function (){
		if (xhr.readyState == 4) {
			if (xhr.status === 201) {
				let newProfile = (JSON.parse(xhr.responseText));
				console.log(newProfile);
				displayDogProfile(newProfile);
			}
			else {
				displayError("Unable to update dog profile" + xhr.status);

			}
	}
	
}
console.log("SENDING");
	xhr.send(JSON.stringify(newDog));

}

function loadDogProfiles() {
	// AJAX 
	let xhr = new XMLHttpRequest();

	xhr.open('GET', 'api/dogprofiles');
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			if (xhr.status === 200) {
				let profileList = (JSON.parse(xhr.responseText));
				console.log(profileList);
				displayDogProfiles(profileList);
			}
			else {
				//TODO - display an error somewhere?
				displayError("Unable to display all Dog Profiles")

			}
		}
	};

	xhr.send();


}


function displayError(message) {
	let div = document.getElementById('eventList')
	div.textContent = message;
}

function displayDogProfiles(dogProfileList) {

	//	let displayDiv = document.getElementById('eventList');  Might delete later?? 
	let table = document.createElement('table');
	table.id = 'eventListTable';
	let thead = document.createElement('thead');
	let trow = document.createElement('tr');
	let tbody = document.createElement('tbody');
	let header = dogProfileList[0];

	for (let h in header) {
		let th = document.createElement("th");
		th.textContent = h;
		trow.appendChild(th);
	}

	for (let dog of dogProfileList) {
		let tr = document.createElement('tr');
		for (let d in dog) {
			let td = document.createElement('td');
			td.textContent = dog[d];
			tr.appendChild(td);
		}
		
		tbody.appendChild(tr);
	}
	thead.appendChild(trow);
	table.appendChild(thead);
	table.appendChild(tbody);
	document.body.appendChild(table);
}