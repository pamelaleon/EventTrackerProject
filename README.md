# EventTrackerProject
This application was created to properly implement CRUD opperations to the Dog Profile Event Tracker. The user is able to create a new dog profie or have access to exsisting dog profiles that are filled with each dogs personal information. 

# Description 

| HTTP Verb | URI                  | Request Body | Response Body |
|-----------|----------------------|--------------|---------------|
| GET       | `/api/dogprofiles`    |              | JSON of `List<DogProfiles>` |
| GET       | `/api/dogprofiles/2` |              | JSON of `DogProfile` 2 |
| POST      | `/api/dogprofile`    | JSON of a new `DogProfile` | JSON of created `DogProfile` |
| PUT       | `/api/dogprofile/2` | JSON of a new version of `DogProfile` 17 | JSON of updated `DogProfile` |
| DELETE    | `/api/dogprofile/2` |              | |

The application is able to implement full CRUD. The user is able to create as many dog profiles as they wish and be able to save all dog personal information for future use. As I continue on developing this project I would be like to be able to add another functionality like the user can document a dogs daily activity like whether they went on a walk or they went to sleep. 

# Technologies Used
- Java
- Spring Boot
- REST 
- Gradle
- JUint 5
- JSON
- Postman
- MySQL workbench
- MAMP

# Lesson Learned 
While working on this project so far I have become more comfortable understanding how REST api's work. To my understanding, the Dog Profile Repository automatically gives CRUD like information so that I am able to build a more detailed CRUD method on the service side. If I wanted to create a new method for finding a dog profile that was created between October-December for example I would be able to start in the Repository side to implement that method. The controller is what is translated into the server. 

Starting to include HttPServletResponse and HttpServletRequest in my controller methods I believe has helped me understand how to properly use them to see a more adequate response if my method was able to work or not. Also using StringBuffer to request URL into a toString is get for the user's experience. 

