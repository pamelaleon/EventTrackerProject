import { DogProfileService } from 'src/app/services/dog-profile.service';
import { DogProfile } from 'src/app/models/dog-profile';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  ngOnInit(): void {
    this.reload();
  }

  dog: DogProfile[] = [];

  selected: null | DogProfile = null;

  newDogProfile: DogProfile = new DogProfile();

  editDogProfile: DogProfile | null = null;

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

  addDog(dog: DogProfile) {
    this.DogProfileService.create(dog).subscribe({
      next: (createdDog) => {
        this.newDogProfile = new DogProfile();
        this.reload();
      },
      error: (nojoy) => {
        console.error('ProfilesComponent.addDog: error creating new dog profile ');
        console.error(nojoy);
      }
    })
  }

  updateDog(dog: DogProfile, goToDetail = true): void {
    this.DogProfileService.update(dog).subscribe({
      next: (updatedDog) => {
        if(goToDetail){
          this.selected = updatedDog;
        }
        else{
          this.selected = null;
        }
        this.editDogProfile = null;
        this.reload();
      },
      error: (oops) => {
        console.error('ProfilesComponent.updateDog: error updating dog profile');
        console.error(oops);

    }})

  }


  deleteDog(id: number) {
    this.DogProfileService.destroy(id).subscribe({
      next: () => {
        this.reload();
      },
      error: (fail) => {
        console.error('ProfilesComponent.deleteDog: error deleting:');
        console.error(fail);
      }});
    }

    generateId() {
      return this.dog[this.dog.length - 1].id + 1;
    }

    displayDog(dog: DogProfile) {
      this.selected = dog;
      console.log('dog was selected');
    }
    dogSelect(dog : DogProfile){
      this.selected = dog;

    }
    selectedType: string = 'all';

    setEditTodo() {
      this.editDogProfile = Object.assign({}, this.selected);
    }

    setAddDogProfile(){
      this.newDogProfile = Object.assign({}, this.selected);
    }

}
