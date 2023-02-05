import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { DogProfile } from '../models/dog-profile';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogProfileService {

  url = environment.baseUrl + 'api/dogprofiles';

  constructor(
    private http: HttpClient,

  ) { }

  index(): Observable<DogProfile[]> {
    return this.http.get<DogProfile[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error(
              'TodoService.index(): error retrieving dogprofile list: ' + err
            )
        );
      })
    );
  }

  //TODO: show, create, update, destroy

  create(dog: DogProfile):Observable<DogProfile> {
    dog.name = '';
    dog.birthday = '';
    dog.age = 0;
    dog.breed = '';
    dog.weight = 0;
    dog.chipNumber = 0;
    dog.registrationNumber = 0;
    dog.foodBrand = '';
    dog.amountFood = '';
    dog.vetHospitalName = '';
    dog.ownerName = '';
    return this.http.post<DogProfile>(this.url, dog).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error(
              'DogProfileService.create(): error creating new dog profile: '+ err
            )

        );
      })
    );
  }

  destroy(id: number):Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error(
              'DogProfileService.destroy(): error deleting dog profile: ' + err
            )
        );
      })
    );
  }

  update(dog: DogProfile):Observable<DogProfile> {
    return this.http.put<DogProfile>(`${this.url}/${dog.id}`, dog).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error(
              'DogProfileService.update(): error updating dog profile:'+ err
            )

        );
      })
    );
  }

  show(id: number):Observable<DogProfile> {
    return this.http.get<DogProfile>(`${this.url}/${id}`).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error(
              'DogProfileService.show(): error retrieving dog profile:'+ err
            )

        );
      })
    );
  }

}
