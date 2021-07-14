import { Injectable } from '@angular/core';
import { of } from "rxjs";
import { UserService } from "../services/user.service";
import { User } from "../User";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isloggedIn: boolean = false;
  username: string;
  userType: string;
  users: User[] = [];
  
  constructor(private _userService: UserService) { 
    this._userService.getUsers().subscribe((users) => {
      console.log(users);
      this.users = users;
    });
  }

  login(username: string, password: string) {
    for (let i = 0; i < this.users.length; i++) {
      const user = this.users[i];
      const name = user.name;
      const pass = user.password;
      if(username == name && password == pass)
      {
        this.isloggedIn = true;
        this.userType = user.type;
        this.username = username;
        break;
      }
    }
    if (!this.isloggedIn) {
      alert("please enter valid user name and password!");
    }
    return of(this.isloggedIn);
  }

  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }

  isAdminUser(): boolean {
    if (this.userType == 'admin') {
      return true;
    }
    return false;
  }

  logoutUser(): void {
    this.isloggedIn = false;
  }

}
