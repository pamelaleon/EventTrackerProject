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
}
