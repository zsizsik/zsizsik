import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, empty } from 'rxjs';
import { User } from '../../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  list() : Observable<User[]> {
    return empty();
  }
}
