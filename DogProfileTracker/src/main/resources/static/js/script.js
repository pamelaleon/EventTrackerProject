console.log('script.js is loaded');

window.addEventListener('load', function(evt) {
	console.log('Page is loaded');

	init();
});

function init() {
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
		ownerName: newDogProfile.ownername.value,
	 };
	console.log(newDog);
	
  })


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

function updateDogProfile(profile){
	
}

function displayDogProfile(profile){
	let dataDiv = document.getElementById('dogdata')
	dataDiv.textContent = '';
	
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
	li.textContent = 'Weight: ' + profile.weight + 'pounds';
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