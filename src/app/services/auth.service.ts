import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { User } from "../User";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isloggedIn: boolean;
  userName: string;
  apiUrl: string = 'http://localhost:5000/users';

  constructor(private http: HttpClient) { }

  getUser(id: any): Observable<User> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<User>(url);
  }

  login(username: string, password: string) {

    //Assuming users are provided the correct credentials.
    //In real app you will query the database to verify.
    this.isloggedIn = true;
    this.userName = username;
    return of(this.isloggedIn);
  }
  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }

  isAdminUser(): boolean {
    if (this.userName == 'Admin') {
      return true;
    }
    return false;
  }

  logoutUser(): void {
    this.isloggedIn = false;
  }

}
