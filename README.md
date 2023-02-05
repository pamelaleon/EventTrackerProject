# EventTrackerProject
This application was created to properly implement CRUD opperations to the Dog Profile Event Tracker. The user is able to create a new dog profie or have access to exsisting dog profiles that are filled with each dogs personal information. 

# Description 

| HTTP Verb | URI                  | Request Body | Response Body |
|-----------|----------------------|--------------|---------------|
| GET       | `/api/dogprofiles`    |              | JSON of `List<DogProfiles>` |
| GET       | `/api/dogprofiles/2` |              | JSON of `DogProfile` 2 |
| POST      | `/api/dogprofile`    | JSON of a new `DogProfile` | JSON of created `DogProfile` |
| PUT       | `/api/dogprofile/2` | JSON of a new version of `DogProfile` 2 | JSON of updated `DogProfile` |
| DELETE    | `/api/dogprofile/2` |              | |

The application is able to implement full CRUD. The user is able to create as many dog profiles as they wish and be able to save all dog personal information for future use. As I continue on developing this project I would be like to be able to add another functionality like the user can document a dogs daily activity like whether they went on a walk or they went to sleep. 

Aggregated data was also implemented by creating a function that returns how many active dog profiles there is. If a dog was added or deleted then the function reloads the page and is able to get an accurate updated active profile data.

# Technologies Used
- Java
- Spring Boot
- REST API's
- Gradle
- JUint 5
- JSON
- Postman
- MySQL workbench
- MAMP
- JavaScript
- AJAX
- HTML

# Lesson Learned 
While working on this project so far I have become more comfortable understanding how REST api's work. To my understanding, the Dog Profile Repository automatically gives CRUD like information so that I am able to build a more detailed CRUD method on the service side. If I wanted to create a new method for finding a dog profile that was created between October-December for example I would be able to start in the Repository side to implement that method. The controller is what is translated into the server. 

Starting to include HttPServletResponse and HttpServletRequest in my controller methods I believe has helped me understand how to properly use them to see a more adequate response if my method was able to work or not. Also using StringBuffer to request URL into a toString is get for the user's experience. 

Upon completing the project using JavaScript to get a new XMLHTTP request, I found myself having diificulties understanding how to perform DOM and intergrating javascript syntax together in order to update the exsisting dog profile. When first thinking about the problem I new that when I displayed a dog profile I wanted the update button to be within the display function. Then I was thinking whether it would be more practical for me to already make an update form in html or to build the form only when the update button was clicked.  
I decided to build the form and append it to the new dog profile function. I discovered that I if I used 
.cloneNode(true)
I was able to get a clone copy of the already exsisting add a new dog form to get its attributes and values. So when the user updates the profile, they are able to see the already inputs fields if the profile has any. 
Lastly, when the user updates the dog profile it calls another function where XMLHTTP request is called to find the right API path to be able to execute the function. 

Another problem I also encountered was that I was receiving duplicates of a profile displayed. For example if I search the dog id of 4 and then right after search for 5, then both 4 and 5 will be displayed at the same time insead of showing the most recent id searched. To overcome to problem I used .innerHTML and remove() functions in order for the page to just display the current id that was searched instead of populating the web with each additontal id search and displaying it. 


