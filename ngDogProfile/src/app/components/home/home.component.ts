import { Component, OnInit } from '@angular/core';
import { DogProfile } from 'src/app/models/dog-profile';
import { DogProfileService } from 'src/app/services/dog-profile.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private dogProfileService: DogProfileService,
  ) {
  }

  profiles: DogProfile[] = [];

  ngOnInit(){
    this.reload();
  };

  reload(){
    this.dogProfileService.index().subscribe({
      next: (profileList)=>{
      this.profiles = profileList;
      },
        error: (oops: any) => {
          console.log('Error loading profiles');
          console.log(oops);
        },
      }
    )};



  }



