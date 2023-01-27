console.log('script.js is loaded');

window.addEventListener('load', function(evt){
	console.log('Page is loaded');
	
	init();
});

function init(){
	loadDogProfiles();
}

function loadDogProfiles(){
	// AJAX 
	let xhr = new XMLHttpRequest();
	
	xhr.open('GET', 'api/dogprofiles');
    xhr.onreadystatechange = function(){
		if(xhr.readyState ==4){
			if(xhr.status === 200){
				let profileList = (JSON.parse(xhr.responseText));
				console.log(profileList);
				displayDogProfiles(profileList);
			}
			else{
				//TODO - display an error somehwere?
				
			}
		}
	};
    
    xhr.send();
    
	
}

function displayDogProfiles(dogProfileList){
	//DOM
}