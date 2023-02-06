import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DogProfile } from 'src/app/models/dog-profile';
import { DogProfileService } from 'src/app/services/dog-profile.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  ngOnInit(): void {
    this.reload();
  }

  dog: DogProfile[] = [];

  selected: null | DogProfile = null;

  newDogProfile: DogProfile = new DogProfile();

  constructor(private DogProfileService: DogProfileService, private route: ActivatedRoute, private router: Router){};

  reload(){
    this.DogProfileService.index().subscribe({
      next: (dogs) => {
        this.dog = dogs;
      },
      error: (oops) => {
        console.error('TodoListComponent.reload: error retrieving todos');
        console.error(oops);
      },
    });
  }

  addDog(dog: DogProfile): void{
    console.log(dog);
    this.DogProfileService.create(dog).subscribe({
      next: () => {
        this.newDogProfile = new DogProfile();
        this.reload();
      },
      error: (nojoy) => {
        console.error('ProfilesComponent.addDog: error creating new dog profile ');
        console.error(nojoy);
      }
    })
  }

}
